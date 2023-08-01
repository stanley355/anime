import React, { useState } from 'react';
import { css } from '@emotion/css';
import { FaPlusCircle } from 'react-icons/fa';
import CollectionModal from './CollectionModal';

interface IAddNewCollectionBtn {
  anime: any;
}

const AddToCollectionBtn = (props: IAddNewCollectionBtn) => {
  const { anime } = props;
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className={css`
          background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%); 
          padding: 0.5rem; 
          border: none; 
          border-radius: 0.25rem; 
          display:flex; 
          gap: 0.5rem;
          justify-content: center;
          width: fit-content;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
      `}>
        <FaPlusCircle />
        <span>Add to Collection</span>
      </button>

      {showModal && <CollectionModal anime={anime} onCloseClick={() => setShowModal(false)} />}
    </div>
  )
};

export default AddToCollectionBtn;