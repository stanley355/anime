import React from 'react';
import { animateToVisibleKeyframes } from '@/lib/animationClasses';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

interface IHome {
  homeMediaData: Array<any>
}

const Home = (props: IHome) => {
  const { homeMediaData } = props;

  const cardCTAbaseCss = css`text-align: center; border:none; width:50%; border-radius: 0.25rem; padding: 0.5rem 0;`

  return (
    <div className={css`padding: 0.5rem`}>
      <h1 className={css`text-align: center; margin: 1rem 0; animation: animateToVisible 2s linear; ${animateToVisibleKeyframes};`}>What is the Next Anime on your list? </h1>

      <div className={css`
        @media (min-width: 1024px) { 
          display:grid;
          grid-template-columns: 50% 50%;
          gap: 1rem;
        }
      `}>
        {homeMediaData.length > 0 && homeMediaData.map((media: any, index) =>
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
              }
            `}>
              <div>
                <div className={css`font-weight:600; text-align: center; font-size:20px; margin: 0.5rem 0;`}>{media.title.native} - {media.title.userPreferred}</div>
                <div className={css`text-align:center; margin-bottom: 1rem;`}>{media.genres.map((genre: string, i: number) => `${genre}${i !== media.genres.length - 1 ? "," : ""}`)}</div>
                <div className={css`display: grid; grid-template-columns: 50% 50%; gap: 0.5rem;`}>
                  <div>Episodes: {media.episodes}</div>
                  <div>Duration: {media.duration}mins</div>
                  <div>Country: {media.countryOfOrigin}</div>
                  <div>Start: {media.startDate.day}-{media.startDate.month}-{media.startDate.year}</div>
                </div>
              </div>
              <div className={css`display: flex; align-items:center; gap: 1rem; margin-top: 1rem;`}>
                <Link to={`/anime/${media.id}`} className={css`${cardCTAbaseCss} background: hotpink; color: black; `}>Detail</Link>
                <button type='button' className={css`${cardCTAbaseCss} padding: 0.75rem 0;`}>
                  Add To Collection
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default Home;