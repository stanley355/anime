import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';


interface IHomeAnimeList {
  homeMediaData: any;
}

const HomeAnimeList = (props: IHomeAnimeList) => {
  const { homeMediaData } = props;
  const cardCTAbaseCss = css`text-align: center; border:none; width:50%; border-radius: 0.25rem; padding: 0.5rem 0;`
  
  return (
    <div className={css`
    @media (min-width: 1024px) { 
      display:grid;
      grid-template-columns: 50% 50%;
      gap: 1rem;
    }
  `}>
      {homeMediaData.length > 0 && homeMediaData.map((media: any) =>
        <div
          key={media.title}
          className={css`
          border: 1px solid white; 
          border-radius: 0.5rem; 
          padding: 0.5rem; 
          margin-bottom: 1rem;
          @media (min-width: 1024px) { 
            display:flex; 
            align-items:center;
            gap: 1rem;
          }
      `}>
          <div className={css`
          @media (min-width: 1024px) { 
            max-width: 25%;
          }
        `}>
            <img src={media.coverImage.large} alt={media.title} width={400} height={400} className={css`width: 100%; height:auto; max-height:250px; border-radius: 0.5rem;`} />
          </div>
          <div className={css`
          @media (min-width: 1024px) { 
            display:flex;
            flex-direction: column;
            width: 100%;
          }
        `}>
            <div>
              <Link to={`/anime/${media.id}`} className={css`font-weight:600; display:flex; justify-content:center; text-align:center; font-size:20px; margin: 0.5rem 0; &:hover {text-decoration: underline;}`}>{media.title.native} - {media.title.userPreferred}</Link>
              <div className={css`text-align:center; margin-bottom: 1rem;`}>{media.genres.map((genre: string, i: number) => `${genre}${i !== media.genres.length - 1 ? "," : ""}`)}</div>
              <div className={css`display: grid; grid-template-columns: 50% 50%; gap: 0.5rem;`}>
                <div>Episodes: {media.episodes}</div>
                <div>Duration: {media.duration}mins</div>
                <div>Country: {media.countryOfOrigin}</div>
                <div>Start: {media.startDate.day}-{media.startDate.month}-{media.startDate.year}</div>
              </div>
            </div>
            <div className={css`display: flex; align-items:center; gap: 1rem; margin-top: 1rem;`}>
              <Link to={`/anime/${media.id}`} className={css`${cardCTAbaseCss} background: hotpink; color: black; `}>
                Detail
                </Link>
              <button type='button' className={css`${cardCTAbaseCss} padding: 0.75rem 0;`}>
                Add To Collection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default HomeAnimeList;