import React, { useState } from 'react';
import './Contact.css';

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Details:', details);
    setSubmitted(true);
  };

  const handleReset = () => {
    setName(' ');
    setEmail('');
    setSubject('');
    setDetails('');
    setSubmitted(false);
  };

  return (
    <div className="contact_page">
        <div className="contact_container">
            <div className="contact_left">
                <h2 className="inquiry_text">SUBMIT AN INQUIRY</h2>
                <div className="contact_form">
                    <div className="form">
                    {submitted ? (
                    <div className="contact_after">
                        <p>Thank you for contacting us! <br></br>Our team will reach out soon with further information.</p>
                        
                        <button className="reset" onClick={handleReset}>Submit Another Response</button>
                    </div>
                    ) : (
                    <form onSubmit={handleSubmit}>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="name">Name</label>
                            <br></br>
                            <input
                                type="text"
                                autoComplete='none'
                                id="name"
                                className="input"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="entry_field">   
                            <label className="input_label" htmlFor="email">Email</label>
                            <br></br>
                            <input
                                type="email"
                                autoComplete='none'
                                id="email"
                                className="input"
                                placeholder="Your Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="subject">Subject</label>
                            <br></br>
                            <select
                                id="subject"
                                required
                                value={subject}
                                className="subject"
                                onChange={(e) => setSubject(e.target.value)}
                            >
                                <option value="">Select...</option>
                                <option value="booking">Booking</option>
                                <option value="collaboration">Collaboration</option>
                                <option value="general">Sponsorship</option>
                                <option value="lime1">Promotion and Press</option>
                                <option value="lime2">Feedback</option>

                            </select>
                        </div>
                        <div className="entry_field">
                            <label className="input_label" htmlFor="details">Please share more details</label>
                            <br></br>
                            <textarea
                                type="text"
                                id="details"
                                autoComplete='none'
                                required
                                className="input"
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                                
                            />
                        </div>
                        
                        <button type="submit" className="button">Submit</button>
                        
                        
                    </form>
                    )}
                </div>
                </div>

            </div>
            <div className="contact_right">
                <h2 className="inquiry_text">CONTACT</h2>
                <p>stagefright@globalmedia.com</p>

                <h2 className="contact_heading">BASED IN</h2>
                <p>Dallas, Texas</p>

                {/* Social Media */}
                <div className="social-media">
                <h3 className="contact_heading">FOLLOW US:</h3>
                <ul className="social_links">
                    <li ><a href="https://www.instagram.com/stagefright" target="_blank" rel="noopener noreferrer">Instagram: @stagefright</a></li>
                    <li><a href="https://www.twitter.com/name" target="_blank" rel="noopener noreferrer">Twitter: @name</a></li>
                    <li><a href="https://www.facebook.com/name" target="_blank" rel="noopener noreferrer">Facebook: @name</a></li>
                    <li><a href="https://www.spotify.com/name" target="_blank" rel="noopener noreferrer">Spotify: @name</a></li>
                </ul>
                </div>

            </div>
        </div>

    </div>

  );
}

export default Contact;