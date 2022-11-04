import React, { useState } from 'react';


const Contact = () => {
    const [ hint ] = useState({
        firstName: false,
        lastName: false,
        email: false,
        message: true
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
                            <textarea rows={ 10 } id='message' name='message' className={ hint.message ? 'error' : '' } />
                            <p className='hint' style={ { display: hint.message ? 'block' : 'none', color: '#F83F23' } }>Please enter a message.</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Contact;