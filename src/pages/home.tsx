import { animateToVisibleKeyframes } from '@/lib/animationClasses';
import { css } from '@emotion/css';
import React from 'react';

const Home = () => {
  return (
    <div className={css`padding: 0.5rem`}>
      <h1 className={css`text-align: center; margin: 1rem 0; animation: animateToVisible 2s linear; ${animateToVisibleKeyframes};`}>What is the Next Anime on your list? </h1>
    </div>
  )
};

export default Home;