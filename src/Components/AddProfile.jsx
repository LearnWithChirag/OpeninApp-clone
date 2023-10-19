import React, { useState } from "react";
import "../CSS/AddProfile.css";

const AddProfile = () => {

  const[modal, setModal] = useState(false);
  const closeModal =() =>{
    setModal(!modal)
  }

  return (
  <>
      <div onClick={closeModal} className="overlay"></div>
    <div className="add-profile-container">
      <div className="header-add-profile">
        <p>Add New Profile</p>
        <p onClick={closeModal}>X</p>
      </div>
      <div className="title-add-profile">
        <div className="header-basic">
          <p>Basic</p>
        </div>
        <div className="header-social">
          <p>Social</p>
        </div>
      </div>
      <div className="basic-container">
        <div className="content">
          <label htmlFor="name">Enter Name*</label>
          <input type="text" name="name" placeholder="Eg. Chirag Paliwal" />
          <label htmlFor="email">Enter Email*</label>
          <input type="email" name="email" placeholder="Eg. chirag@xyz.com" />
          <label htmlFor="phone">Enter Phone*</label>
          <input type="number" name="phone" placeholder="Eg.706924XXXX" />
        </div>
        <div className="btn">
          <input type="button" value="Next" />
        </div>
      </div>
      <div className="social-container">
        <div className="content">
          {/* <label htmlFor="instagram">Instagram Link</label> */}
          <p>Instagram Link <span>(Optional)</span></p>
          <input type="text" name="instagram" placeholder="Eg. ..instagram/username" />
          {/* <label htmlFor="youtube">Youtube Link</label> */}
          <p>Youtube Link <span>(Optional)</span></p>
          <input type="text" name="youtube" placeholder="Eg. ..youtube/username" />
        </div>
        <div className="btn">
          <input type="button" value="Back" />
          <input type="button" value="Next" />
        </div>
      </div>
    </div>
  </>

  );
};

export default AddProfile;
