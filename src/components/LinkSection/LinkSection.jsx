import React from 'react';
import './LinkSection.css';
import Button from '../Button/Button';

const LinkSection = ({ profileData }) => {
    const buttonsData = [
        {
            id: 'twitter',
            buttonText: 'twitter link',
            buttonUrl: `https://twitter.com/${ profileData.twitter_handle }`,
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
            buttonUrl: `https://books.zuri.team/python-for-beginners?ref_id=${ profileData.slack }`,
            buttonSubText: 'Python books'
        },
        {
            id: 'pitch',
            buttonText: 'background check for coders',
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
                <Button buttonUrl={ button.buttonUrl } buttonText={ button.buttonText } buttonSubText={ button.buttonSubText } key={ button.id } />
            )) }
        </div>
    );
};

export default LinkSection;