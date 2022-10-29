import React from 'react';
import Container from '../Container/Container';
import './Footer.css';
import { Icons } from '../../assets/icons';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <div className='footer-content'>
                    <Icons.ZuriIntershipLogo width={ 120 } height={ 30 } />
                    <p className='footer-text'>HNG Internship 9 Frontend Task</p>
                    <Icons.I4G width={ 120 } height={ 30 } />
                </div>
            </Container>
        </footer>
    );
};

export default Footer;