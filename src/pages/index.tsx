import Head from 'next/head'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { css } from '@emotion/css';
import Navbar from '@/components/Navbar';
import Home from './home';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { aniListClient, fetchAniList } from '@/lib/fetchAniList';
import { HOME_PAGE_QUERIES } from '@/lib/graphqlQueries';
import AnimePage from './anime/[id]';
import { ApolloProvider } from '@apollo/client';
import MyCollection from './collection';
import CollectionPage from './collection/[id]';

const Index = (props: any) => {
  const { homeMediaData, page } = props;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <BrowserRouter>
          <ApolloProvider client={aniListClient}>
            <Navbar />
            <Routes>
              <Route path="/collections/:id" element={<CollectionPage />} />
              <Route path="/collections" element={<MyCollection />} />
              <Route path="/anime/:id" element={<AnimePage />} />
              <Route path="/" element={<Home homeMediaData={homeMediaData} page={page} />} />
            </Routes>
            <div className={css`border-top: 1px solid white; display: flex; justify-content: center; padding: 1rem 0; color: black; font-weight: bold;`}>
              Copyright {new Date().getFullYear()} winatastanley355@gmail.com
            </div>
          </ApolloProvider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default Index;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const { query } = ctx;
  const variables = {
    page: query?.page ? query.page : 1
  }
  const homePageData = await fetchAniList(HOME_PAGE_QUERIES, variables);

  return {
    props: {
      homeMediaData: homePageData?.data?.Page?.media ? homePageData.data?.Page?.media : [],
      page: query?.page ? query.page : 1
    }
  }
}