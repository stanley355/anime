import React, { useState } from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import AddNewCollectionBtn from './AddNewCollectionBtn';
import { FaTimes } from 'react-icons/fa';

interface ICollectionModal {
  anime: any;
  onCloseClick: () => void;
}

const CollectionModal = (props: ICollectionModal) => {
  const { anime, onCloseClick } = props;
  const collectionStorage = localStorage.getItem("collections");
  const parsedCollections = collectionStorage ? JSON.parse(String(collectionStorage)) : [];
  const [collections, setCollections] = useState(parsedCollections);

  return (
    <div className={css`
        background: linear-gradient(rgba(0,0,0, .3), rgba(0,0,0,.3));
        position:fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      `}>
      <div
        className={css`
            background:white; 
            width:95%; 
            height:90%; 
            margin: 15% auto; 
            border-radius: 0.25rem; 
            color: black; 
            padding: 1rem;
            position:relative;
            @media (min-width: 1024px) { 
              width: 400px;
              margin: 2rem auto;
            }
          `}>
        <button onClick={onCloseClick} className={css`position:absolute; top:0.5rem; right: 0.5rem; background:none; border:none; font-size: 24px; cursor: pointer;`}>
          <FaTimes />
        </button>
        <div className={css`text-align:center; font-size: 20px; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;`}>Add Anime to Collection</div>
        <div className={css`display:flex; align-items:center; gap:0.5rem; border: 1px solid black; border-radius: 0.25rem; margin-bottom: 1rem;`}>
          <div className={css`width: 30%; height: 100px;`}>
            <img src={anime.coverImage.large} alt={anime.title.native} width={400} height={400} className={css`width: 100%; height: 100%;`} />
          </div>
          <div >
            <div>{anime.title.native}</div>
            <div>{anime.title.userPreferred}</div>
            <div className={css`font-size: 12px;`}>{anime.genres[0]}/{anime.genres[1]}</div>
          </div>
        </div>
        <div className={css`display: ${collections.length > 0 ? "none" : "block"}`}>
          <Image src="/empty_collection.png" alt="No Collection" width={400} height={400} className={css`width: 50%; margin: 0 25%; height: auto;`} />
          <div className={css`text-align:center; font-weight: bold;`}>You Have No Collection yet</div>
          <div className={css`width: fit-content; margin: 0 auto;`}>
            <AddNewCollectionBtn onCollectionChange={setCollections} />
          </div>
        </div>
        <form action="" className={css`display: ${collections.length > 0 ? "block" : "none"}`}>
          <div className={css`margin-bottom: 0.5rem; font-weight: bold; text-align:center;`}>To Which Collection would you like to add?</div>
          <div className={css`max-height:400px; margin-bottom: 0.5rem; overflow:auto;`}>
            {collections.map((col: any,) =>
              <label htmlFor={col.id} className={css`display:flex; align-items:center; justify-content:space-between; border: 1px solid black; padding: 0.5rem; border-radius: 1rem; margin-bottom: 1rem;`}>
                <span>{col.name}</span>
                <input type="checkbox" id={col.id} name={col.id} className={css`width: 1.5rem; height:1.5rem;`} onChange={(e) => console.log(e.target.name)} />
              </label>
            )}
          </div>
          <button type="submit" className={css`
            background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%); 
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.25rem;
            border: 1px solid black;
            font-size: 16px;
          `}>Submit</button>
        </form>
      </div>
    </div>
  )
};

export default CollectionModal;