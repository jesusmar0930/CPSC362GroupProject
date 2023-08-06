import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className = "contact">
            <div className = "title">
                <h1 className = "title-text">CONTACT US</h1>
            </div>

            <div className = "subtitle">
                <p className = "subtitle-text">
                    Questions? Comments? Concerns? Let us know and one of our
                    awesome customer support specialists will get back to you as soon
                    as possible.
                </p>
            </div>

            <form className = "form" action="mailto:titanradiomerch@gmail.com" method="GET">
                <div className = "form-grid">
                    <div className = "form-grid-1-half">
                        <label className = "form-name-title">Name</label>
                        <input className = "form-name-input" name="subject" type="text"></input>
                    </div>

                    <div className = "form-grid-2-half">
                        <label className = "form-email-title">E-Mail</label>
                        <input className = "form-email-input" name="body"></input>
                    </div>
                </div>

                <label className = "form-message-title">Message</label>
                <textarea className = "form-message-input"></textarea>
                <input className = "send-button" type="submit" value="SEND"></input>
            </form>
        </div>
    );
};

export default Contact;