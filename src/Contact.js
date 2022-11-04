import React, { useState } from 'react';

const Contact = () => {
    const [ hint ] = useState({
        firstName: false,
        lastName: false,
    });
    return (
        <div className='container'>
            <div className='contact'>
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <main style={ { marginTop: '50px' } }>
                    <div className='row'>
                        <div className='col-50 mr-10'>
                            <label htmlFor='first_name'>First name</label>
                            <input placeholder='Enter your first name' name='first_name' id='first_name' />
                            <p className='hint' style={ { display: hint.firstName ? 'block' : 'none' } }>Please enter first name.</p>
                        </div>
                        <div className='col-50 ml-10'>
                            <label htmlFor='last_name'>Last name</label>
                            <input placeholder='Enter your last name' name='last_name' id='last_name' />
                            <p className='hint' style={ { display: hint.lastName ? 'block' : 'none' } }>Please enter last name.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Contact;