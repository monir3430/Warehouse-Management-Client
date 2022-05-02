import React from 'react';
import "./Footer.css"

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='Footer'>
            <h4>Copyright © {year}</h4>
        </div>
    );
};

export default Footer;