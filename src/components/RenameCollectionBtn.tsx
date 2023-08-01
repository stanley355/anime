import React, { useState } from 'react';
import { FaPen } from 'react-icons/fa';
import { css } from '@emotion/css';

interface IRenameCollectionBtn {
  collection: any;
  index: number;
  dispatchCol: (col:any) => void;
  onCollectionChange: (col: Array<any>) => void;
}

const RenameCollectionBtn = (props: IRenameCollectionBtn) => {
  const { collection, index, onCollectionChange, dispatchCol } = props;
  const [showModal, setShowModal] = useState(false);
  const [formError, setFormError] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormError("");
    const target = e.target as any;
    const name = target.name.value;

    if (!name) {
      setFormError("Collection Name can't be empty!");
      return;
    }

    const hasSpecialChar = name.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/);
    if (hasSpecialChar) {
      setFormError("Collection Name can't include special characters!");
      return;
    }

    const collection = {
      id: name.split(" ").join("-"),
      name: name,
      createdAt: new Date(),
      firstChild: {}
    };

    const collectionStorage = localStorage.getItem("collections");
    let oldCollection: Array<any> = JSON.parse(String(collectionStorage));
    const collectionFilter = oldCollection.filter((col) => col.name === name);
    if (collectionFilter.length > 0) {
      setFormError("You already have collection with the same name!");
      return;
    }

    oldCollection.splice(index, 1, collection);
    localStorage.setItem("collections", JSON.stringify(oldCollection));
    dispatchCol && dispatchCol(collection);
    onCollectionChange(oldCollection);
    setShowModal(false);
    return;
  }


  return (
    <div>
      <button
        onClick={() => setShowModal(true)}
        type="button"
        className={css`display:flex; align-items:center; justify-content:center; gap:4px; width:100%; height:100%; border-radius: 0.25rem; border:none; cursor:pointer; padding: 0.5rem;`}
      >
        <FaPen />
        <span>Edit</span>
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
          <div className={css`text-align:center; font-size: 28px; font-weight: bold; margin-bottom: 2rem;`}>
            Rename
            <span className={css`text-decoration: underline; margin: 0 4px;`}>
              {collection.name}
            </span>
            Collection
          </div>
          <div className={css`text-align:center;`}>What&apos;s the new Collection Name</div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">
              <input type="text" id='name' placeholder='Glorious Purpose' className={css`width: 100%; padding:0.5rem; font-size: 18px; border-radius: 0.25rem;`} />
            </label>
            <div className={css`color:red;`}>{formError}</div>
            <button type="submit" className={css`width:100%; cursor: pointer; padding: 0.5rem; margin-top: 1rem; background: linear-gradient(to bottom, #90dffe 0%,#38a3d1 100%); border-radius: 0.25rem; font-size: 18px; font-weight: bold;`}>
              Submit
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className={css`text-align: center; cursor:pointer; padding: 0.5rem; margin-top: 1rem; background: none; width: 100%; font-size:16px; border:none;`}>
              I&apos;ll change later
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default RenameCollectionBtn;