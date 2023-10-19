import React, { useState } from 'react';
import '../CSS/Profile.css';
import plus from '../Icons/plus.png';
import "../CSS/AddProfile.css";
import whatsapp from '../Icons/whatsapp.png';
import youtube from '../Icons/youtube.png';
import mail from '../Icons/mail.png';
import instagram from '../Icons/instagram.png';


const Profile = () => {

  const [modal, setModal] = useState(false);
  const Modal =() =>{
    setModal(!modal);
    
  }

  const [formData, setFormData] = useState({
  })

  const nextContainer =() =>{
    document.querySelector(".basic-container").style.display = "none";
    document.querySelector(".social-container").style.display = "flex";

  }

  const backContainer =() =>{
    document.querySelector(".social-container").style.display = "none";
    document.querySelector(".basic-container").style.display = "flex";
  }
  
  const profileAdd =(e) =>{
    e.preventDefault();
    console.log('in')
    document.querySelector(".profile").style.display = "none";
    document.querySelector(".added-profile").style.display = "grid";
    const name = document.querySelector('.input__name').value
    const email = document.querySelector('.input__email').value
    const instagram = document.querySelector('.input__insta').value
    const youtube = document.querySelector('.input__yt').value
    const phone = document.querySelector('.input__phone').value

    setFormData({name,
    email,
    phone,
    instagram,
    youtube})

    setModal(!modal);
  }
  

  return (
    <>
    <div className='profile'>
        <i><img src={plus} alt="icon" onClick={Modal}/></i>
        <p>Add Profile</p>
    </div>
    <div className="added-profile">
      <div className="profile-name">
        <p>{formData.name}</p>
      </div>
      <div className="profile-data">
        <span><img src={whatsapp} alt=""/> <p>{formData.phone}</p></span>
        <span><img src={mail} alt=""/> <p>{formData.email}</p></span>
        <span><img src={instagram} alt=""/> <p>{formData.instagram}</p></span>
        <span><img src={youtube} alt=""/> <p>{formData.youtube}</p></span>

      </div>
    </div>
    {
    modal && <>
    <div onClick={Modal} className="overlay"></div>
  <div className="add-profile-container">
    <div className="header-add-profile">
      <p>Add New Profile</p>
      <p onClick={Modal}>X</p>
    </div>
    <div className="title-add-profile">
      <div className="header-basic">
        <p>Basic</p>
      </div>
      <div className="header-social">
        <p>Social</p>
      </div>
    </div>
        <form action="">
    <div className="basic-container">
      <div className="content">

        <label htmlFor="name">Enter Name*</label>
        <input type="text" className='input__name' name="name" placeholder="Eg. Chirag Paliwal" required/>
        <label htmlFor="email">Enter Email*</label>
        <input type="email" className='input__email' name="email" placeholder="Eg. chirag@xyz.com" required/>
        <label htmlFor="phone">Enter Phone*</label>
        <input type="number" className='input__phone' name="phone" placeholder="Eg.706924XXXX" required/>
      </div>
      <div className="btn">
        <input type="button" className='input__' value="Next" onClick={nextContainer}/>
      </div>
    </div>
    <div className="social-container">
      <div className="content">
        <p>Instagram Link <span>(Optional)</span></p>
        <input type="text" className='input__insta' name="instagram" placeholder="Eg. ..instagram/username" required/> 
        <p>Youtube Link <span>(Optional)</span></p>
        <input type="text" className='input__yt' name="youtube" placeholder="Eg. ..youtube/username" required/>
      </div>
      <div className="btn">
        <input type="button" value="Back" onClick={backContainer}/>
        <input type="button" value="Done" onClick={profileAdd}/>
      </div>
    </div>
    </form>

  </div>
</>

    }
    </>
  )
}

export default Profile;
