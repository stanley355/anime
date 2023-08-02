import React, { useState } from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import AddNewCollectionBtn from './AddNewCollectionBtn';
import { FaTimes } from 'react-icons/fa';

interface IBulkCollectionModal {
  animeCollections: Array<any>;
  onCloseClick: () => void;
}

const BulkCollectionModal = (props: IBulkCollectionModal) => {
  const { animeCollections, onCloseClick } = props;
  const collectionStorage = localStorage.getItem("collections");
  const parsedCollections = collectionStorage ? JSON.parse(String(collectionStorage)) : [];
  const [collections, setCollections] = useState(parsedCollections);
  const [checkedAnime, setCheckedAnime] = useState<Array<any>>([]);
  const [checkedCollections, setCheckedCollections] = useState<Array<any>>([]);

  const handleAnimeOnChange = (e: any) => {
    const checked = e.target.checked;

    if (checked) {
      const name: any = e.target.name;
      const targetAnime = animeCollections.filter(anime => anime.id === Number(name));
      let newChecked: Array<any> = structuredClone(checkedAnime);
      newChecked.push(targetAnime[0]);
      setCheckedAnime(newChecked);
      return;
    }
  }

  const handleOnChange = (e: any) => {
    const checked = e.target.checked;

    if (checked) {
      const name: any = e.target.name;
      let newChecked: Array<any> = structuredClone(checkedCollections);
      newChecked.push(name);
      setCheckedCollections(newChecked);
      return;
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const filteredCheckedAnime = checkedAnime.filter((col) => col !== "undefined");
    if (!filteredCheckedAnime.length) {
      alert("Please Select an anime");
      return;
    }

    const filteredCheckedCol = checkedCollections.filter((col) => col !== "");
    if (!filteredCheckedCol.length) {
      alert("Please select a collection!");
      return;
    }

    filteredCheckedAnime.forEach((anime: any) => {
      filteredCheckedCol.forEach((col) => {
        const animeColStorage = localStorage.getItem(col);
        let animeCol = animeColStorage ? JSON.parse(String(animeColStorage)) : [];
        const hasAddedAnime = animeCol.length > 0 ? animeCol.filter((col: any) => col.id === anime.id).length > 0 : false;

        if (!hasAddedAnime) {
          animeCol.push(anime);
          localStorage.setItem(col, JSON.stringify(animeCol));
          return;
        }
      });
    });

    alert("Anime Added to collections");
    onCloseClick();
    return;
  }

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
            height:95%; 
            margin: 5% auto; 
            border-radius: 0.25rem; 
            color: black; 
            padding: 1rem;
            position:relative;
            overflow: auto;
            @media (min-width: 1024px) { 
              width: 60%;
              margin: 2rem auto;
            }
          `}>
        <button onClick={onCloseClick} className={css`position:absolute; top:0.5rem; right: 0.5rem; background:none; border:none; font-size: 24px; cursor: pointer;`}>
          <FaTimes />
        </button>
        <div className={css`text-align:center; font-size: 20px; font-weight: bold; margin-top: 2rem; margin-bottom: 1rem;`}>Bulk Add Anime to Collections</div>
        <div className={css`
            @media (min-width: 1024px) { 
              display:grid;
              grid-template-columns: 49% 49%;
              gap: 0.5rem;
            }
        `}>
          <div className={css`margin-bottom: 1rem;`}>
            <div className={css`margin-bottom: 0.5rem; font-weight: bold; text-align:center;`}>Select Anime you want to Add</div>
            {animeCollections.map((anime) =>
              <label htmlFor={anime.id} className={css`display:flex; align-items:center; gap:0.5rem; border: 1px solid black; border-radius: 0.25rem; margin-bottom: 0.5rem;`}>
                <div className={css`width: 20%; height: 50px;`}>
                  <img src={anime.coverImage.large} alt={anime.title.native} width={400} height={400} className={css`width: 100%; height: 100%;`} />
                </div>
                <div >
                  <div className={css`font-size: 12px;`}>{anime.title.userPreferred}</div>
                  <div className={css`font-size: 12px;`}>{anime.genres[0]}/{anime.genres[1]}</div>
                </div>
                <input
                  type="checkbox"
                  id={anime.id}
                  name={anime.id}
                  className={css`width: 1.5rem; height:1.5rem; margin-left: auto; margin-right: 0.25rem;`}
                  onChange={handleAnimeOnChange}
                />
              </label>
            )}
          </div>
          <div className={css`display: ${collections.length > 0 ? "none" : "block"}`}>
            <Image src="/empty_collection.png" alt="No Collection" width={400} height={400} className={css`width: 50%; margin: 0 25%; height: auto;`} />
            <div className={css`text-align:center; font-weight: bold;`}>You Have No Collection yet</div>
            <div className={css`width: fit-content; margin: 0 auto;`}>
              <AddNewCollectionBtn onCollectionChange={setCollections} />
            </div>
          </div>
          <form onSubmit={handleSubmit} className={css`display: ${collections.length > 0 ? "block" : "none"}`}>
            <div className={css`margin-bottom: 0.5rem; font-weight: bold; text-align:center;`}>Select Target Collection</div>
            <div className={css`margin-bottom: 0.5rem;`}>
              {collections.map((col: any,) =>
                <label key={col.id} htmlFor={col.id} className={css`display:flex; align-items:center; justify-content:space-between; border: 1px solid black; padding: 0.5rem; border-radius: 0.25rem; margin-bottom: 1rem;`}>
                  <span>{col.name}</span>
                  <input type="checkbox" id={col.id} name={col.id} className={css`width: 1.5rem; height:1.5rem;`} onChange={handleOnChange} />
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
            cursor: pointer;
          `}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default BulkCollectionModal;