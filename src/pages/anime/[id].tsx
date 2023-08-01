import React, { useMemo, useState } from 'react';
import { css } from '@emotion/css';
import { ANIME_PAGE_QUERIES } from '@/lib/graphqlQueries';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import LoadingPage from '../loading';
import AddToCollectionBtn from '@/components/AddToCollectionBtn';
import { Link } from 'react-router-dom';
import { checkAnimeAdded } from '@/lib/checkAnimeAdded';


const AnimePage = () => {
  const { id } = useParams();
  const graphqlQuery = gql`${ANIME_PAGE_QUERIES}`
  const { data, loading } = useQuery(graphqlQuery, { variables: { id: Number(id) } });
  const [addedCollections, setAddedCollections] = useState(checkAnimeAdded(data?.Media.id));

  if (loading) {
    return <LoadingPage />
  }

  return (
    <div className={css`min-height:100vh;`}>
      <div className={
        css`
        height:250px;
        background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), url(${data?.Media.coverImage.extraLarge});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: fixed;
        @media (min-width: 1024px) { 
          height: 400px;
        }
        `}>
        <img
          src={data?.Media.coverImage.large}
          alt={data?.Media.title}
          width={400} height={400}
          className={css`
            width: 60%; 
            height:250px; 
            margin: 0 20%;
            @media (min-width: 1024px) {
              width: 30%;
              height: 400px;
              margin: 0 35%;
            }
          `}
        />
      </div>
      <div className={css`
        padding: 1rem;
        background: linear-gradient(rgba(0,0,0, .6), rgba(0,0,0,.6));
        min-height: 80vh;
        @media (min-width: 1024px) { 
          max-width: 1024px;
          margin: auto
        }
      `}>
        <h1 className={css`
          text-align:center;
          @media (min-width: 1024px) { 
            text-align:left;
          }
        `}>{data?.Media.title.userPreferred} - {data?.Media.title.native}</h1>
        <div className={css`display: grid; grid-template-columns: 50% 50%; gap: 0.5rem; font-size:16px; margin: 1rem 0;`}>
          <div>Episodes: {data?.Media.episodes}</div>
          <div>Duration: {data?.Media.duration}mins</div>
          <div>Country: {data?.Media.countryOfOrigin}</div>
          <div>Score: {data?.Media.averageScore}/100</div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: data?.Media.description }} />

        <div className={css`margin-top: 1rem;`}>
          <AddToCollectionBtn anime={data?.Media} onSuccess={() => setAddedCollections(checkAnimeAdded(data?.Media.id))} />
          {!addedCollections.length && <div className={css`margin-top: 0.5rem;`}>* You haven't added this Anime to your collection</div>}
          {addedCollections.length > 0 && <div className={css`margin-top: 0.5rem;`}>
            <div>Added To Following Collections: </div>
            <ul className={css`margin-left: 1rem; margin-bottom: 0.5rem;`}>
              {addedCollections.map((col: any) =>
                <li className={css`margin-bottom: 0.5rem;`}>
                  <Link to={`/collections/${col.id}`} className={css`&:hover {text-decoration: underline;}`}>
                    {col.name}
                  </Link>
                </li>
              )}
            </ul>
          </div>}
        </div>
      </div>
    </div>
  )
};

export default AnimePage;