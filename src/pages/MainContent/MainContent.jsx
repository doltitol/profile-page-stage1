import React from 'react';
import Container from '../../components/Container/Container';
import LinkSection from '../../components/LinkSection/LinkSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import SocialSection from '../../components/SocialSection/SocialSection';
import './MainContent.css';

const MainContent = () => {
    return (
        <div className='main-content'>
            <Container>
                <ProfileSection />
                <LinkSection />
                <SocialSection />
            </Container>
        </div>
    );
};

export default MainContent;