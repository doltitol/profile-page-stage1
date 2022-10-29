import React from 'react';
import { Icons } from '../../assets/icons';
import './SocialSection.css';
import { ProfileData } from '../../assets/data/ProfileData';

const SocialSection = () => {
    return (
        <div className='social-section'>
            <a href='https://hng9.slack.com' alt='' target='_blank' rel="noreferrer" title='Slack' className='social-section-icon'>
                <Icons.Slack size={ 30 } />
            </a>
            <a href={ `https://github.com/${ ProfileData.github }` } alt='' target='_blank' rel="noreferrer" title='Github' className='social-section-icon'>
                <Icons.Github size={ 30 } />
            </a>
        </div>
    );
};

export default SocialSection;