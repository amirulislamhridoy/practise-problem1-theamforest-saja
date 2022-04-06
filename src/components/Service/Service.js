import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css'
import serviceImg1 from '../../images/service1.jpg'
import serviceImg2 from '../../images/service2.jpg'


const Service = () => {
    return (
        <div className='service'>
            <div className="service-banner">
                <h3>Services Pages</h3>
                <h1>Services Styles</h1>
            </div>
            <div className="service-img-container">
                <div className='service-img'>
                    <img width='350' src={serviceImg1} alt='' />
                    <h4>Services</h4>
                </div>
                <div className='service-img'>
                    <img width='350' src={serviceImg2} alt='' />
                    <h4>Services</h4>
                </div>
            </div>
        </div>
    );
};

export default Service;