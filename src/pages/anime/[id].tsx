import React from 'react';
import { css } from '@emotion/css';
import { ANIME_PAGE_QUERIES } from '@/lib/graphqlQueries';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import LoadingPage from '../loading';


const AnimePage = () => {
  const { id } = useParams();
  const graphqlQuery = gql`${ANIME_PAGE_QUERIES}`
  const { data, loading } = useQuery(graphqlQuery, { variables: { id: Number(id) } });

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div className={css`min-height:100vh;`}>
      <div className={
        css`
        background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), url(${data?.Media.coverImage.extraLarge});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: fixed;
        `}>
        <div className={css`
          width: 80%;
          margin: 0 auto;
          @media (min-width: 1024px) { 
            width: fit-content;
            margin: auto;
            height:50%;
          }
        `}>
          <img
            src={data?.Media.coverImage.large}
            alt={data?.Media.title}
            width={400} height={400}
            className={css`width: 100%;`} />
        </div>
      </div>
      <div className={css`
        padding: 1rem;
        background: linear-gradient(rgba(0,0,0, .3), rgba(0,0,0,.3)), url("anime_sky.jpg");
        @media (min-width: 1024px) { 
          max-width: 1024px;
          margin: auto
        }
      `}>
        <h1 className={css`
          text-align:center;
          @media (min-width: 1024px) { 
            text-align:left;
          }
        `}>{data?.Media.title.userPreferred} - {data?.Media.title.native}</h1>
        <div className={css`display: grid; grid-template-columns: 50% 50%; gap: 0.5rem; font-size:16px; margin: 1rem 0;`}>
          <div>Episodes: {data?.Media.episodes}</div>
          <div>Duration: {data?.Media.duration}mins</div>
          <div>Country: {data?.Media.countryOfOrigin}</div>
          <div>Start: {data?.Media.startDate.day}-{data?.Media.startDate.month}-{data?.Media.startDate.year}</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.Media.description }} />

        <button type='button'>Add To Collection</button>
      </div>
    </div>
  )
};

export default AnimePage;