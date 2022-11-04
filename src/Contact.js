import React from 'react';

const Contact = () => {
    return (
        <div className='container'>
            <div className='contact'>
                <header>
                    <h1>Contact Me</h1>
                    <p>Hi there, contact me to ask me about anything you have in mind.</p>
                </header>
                <main>
                    <div className='row'>
                        <div className='col-50 mr-10'>
                            <label htmlFor='first_name'>First name</label>
                            <input placeholder='Enter your first name' name='first_name' id='first_name' />
                        </div>
                        <div className='col-50 ml-10'>
                            <label htmlFor='last_name'>Last name</label>
                            <input placeholder='Enter your last name' name='last_name' id='last_name' />
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Contact;