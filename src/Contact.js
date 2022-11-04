import React, { useState } from 'react';


const Contact = () => {
    const [ contactDetails, setContactDetails ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        message: ''
    });
    const [ hint, setHint ] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: false
    });
    const name = 'Oludolapo';

    const handleSubmit = (event) => {
        event.preventDefault();
        if (contactDetails.first_name === '') {
            setHint({ ...hint, firstName: true });
        }
    };

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setContactDetails({ ...contactDetails, [ name ]: value });
    };
    return (
        <div className='container'>
            <div className='contact'>
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <main style={ { marginTop: '50px' } }>
                    <form onSubmit={ handleSubmit } >
                        <div className='row'>
                            <div className='col-50 mr-10'>
                                <label htmlFor='first_name'>First name</label>
                                <input placeholder='Enter your first name' type='text' name='first_name' id='first_name' />
                                <p className='hint' style={ { display: hint.firstName ? 'block' : 'none' } }>Please enter your first name.</p>
                            </div>
                            <div className='col-50 ml-10'>
                                <label htmlFor='last_name'>Last name</label>
                                <input placeholder='Enter your last name' type='text' name='last_name' id='last_name' />
                                <p className='hint' style={ { display: hint.lastName ? 'block' : 'none' } }>Please enter your last name.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-100'>
                                <label htmlFor='email'>Email</label>
                                <input placeholder='yourname@email.com' type='email' name='email' id='email' />
                                <p className='hint' style={ { display: hint.email ? 'block' : 'none' } }>Please enter your email address.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-100'>
                                <label htmlFor='message'>Message</label>
                                <textarea rows={ 5 } id='message' name='message' className={ hint.message ? 'error' : '' } placeholder={ `Send me a message and I'll reply you as soon as possible...` } />
                                <p className='hint' style={ { display: hint.message ? 'block' : 'none', color: '#F83F23' } }>Please enter a message.</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-100'>
                                <div className='checkbox-container'>
                                    <input type='checkbox' />
                                    <span className='checkbox'></span>
                                    <p className='checkbox-label'>You agree to providing your data to { name } who may contact you.</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-100'>
                                <input type='submit' value='Send message' className='primary-btn' id='btn__submit' />
                            </div>
                        </div>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Contact;