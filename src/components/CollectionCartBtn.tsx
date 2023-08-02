import React from 'react';
import { css } from '@emotion/css';
import { FaShoppingCart } from 'react-icons/fa';

const CollectionCartBtn = () => {

  
  return (
    <div>
      <button type='button'
        className={css`
          padding: 0.5rem; 
          display: flex; 
          align-items:center; 
          gap:0.5rem; 
          font-size:36px; 
          background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%);
          border-radius: 50%;
          cursor:pointer;
          position:fixed;
          bottom: 2rem;
          right: 1rem;
          @media (min-width: 1024px) { 
            right: 2rem;
          }`
        }>
        <FaShoppingCart />
      </button>
    </div>
  )
};

export default CollectionCartBtn;