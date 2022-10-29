import React from 'react';
import { Icons } from '../../assets/icons';
import './ProfileImage.css';

const ProfileImage = ({ profile_img, alt }) => {
    return (
        <button className='profile-image'>
            <img src={ profile_img } alt={ alt } />
            <div className='camera'>
                <Icons.Camera color='#ffffff' size={ 25 } />
            </div>
        </button>
    );
};

export default ProfileImage;