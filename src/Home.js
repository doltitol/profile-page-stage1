import React from 'react';
import { Icons } from './assets/icons';

const Home = () => {
    const [ disabled ] = React.useState(false);
    const profileData = {
        profile_img: require('./assets/images/Adgoroye-oludolapo2.png'),
        twitter: 'Tubi Oludolapo T',
        twitter_handle: 'tubioludolapo',
        slack: 'Oludolapo Adegoroye',
        slackUrl: 'https://hng9.slack.com',
        github: 'doltitol/profile-page-stage1'
    };
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
        },
    ];
    return (
        <div className='container'>
            <header>
                <div className='profile-section'>
                    <div className='share-button-desktop'>
                        <button className={ disabled ? 'disabled' : 'share-button' } >
                            <Icons.Share size={ 20 } color={ disabled ? '#EAECF0' : '#98A2B3' } />
                            <span className='tooltiptext tooltip-left'>Share Link</span>
                        </button>
                    </div>
                    <div className='share-button-mobile'>
                        <button className={ disabled ? 'disabled' : 'share-button' } >
                            <Icons.Dots size={ 20 } color={ disabled ? '#EAECF0' : '#98A2B3' } />
                            <span className='tooltiptext tooltip-left'>Share Link</span>
                        </button>
                    </div>
                    <button className='profile-image'>
                        <img src={ profileData.profile_img } alt={ profileData.slack } id='profile_img' />
                        <div className='camera'>
                            <Icons.Camera color='#ffffff' size={ 25 } />
                        </div>
                    </button>
                    <h1 className='twitter' id='twitter'>{ profileData.twitter }</h1>
                    {/* <p id='slack'>{ profileData.slack }</p> */ }
                </div>
            </header>
            <main className='main-content'>
                <div className='link-section'>
                    { buttonsData.map((button) => (
                        <a href={ button.buttonUrl } title={ button.buttonSubText } className={ disabled ? 'disabled' : 'button' }
                            target='_blank' rel='noreferrer' key={ button.id } id={ button.id }>
                            { button.buttonText }
                        </a>
                    )) }
                    <a href='/contact' title='Contact Me' className={ disabled ? 'disabled' : 'button' }
                        id='contact'>
                        Contact Me
                    </a>
                </div>
            </main>
            <div className='social-section'>
                <a href={ profileData.slackUrl } alt='' target='_blank' rel="noreferrer" title='Slack' className='social-section-icon'>
                    <Icons.Slack size={ 30 } />
                </a>
                <a href={ `https://github.com/${ profileData.github }` } alt='' target='_blank' rel="noreferrer" title='Github' className='social-section-icon'>
                    <Icons.Github size={ 30 } />
                </a>
            </div>


        </div>
    );
};

export default Home;