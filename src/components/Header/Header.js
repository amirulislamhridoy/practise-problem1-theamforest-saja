import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../images/logo.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className='header'>
            <img src={logoImg} alt="" />
            <ul className='nav'>
                <li>
                    <Link to='home'>Demos</Link>
                    <div className='border-bottom'></div>
                </li>
                <li>
                    <Link to="services">Services</Link>
                    <div className='border-bottom'></div>
                </li>
                <li>
                    <Link to='blog'>Blog</Link>
                    <div className='border-bottom'></div>
                </li>
                <li>
                    <Link to='features'>Features</Link>
                    <div className='border-bottom'></div>
                </li>
            </ul>
            <div className='nav-btn-container'>
                <button>PURCHASE NOW <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                <div className='nav-btn-color'></div>
            </div>
        </div>
    );
};

export default Header;