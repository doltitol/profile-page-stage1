import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <a href={ props.buttonUrl } title={ props.buttonSubText } className={ props.disabled ? 'disabled' : 'button' }>
            { props.buttonText }
        </a>
    );
};

export default Button;