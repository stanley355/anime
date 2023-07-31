import React, { useState } from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import AddNewCollectionBtn from '@/components/AddNewCollectionBtn';
import PikaIsSad from '@/components/PikaIsSad';
import { Link } from 'react-router-dom';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import RenameCollectionBtn from '@/components/RenameCollectionBtn';

const MyCollection = () => {
  const collectionStorage = localStorage.getItem("collections");
  const parsedCollections = collectionStorage ? JSON.parse(String(collectionStorage)) : [];
  const [collections, setCollections] = useState(parsedCollections);

  return (
    <div className={css`
      min-height:100vh;
      padding: 0.5rem;
      background: url("collection_bg.webp");
      background-repeat: no-repeat;
      background-size: cover;
      @media (min-width: 1024px) { 
        max-width: 1024px;
        margin: auto
      }
    `}>
      <h1 className={css`text-align: center; font-weight: 400;`}>My Collections</h1>
      <h3 className={css`text-align: center; font-weight: 400;`}>What's on My List?</h3>
      <AddNewCollectionBtn onCollectionChange={setCollections} />
      {collections.length === 0 && <PikaIsSad />}
      <div className={css`
            margin-top:2rem;
            width: 100%;
            @media (min-width: 1024px) { 
              display:grid;
              grid-template-columns: 33% 33% 33%;
              gap:0.5rem;
            }
      `}>
        {collections.length > 0 &&
          collections.map((col: any, index: number) => <div key={col.id}
            className={css`
          margin-bottom: 1rem;
          border-radius: 0.25rem; 
          padding: 0.5rem;
          background: linear-gradient(rgba(0,0,0, .3), rgba(0,0,0,.3)), url("anime_sky.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: fixed;
        `}>
            <img src="placeholder.webp" alt={col.name} width={300} height={300} className={css`width:100%; height: 150px; border-radius: 0.25rem;`} />
            <div className={css`display:flex; align-items:center; justify-content: space-between;`}>
              <Link to={`/collections/${col.id}`} className={css`font-size:20px; font-weight:bold;&:hover{text-decoration: underline;}`}>{col.name}</Link>
              <div>{new Date(col.createdAt).toLocaleDateString()}</div>
            </div>
            <div className={css`display:grid; grid-template-columns: 33% 33% 33%; gap: 4px;margin-top:1rem;`}>
              <Link
                to={`/collections/${col.id}`}
                className={css`
                display:flex; 
                align-items:center; 
                justify-content:center; 
                background:lightblue; 
                gap:4px; 
                padding: 0.5rem; 
                color:black; 
                border-radius:0.25rem;
              `}>
                <FaEye />
                <span>View</span>
              </Link>
              <RenameCollectionBtn collection={col}  index={index} onCollectionChange={setCollections} />
              <button type="button">
                <FaTrash />
                <span>Dump</span>
              </button>
            </div>
          </div>
          )}
      </div>
    </div>
  )
};

export default MyCollection;