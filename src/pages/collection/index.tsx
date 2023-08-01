import React, { useState } from 'react';
import { css } from '@emotion/css';
import Image from 'next/image';
import AddNewCollectionBtn from '@/components/AddNewCollectionBtn';
import PikaIsSad from '@/components/EmptyCollection';
import { Link } from 'react-router-dom';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import RenameCollectionBtn from '@/components/RenameCollectionBtn';
import RemoveCollectionBtn from '@/components/RemoveCollectionBtn';
import CollectionList from '@/components/CollectionList';

const MyCollection = () => {
  const collectionStorage = localStorage.getItem("collections");
  const parsedCollections = collectionStorage ? JSON.parse(String(collectionStorage)) : [];
  const [collections, setCollections] = useState(parsedCollections);

  return (
    <div className={css`
      min-height:100vh;
      padding: 0.5rem;
      background: linear-gradient(rgba(0,0,0, .5), rgba(0,0,0,.5)), transparent;
      @media (min-width: 1024px) { 
        max-width: 1024px;
        margin: auto
      }
    `}>
      <h1 className={css`text-align: center; font-weight: 400; margin: 1rem 0;`}>My <strong>A</strong>nime Collections</h1>
      <AddNewCollectionBtn onCollectionChange={setCollections} />
      {collections.length === 0 && <PikaIsSad />}
      {collections.length > 0 && <CollectionList collections={collections} onCollectionChange={setCollections} /> }
    </div>
  )
};

export default MyCollection;