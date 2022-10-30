import React from 'react';
import { Icons } from '../../assets/icons';
import './SocialSection.css';

const SocialSection = ({ profileData }) => {
    return (
        <div className='social-section'>
            <a href={ profileData.slackUrl } alt='' target='_blank' rel="noreferrer" title='Slack' className='social-section-icon'>
                <Icons.Slack size={ 30 } />
            </a>
            <a href={ `https://github.com/${ profileData.github }` } alt='' target='_blank' rel="noreferrer" title='Github' className='social-section-icon'>
                <Icons.Github size={ 30 } />
            </a>
        </div>
    );
};

export default SocialSection;