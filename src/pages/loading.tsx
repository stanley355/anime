import React from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import { animateToVisibleKeyframes } from '@/lib/animationClasses';
import Navbar from '@/components/Navbar';

const LoadingPage = () => {
  return (
    <div className={css`
        height:100vh;
        @media (min-width: 1024px) { 
          max-width: 1024px;
          margin: auto
        }
    `}>
      <Image src="/dancing-pika.gif" alt='Dancing Pika' width={400} height={400}
        className={css`width: 100%; height:auto;
        @media (min-width: 1024px) { 
          width: 30%;
          margin: 0 35%;
        }
      `} />
      <div className={css`text-align:center; margin: 2rem 0; font-size: 24px; color:black; animation: animateToVisible 2s linear infinite; ${animateToVisibleKeyframes};`}>
        Loading your Next Anime...
      </div>
    </div>
  );
};

export default LoadingPage;