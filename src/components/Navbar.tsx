import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={
      css`display:flex; align-items:center; justify-content: space-between; padding: 1rem; border-bottom: 1px solid white; 
      
      background: linear-gradient(to bottom, #94c5f8 1%,#a6e6ff 70%,#b1b5ea 100%); 
      color: black;`}>
      <Link to="/" className={css`font-size: 1.5rem;`}>
        <strong>N</strong>extAnime
      </Link>
      <Link to="/collection">My Collection</Link>
    </div>
  )
};

export default Navbar;