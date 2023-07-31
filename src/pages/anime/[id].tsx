import React, { useEffect, useState } from 'react';
import { css } from '@emotion/css';
import { fetchAniList } from '@/lib/fetchAniList';
import { ANIME_PAGE_QUERIES } from '@/lib/graphqlQueries';
import { useRouter } from 'next/router';


const AnimePage = () => {
  const router: any = useRouter();
  const path: number = router?.query?.path[1];



  return (
    <div>
      {path}
      {/* <div className={
        css`background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), url(${animeMediaData.coverImage.extraLarge});
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
            src={animeMediaData.coverImage.large}
            alt={animeMediaData.title}
            width={400} height={400}
            className={css`width: 100%;`} />
        </div>
      </div> */}
    </div>
  )
};

export default AnimePage;