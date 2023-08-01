import React from 'react';
import { css } from '@emotion/css';
import { useParams } from 'react-router-dom';
import HomeAnimeList from '@/components/HomeAnimeList';
import AnimePageList from '@/components/AnimePageList';

const CollectionPage = () => {
  const { id } = useParams();
  const collStorage = localStorage.getItem("collections");
  const parsedCol = JSON.parse(String(collStorage)).filter((col:any) => col.id === id);
  const animeStorage = localStorage.getItem(String(id));
  const parsedAnimes = JSON.parse(String(animeStorage));
  
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
      <h1 className={css`text-align: center; font-weight: bold; margin: 2rem 0;`}>{parsedCol[0].name}</h1>
      <AnimePageList animes={parsedAnimes} />
    </div>
  )
};

export default CollectionPage;