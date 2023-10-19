import { useNavigate } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../CSS/Signin.css';
import github from '../Icons/github.png';
import linkedin from '../Icons/linkedin.png';
import twitter from '../Icons/twitter.png';
import discord from '../Icons/discord.png';
import google from '../Icons/google.png';
import apple from '../Icons/apple.png';

const Signin = () => {
const navigate = useNavigate()
    const { user , loginWithRedirect } = useAuth0();
    const redirectGoogle = (e) =>{
        console.log("current user", user);
        loginWithRedirect();
        navigate('/homepage')
    }
    
    const onSubmitHandle = (e) => {
        e.preventDefault();
        navigate('homepage');
    }


  return (
    <div className='signin-container'>
        <div className="left-container">
            <div className="logo">
                <p>LOGO</p>
            </div>
            <div className="logo-content">
                <div className="empty"></div>
                <div className="title">Board.</div>
                <div className="icons">
                    <a href="https://github.com/LearnWithChirag" target='_blank'><img src={github} alt="icon-social"/></a>
                    <a href="https://www.linkedin.com/in/chirag-paliwal-aa5232257/" target='_blank'><img src={linkedin} alt="icon-social"/></a>
                    <a href="" target='_blank'><img src={twitter} alt="icon-social"/></a>
                    <a href="" target='_blank'><img src={discord} alt="icon-social"/></a>

                </div>
            </div>
        </div>
        <div className="right-container">
            <div className="signin-title">
                <p className='head-signin'>Sign In</p>
                <p className='sub-head-signin'>Sign in to your account</p>
            </div>
            <div className="signin-account">
                <div className="social-link" >
                    <button onClick={redirectGoogle}><img src={google} alt="icon"/><p>Sign in with Google</p></button>
                </div>
                <div className="social-link">
                <button><img src={apple} alt="icon"/><p>Sign in with Apple</p></button>
                </div>
            </div>
            <div className="signin-form"> 
                <form action='' method='POST' >
                    <label htmlFor="email">Email address</label>
                    <input type="email" name="email" placeholder='chirag@gmail.com' required="required" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" placeholder='********' required="required" />
                    <a href="/">Forgot password?</a>

                    <input type="submit" onClick={onSubmitHandle} value="Sign In" />
                </form>
                <p>Don't have an account?<a href="/">Register here</a></p>
            </div>
        </div>
    </div>
  )
}

export default Signin;