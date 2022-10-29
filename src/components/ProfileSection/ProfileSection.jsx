import React from 'react';
// import ProfileImage from '../ProfileImage/ProfileImage';
// import ShareButton from '../ShareButton/ShareButton';
import { ProfileData } from '../../assets/data/ProfileData';
import './ProfileSection.css';

const ProfileSection = () => {
    const { twitter } = ProfileData;
    return (
        <div className='profile-section'>
            {/* <ShareButton /> */ }
            {/* <ProfileImage profile_img={ profile_img } alt={ twitter } /> */ }
            <h1 className='twitter'>{ twitter }</h1>
        </div>
    );
};

export default ProfileSection;