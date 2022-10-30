import React from 'react';
import './LinkSection.css';
import { ProfileData } from '../../assets/data/ProfileData';
import Button from '../Button/Button';

const LinkSection = () => {
    const buttonsData = [
        {
            id: 'twitter',
            buttonText: 'twitter link',
            buttonUrl: `https://twitter.com/${ ProfileData.twitter_handle }`,
            buttonSubText: 'Twitter'
        },
        {
            id: 'btn__zuri',
            buttonText: 'zuri team',
            buttonUrl: 'https://training.zuri.team/',
            buttonSubText: 'Zuri team'
        },
        {
            id: 'books',
            buttonText: 'zuri books',
            buttonUrl: 'http://books.zuri.team',
            buttonSubText: 'Find books about design and coding'
        },
        {
            id: 'book__python',
            buttonText: 'python books',
            buttonUrl: `https://books.zuri.team/python-for-beginners?ref_id=${ ProfileData.slack }`,
            buttonSubText: 'Python books'
        },
        {
            id: 'pitch',
            buttonText: 'python books',
            buttonUrl: `https://background.zuri.team`,
            buttonSubText: 'Where you pitch a service for doing background checks on coders'
        },
        {
            id: 'book__design',
            buttonText: 'design books',
            buttonUrl: `https://books.zuri.team/design-rules `,
            buttonSubText: 'Free design book offered by Zuri'
        }
    ];
    return (
        <div className='link-section'>
            { buttonsData.map((button) => (
                <Button buttonUrl={ button.buttonUrl } buttonText={ button.buttonText } key={ button.id } />
            )) }
        </div>
    );
};

export default LinkSection;