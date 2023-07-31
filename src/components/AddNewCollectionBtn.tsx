import React, { useReducer, useState } from 'react';
import { css } from '@emotion/css';
import { FaPlusCircle } from 'react-icons/fa';
import { COLLECTIONS_STATES, collectionsReducer } from '@/lib/collectionsRedux';

const AddNewCollectionBtn = () => {
  const [states, dispatch] = useReducer(collectionsReducer, COLLECTIONS_STATES);
  const { showModal, formError } = states;

  const updateState = (name: string, value: any) => {
    dispatch({ type: "UPDATE", name, value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    updateState("formError", "");
    const target = e.target as any;
    const name = target.name.value;

    const hasSpecialChar = name.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    if (hasSpecialChar) {
      updateState("formError", "Collection Name can't include special characters!");
      return;
    }

    const collection = {
      id: name.split(" ").join("-"),
      name: name,
      firstChild: {}
    };

    const collectionStorage = localStorage.getItem("collections");
    if (!collectionStorage) {
      const newCollection = [collection];
      localStorage.setItem("collections", JSON.stringify(newCollection));
      updateState("showModal", false);
      return;
    }

    const oldCollection: Array<any> = JSON.parse(String(collectionStorage));
    const collectionFilter = oldCollection.filter((col) => col.name === name);
    if (collectionFilter.length > 0) {
      updateState("formError", "You already have collection with the same name!");
      return;
    }

    let newCollection: Array<any> = JSON.parse(String(oldCollection));
    newCollection.push(collection);
    localStorage.setItem("collections", JSON.stringify(newCollection));
    updateState("showModal", false);
    return;
  }

  return (
    <div>
      <button
        type="button"
        onClick={() => updateState("showModal", true)}
        className={css`
          background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%); 
          padding: 0.5rem; 
          border: none; 
          border-radius: 0.25rem; 
          display:flex; 
          gap: 0.5rem;
          margin-left: auto;
          margin-top: 2rem;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
      `}>
        <FaPlusCircle />
        <span>Add a Collection</span>
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
          <div className={css`text-align:center; font-size: 28px; font-weight: bold; margin-bottom: 2rem;`}>Add New Collection</div>
          <div className={css`text-align:center;`}>What's your Collection Name</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input type="text" id='name' placeholder='Glorious Purpose' className={css`width: 100%; padding:0.5rem; font-size: 18px; border-radius: 0.25rem;`} />
            </label>
            <div className={css`color:red;`}>{formError}</div>
            <button type="submit" className={css`width:100%; cursor: pointer; padding: 0.5rem; margin-top: 1rem; background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%); border-radius: 0.25rem; font-size: 18px; font-weight: bold;`}>Let's Go</button>
            <button
              type="button"
              onClick={() => updateState("showModal", false)}
              className={css`text-align: center; cursor:pointer; padding: 0.5rem; margin-top: 1rem; background: none; width: 100%; font-size:16px; border:none;`}>
              I'll add later
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default AddNewCollectionBtn;