import React from 'react';
import './LinkSection.css';
import Button from '../Button/Button';

const LinkSection = ({ profileData }) => {
    const buttonsData = [
        {
            id: 'twitter',
            buttonText: 'Twitter Link',
            buttonUrl: `https://twitter.com/${ profileData.twitter_handle }`,
            buttonSubText: 'Twitter'
        },
        {
            id: 'btn__zuri',
            buttonText: 'Zuri Team',
            buttonUrl: 'https://training.zuri.team/',
            buttonSubText: 'Zuri team'
        },
        {
            id: 'books',
            buttonText: 'Zuri Books',
            buttonUrl: 'http://books.zuri.team',
            buttonSubText: 'Find books about design and coding'
        },
        {
            id: 'book__python',
            buttonText: 'Python Books',
            buttonUrl: `https://books.zuri.team/python-for-beginners?ref_id=${ profileData.slack }`,
            buttonSubText: 'Python books'
        },
        {
            id: 'pitch',
            buttonText: 'Background Check for Coders',
            buttonUrl: `https://background.zuri.team`,
            buttonSubText: 'Where you pitch a service for doing background checks on coders'
        },
        {
            id: 'book__design',
            buttonText: 'Design Books',
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