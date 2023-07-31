import React from 'react';
import { css } from '@emotion/css';
import Link from 'next/link';
import { animateToVisibleKeyframes } from '@/lib/animationClasses';
import HomeAnimeList from '@/components/HomeAnimeList';
import classNames from 'classnames';

interface IHome {
  page: number;
  homeMediaData: Array<any>
}

const Home = (props: IHome) => {
  const { homeMediaData, page } = props;

  const activePageClassname = css`background: white; color: black;`;

  return (
    <div className={
      css`
        padding: 0.5rem;
        @media (min-width: 1024px) { 
          max-width: 1024px;
          margin: auto
        }`
    } >
      <h1 className={css`text-align: center; margin: 1rem 0; animation: animateToVisible 2s linear; ${animateToVisibleKeyframes};`}>What is the Next Anime on your list? </h1>
      <HomeAnimeList homeMediaData={homeMediaData} />
      <div className={css`text-align:center; margin-top: 3rem; font-size:20px; text-decoration: underline;`}>Pages</div>
      <div className={css`display:flex; justify-content:center; gap:0.5rem; font-size:20px; margin-top: 0.5rem;`}>
        {homeMediaData.length > 0 && homeMediaData.map((media: any, index: number) =>
          <Link href={`?page=${index + 1}`} className={Number(page) === index + 1 ? css`${activePageClassname} padding: 0 0.5rem; border-radius: 0.25rem;` : css`padding: 0 0.5rem; border-radius: 0.25rem; &:hover {${activePageClassname} }`} key={index}>
            {index + 1}
          </Link>)}
      </div>
    </div>
  )
};

export default Home;