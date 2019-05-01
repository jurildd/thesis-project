import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';
const Navigation = ({onRouteChange, isSignedIn, name}) => {
    if(isSignedIn === false){
        return( 
            <nav className="bg-white db dt-l w-100 border-box pa3 ph5-l fixed z-max">
                <NavLink to="/repository" className="link dim black b f1 f3-ns dib mr3 mr4-l tl-l" href="#" title="Home">
                    <span style={{color: '#7B1113'}}>UP</span>BOOKS
                </NavLink>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <NavLink to="/repository" className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Repository">Repository</NavLink>
                    <NavLink to="/dashboard" className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Dashboard">Dashboard</NavLink>
                    <NavLink to="/about" className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="About">About</NavLink>
                    <NavLink to="/signin" onClick={() => onRouteChange('signin')} className="link dim mid-gray f6 f5-l dib mr3 mr4-l b">Sign In</NavLink>
                    <NavLink to="/register" onClick={() => onRouteChange('register')} className="link dim mid-gray f6 f5-l dib mr3 mr4-l b">Register</NavLink>
                </div>
            </nav>
        );
    }
    else {
        return( 
            <nav className="db dt-l w-100 border-box pa3 ph5-l fixed mb3 z-max">
                <a className="link dim black b f1 f3-ns dib mr3 mr4-l tl-l" href="#" title="Home">
                    <span style={{color: '#7B1113'}}>UP</span>BOOKS
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Repository">Repository</a>
                    <a className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Dashboard">Dashboard</a>
                    <a className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="About">About</a>
                    <a onClick={() => onRouteChange('signout')} className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Signout">Signout</a>
                    <a className="link dim mid-gray f6 f5-l dib mr3 mr4-l b" href="#" title="Username">{name}</a>
                </div>
            </nav>
        );
    }        
        
            
}

export default Navigation;