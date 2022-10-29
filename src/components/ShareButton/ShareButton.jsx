import React from 'react';
import { Icons } from '../../assets/icons';
import './ShareButton.css';

const ShareButton = (props) => {
    return (
        <>
            <div className='share-button-desktop'>
                <button className={ props.disabled ? 'disabled' : 'share-button' } >
                    <Icons.Share size={ 20 } color={ props.disabled ? '#EAECF0' : '#98A2B3' } />
                    <span className='tooltiptext tooltip-left'>Share Link</span>
                </button>
            </div>
            <div className='share-button-mobile'>
                <button className={ props.disabled ? 'disabled' : 'share-button' } >
                    <Icons.Dots size={ 20 } color={ props.disabled ? '#EAECF0' : '#98A2B3' } />
                    <span className='tooltiptext tooltip-left'>Share Link</span>
                </button>
            </div>
        </>
    );
};

export default ShareButton;