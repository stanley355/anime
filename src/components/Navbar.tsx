import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className={css`display:flex; align-items:center; justify-content: space-between; padding: 1rem; border-bottom: 1px solid white;`}>
      <Link to="/" className={css`font-size: 1.5rem`}>NextAnime</Link>
      <Link to="/collection">My Collection</Link>
    </div>
  )
};

export default Navbar;