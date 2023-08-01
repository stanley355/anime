import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/css';

const EmptyCollection = () => {
  return (
    <div className={css`margin-top: 1rem;`}>
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
      <div className={css`text-align: center; font-size: 22px; font-weight: bold;`}>Your Collection is Empty.</div>
      <div className={css`text-align: center;`}>Click Add a Collection for New Adventure</div>
    </div>
  )
};

export default EmptyCollection;