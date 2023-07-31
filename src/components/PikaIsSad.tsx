import React from 'react';
import Image from 'next/image';
import { css } from '@emotion/css';

const PikaIsSad = () => {
  return (
    <div className={css`margin-top: 1rem;`}>
      <div className={css`text-align: center; font-size: 22px; font-weight: bold;`}>There is no collection</div>
      <div className={css`text-align: center;`}>Click Add a Collection for New Adventure</div>
    </div>
  )
};

export default PikaIsSad;