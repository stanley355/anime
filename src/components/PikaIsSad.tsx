import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/css';

const PikaIsSad = () => {
  return (
    <div className={css`margin-top: 1rem; color: black;`}>
      <Image src="/pika_sad.png" alt="Sad Pikachu" width={250} height={250}
        className={css`
      border-radius: 0.5rem;
      width: 70%; 
      height: auto; 
      margin: 0 15%;
      @media (min-width: 1024px) { 
        width: 40%;
        margin: 0 30%;
      }
    `} />
      <div className={css`text-align: center; font-size: 22px; font-weight: bold;`}>Pika is Sad you have no collection</div>
      <div className={css`text-align: center;`}>Click Add a Collection for your New Adventure</div>
    </div>
  )
};

export default PikaIsSad;