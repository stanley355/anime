import React, { useContext, useState } from 'react';
import { css } from '@emotion/css';
import { useParams } from 'react-router-dom';
import HomeAnimeList from '@/components/HomeAnimeList';
import AnimePageList from '@/components/AnimePageList';
import RenameCollectionBtn from '@/components/RenameCollectionBtn';
import { FaArrowCircleLeft } from 'react-icons/fa';
import EmptyAnime from '@/components/EmptyAnime';

const CollectionPage = () => {
  const { id } = useParams();
  const collectionStorage = localStorage.getItem("collections");
  const parsedCollections = collectionStorage ? JSON.parse(String(collectionStorage)) : [];
  const [collection, setCollection] = useState(parsedCollections[0]);
  const animeStorage = localStorage.getItem(String(id));
  const parsedAnimes = animeStorage ? JSON.parse(String(animeStorage)) : [];
  const [animeCollection, setAnimeCollection] = useState(parsedAnimes);

  const onChangeName = (col: any) => {
    localStorage.removeItem(collection.id);
    localStorage.setItem(col.id, JSON.stringify(parsedAnimes));
    setCollection(col);
    setAnimeCollection(parsedAnimes);
  }

  return (
    <div className={css`
      min-height:100vh;
      padding: 0.5rem;
      background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), transparent;
      @media (min-width: 1024px) { 
        max-width: 1024px;
        margin: auto
      }
    `}>
      <div className={css`display: flex; align-items:center; justify-content: space-between;`}>
        <button type="button" className={css`background: none; color: white; border: none; font-size: 28px; cursor: pointer;`} onClick={() => history.back()}>
          <FaArrowCircleLeft />
        </button>
        <div className={css`text-align: center; font-weight: bold; margin: 2rem 0; font-size:28px;`}>{collection.name}</div>
        <RenameCollectionBtn
          collection={collection}
          index={Number(id)}
          dispatchCol={onChangeName}
          onCollectionChange={_ => { }} />
      </div>
      {!animeCollection.length && <EmptyAnime />}
      {animeCollection.length > 0 && <AnimePageList animes={animeCollection} />}
    </div>
  )
};

export default CollectionPage;