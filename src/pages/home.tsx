import React from 'react';
import { animateToVisibleKeyframes } from '@/lib/animationClasses';
import { css } from '@emotion/css';
import HomeAnimeList from '@/components/HomeAnimeList';

interface IHome {
  homeMediaData: Array<any>
}

const Home = (props: IHome) => {
  const { homeMediaData } = props;


  return (
    <div className={css`padding: 0.5rem`}>
      <h1 className={css`text-align: center; margin: 1rem 0; animation: animateToVisible 2s linear; ${animateToVisibleKeyframes};`}>What is the Next Anime on your list? </h1>
      <HomeAnimeList homeMediaData={homeMediaData} />
    </div>
  )
};

export default Home;