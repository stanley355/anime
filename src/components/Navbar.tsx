import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={
      css`
      display:flex; 
      align-items:center; 
      justify-content: space-between; 
      padding: 1rem; 
      border-bottom: 1px solid white; 
      background: transparent; 
      color: white;`
    }>
      <Link to="/" className={css`font-size: 1.5rem;`}>
        <strong>N</strong>extAnime
      </Link>
      <Link to="/collections">My Collection</Link>
    </div>
  )
};

export default Navbar;