import React from 'react';
import Container from '../../components/Container/Container';
import SocialSection from '../../components/SocialSection/SocialSection';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className='main-content'>
            <Container>
                <SocialSection />
            </Container>
        </div>
    );
};

export default MainContent;