import React from 'react';
import RenameCollectionBtn from './RenameCollectionBtn';
import RemoveCollectionBtn from './RemoveCollectionBtn';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { css } from '@emotion/css';

interface ICollectionList {
  collections: Array<any>;
  onCollectionChange: (newCollections: Array<any>) => void;
}

const CollectionList = (props: ICollectionList) => {
  const { collections, onCollectionChange } = props;
  return (
    <div className={css`
      margin-top:2rem;
      width: 100%;
      @media (min-width: 1024px) { 
        display:grid;
        grid-template-columns: 49% 49%;
        gap: 1rem;
      }`
    }>
      {collections.map((col: any, index: number) => <div key={col.id}
        className={css`
            display:flex;
            gap: 0.5rem;
            margin-bottom: 1rem;
            border: 1px solid white;
            border-radius: 0.25rem; 
            padding: 0.5rem;`
        }>
        <Link to={`/collections/${col.id}`} className={css`width:40%; height:150px;`}>
          <img src="placeholder.webp" alt={col.name} width={300} height={300} className={css`width:100%; height: 100%; border-radius: 0.25rem;`} />
        </Link>
        <div className={css`width: 100%;`}>
          <div className={css`color: black;`}>
            <Link to={`/collections/${col.id}`} className={css`font-size:20px; font-weight:bold; background: white; padding: 0.25rem; border-radius: 0.25rem; &:hover {text-decoration: underline;}`}>
              {col.name}
            </Link>
            <div className={css`font-size:16px; background: white; padding: 0.25rem; border-radius: 0.25rem; margin-top: 0.5rem; width: fit-content;`}>
              {new Date(col.createdAt).toLocaleDateString()}
            </div>
          </div>
          <div className={css`display:grid; grid-template-columns: 33% 33% 33%; gap: 4px;margin-top: 3.25rem;`}>
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
                border-radius:0.25rem;`
              }>
              <FaEye />
              <span>View</span>
            </Link>
            <RenameCollectionBtn collection={col} index={index} onCollectionChange={onCollectionChange} />
            <RemoveCollectionBtn collection={col} index={index} onCollectionChange={onCollectionChange} />
          </div>
        </div>
      </div>
      )}
    </div>
  )
};

export default CollectionList;