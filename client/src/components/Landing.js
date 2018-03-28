import React from 'react';
import mailImage from './../assets/mail-image.png';

const Landing = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <h1>
                Emaily! 
            </h1>
            <h4>Collect feedback from your users!</h4>
            <p style={{ color: 'grey' }}>Please login with your Google account to go to the dashboard and add credits to be able to make a survey</p>
            <img style={{width: '90%'}} src={mailImage} alt="MailImage" />
        </div>
    );
};

export default Landing;