import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown, faCoffee } from '@fortawesome/free-solid-svg-icons'
import Header from '../Header/Header';
import './Banner.css'
import Service from '../Service/Service';

const Banner = () => {
    return (
        <div>
            <div className='banner'>
                <Header></Header>
                <div className='banner-main'>
                    <h1 className='banner-title'>Saja</h1>
                    <h2 className='banner-heading'>Agency & Portfolio HTML5 Template</h2>
                    <p className='banner-description'>Saja is creative template for Agency & Portfolio built on flexible blocks that are designed to be combined into full pages. We provide you with pre-built pages, but it’s also dead simple to create new pages all your own with ease.</p>
                    <div className='banner-pages'>
                        <div className='banner-page'>
                            <h3>07<sup>+</sup></h3>
                            <p>HOME PAGES</p>
                        </div>
                        <div className='banner-page'>
                            <h3>02<sup>+</sup></h3>
                            <p>SERVICE PAGES</p>
                        </div>
                        <div className='banner-page'>
                            <h3>02<sup>+</sup></h3>
                            <p>BLOG PAGES</p>
                        </div>
                        <div className='banner-page'>
                            <h3>22<sup>+</sup></h3>
                            <p>TOTAL PAGES</p>
                        </div>
                    </div>
                    <div className='banner-last-icon-container'>
                        <FontAwesomeIcon className='banner-last-icon' icon={faAngleDoubleDown} />
                    </div>
                </div>

                <div className="overlay"></div>
            </div>
            <Service></Service>
        </div>
    );
};

export default Banner;