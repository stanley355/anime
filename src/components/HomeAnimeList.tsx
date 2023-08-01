import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';
import AddToCollectionBtn from './AddToCollectionBtn';


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
        grid-template-columns: 49% 49%;
        gap: 1rem;
      }`
    }>
      {homeMediaData.length > 0 && homeMediaData.map((media: any) =>
        <div
          key={media.id}
          className={css`
          border: 1px solid white; 
          border-radius: 0.5rem; 
          padding: 0.5rem;
          margin-bottom: 1rem;
          background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), transparent;
      `}>
          <div className={css`display:flex; gap: 1rem;`}>
            <Link to={`/anime/${media.id}`} className={css`height:100%; width: 30%;`}>
              <img
                src={media.coverImage.large}
                alt={media.title}
                width={400}
                height={400}
                className={css`width: 100px; height:175px; border-radius: 0.5rem;`} />
            </Link>
            <div className={css`margin: 0 auto; width:100%;`}>
              <Link to={`/anime/${media.id}`}
                className={css`
                font-weight:600; 
                text-align:center; 
                font-size:18px; margin: 0.5rem 0; &:hover {text-decoration: underline;}`}>
                <div>{media.title.native}</div>
                <div>{media.title.userPreferred}</div>
                <div className={css`text-align:center; margin-bottom: 1rem; font-weight:400; font-size:14px;`}>
                  {media.genres[0]}/{media.genres[1]}/{media.genres[2]}
                </div>
              </Link>
              <div className={css`display: grid; grid-template-columns: 50% 50%; gap: 0.25rem; margin-bottom: 1rem; place-items:center;`}>
                <div>Eps: {media.episodes}</div>
                <div>Dur: {media.duration}mins</div>
                <div>Source: {media.countryOfOrigin}</div>
                <div>Score: {media.averageScore}/100</div>
              </div>
              <div className={css`width: fit-content; margin: 0 auto;`}>

              <AddToCollectionBtn />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
};

export default HomeAnimeList;