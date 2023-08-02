import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const EmptyAnime = () => {
  return (
    <div className={css`margin-top: 1rem; width:100%;`}>
      <Image src="/empty_collection.png" alt='Empty Collection' width={400} height={400}
        className={css`
        width: 50%; 
        height: auto; 
        margin: 0 25%;
        @media (min-width: 1024px) { 
          width: 30%;
          margin: 0 35%;
        }`
        } />
      <div className={css`text-align: center; font-size: 22px; font-weight: bold;`}>Your Anime is Empty</div>
      <div className={css`text-align: center;margin-bottom: 1rem;`}>Click below to add more Anime</div>
      <div className={css`width: fit-content; margin: 0 auto;`}>
        <Link to="/" className={css`
        padding: 0.5rem;
        background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%);
        color: black;
        text-align:center; 
        border-radius: 0.25rem;
      `}>Find Awesomeness</Link>
      </div>
    </div>
  )
};

export default EmptyAnime;