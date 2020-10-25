import React from 'react';
import sunriseLogo from '../../assets/sunriseLogo.svg';
import './Login.css';
const Login = ()=>{
    
    return(
        <div className = 'loginContainer'>
            <img className = 'sunriseLogo' src = {sunriseLogo} alt = 'sun rise logo' />
            <h1 className = 'sunriseTitle'>
                SUN RISE
            </h1>
            <h3 className = 'sunriseSubtitle'>
                The World's First Socially Responsible Investment Platform
            </h3>
        </div>
    )
}
export default Login;