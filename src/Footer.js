import React from 'react';
import { Icons } from './assets/icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <div className='footer-content'>
                    <Icons.ZuriIntershipLogo width={ 120 } height={ 30 } />
                    <p className='footer-text'>HNG Internship 9 Frontend Task</p>
                    <Icons.I4G width={ 120 } height={ 30 } />
                </div>
            </div>
        </footer>
    );
};

export default Footer;