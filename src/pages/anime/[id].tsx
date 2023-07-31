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
    <div>
      <div className={
        css`background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), url(${data?.Media.coverImage.extraLarge});
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
    </div>
  )
};

export default AnimePage;