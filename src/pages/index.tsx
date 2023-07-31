import Head from 'next/head'
import { Inter } from 'next/font/google';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { css } from '@emotion/css';
import Navbar from '@/components/Navbar';
import Home from './home';
import classNames from 'classnames';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { fetchAniList } from '@/lib/fetchAniList';
import { HOME_PAGE_QUERIES } from '@/lib/graphqlQueries';

const inter = Inter({ subsets: ['latin'] })

const Index = (props: any) => {
  const { mediaData } = props;
  console.log(mediaData);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BrowserRouter>
        <Navbar />
        <div className={
          classNames(inter.className, css`
            @media (min-width: 1024px) { 
              max-width: 1024px;
              margin: auto
            }`
          )} >
          <Routes>
            <Route path="/about" element={<h1>About</h1>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Index;
export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const homePageData = await fetchAniList(HOME_PAGE_QUERIES);

  return {
    props: {
      mediaData: homePageData?.data?.Page?.media ? homePageData.data?.Page?.media : []
    }
  }
}