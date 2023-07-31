import React from 'react';
import { css } from '@emotion/css';
import { FaPlusCircle } from 'react-icons/fa';
import Image from 'next/image';
import AddNewCollectionBtn from '@/components/AddNewCollectionBtn';

const MyCollection = () => {
  return (
    <div className={css`
      min-height:100vh;
      padding: 0.5rem;
      background: linear-gradient(to bottom, #82addb 0%,#ebb2b1 100%);
      @media (min-width: 1024px) { 
        max-width: 1024px;
        margin: auto
      }
    `}>
      <h1 className={css`text-align: center; font-weight: 400;`}>My Collections</h1>
      <h3 className={css`text-align: center; font-weight: 400;`}>What's on My List?</h3>
      <AddNewCollectionBtn />
      <div className={css`margin-top: 2rem; color: black;`}>
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
    </div>
  )
};

export default MyCollection;