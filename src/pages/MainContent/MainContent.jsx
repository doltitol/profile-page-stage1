import React from 'react';
import Container from '../../components/Container/Container';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import SocialSection from '../../components/SocialSection/SocialSection';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className='main-content'>
            <Container>
                <ProfileSection />
                <SocialSection />
            </Container>
        </div>
    );
};

export default MainContent;