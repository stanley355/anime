import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { css } from '@emotion/css';

interface IRenameCollectionBtn {
  anime: any;
  onRemoveClick: () => void;
}

const RemoveAnimeBtn = (props: IRenameCollectionBtn) => {
  const { anime, onRemoveClick } = props;
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={css`display:flex; align-items:center; justify-content:right; gap:4px; width:100%; height:100%; padding: 0.5rem; border-radius: 0.25rem; border:none; cursor:pointer; background:red; color:white;`}
      >
        <FaTrash />
      </button>
      <div className={css`
        display: ${showModal ? "block" : "none"};
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
            height:fit-content; 
            margin: 30% auto; 
            border-radius: 0.25rem; 
            color: black; 
            padding: 1rem;
            @media (min-width: 1024px) { 
              width: 400px;
              margin: 15% auto;
            }
          `}>
          <div className={css`text-align:center; font-size: 20px; font-weight: bold; margin-bottom: 1rem;`}>
            Do you want to remove
            <span className={css`text-decoration: underline; margin: 0 4px;`}>
              {anime.title.userPreferred}
            </span>?
          </div>
          <button type="button"
          onClick={() => {
            onRemoveClick();
            setShowModal(false);
          }}
          className={css`width:100%; cursor: pointer; padding: 0.5rem; margin-top: 1rem; background: red; border-radius: 0.25rem; font-size: 18px; font-weight: bold; color:white; border:none;`}>
            Remove
          </button>
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className={css`text-align: center; cursor:pointer; padding: 0.5rem; margin-top: 1rem; background: none; width: 100%; font-size:16px; border:none;`}>
            Nope, I misclick
          </button>
        </div>
      </div>
    </div>
  )
};

export default RemoveAnimeBtn;