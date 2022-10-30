import React from 'react';
import Container from '../../components/Container/Container';
import LinkSection from '../../components/LinkSection/LinkSection';
import ProfileSection from '../../components/ProfileSection/ProfileSection';
import SocialSection from '../../components/SocialSection/SocialSection';
import './MainContent.css';
import { ProfileData } from '../../assets/data/ProfileData';

const MainContent = () => {
    return (
        <div className='main-content'>
            <Container>
                <ProfileSection profileData={ ProfileData } />
                <LinkSection profileData={ ProfileData } />
                <SocialSection profileData={ ProfileData } />
            </Container>
        </div>
    );
};

export default MainContent;