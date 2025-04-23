import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [activeIcon, setActiveIcon] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send(
      'service_1y1t1yi',
      'template_p30ttl6',
      templateParams,
      'KTj6GPbTAVS2JysnN'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message.');
    });
  };

  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={sendEmail} className="contact-form">
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Your Name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            placeholder="Your Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Message:</label>
          <textarea 
            placeholder="Your Message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
            required 
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>

      <div className="social-icons">
        <a href="https://www.facebook.com/share/19BKcvb4Uj/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('facebook')}>
          <FaFacebook className={activeIcon === 'facebook' ? 'active' : ''} />
        </a>
        <a href="https://www.instagram.com/saheerrr____?igsh=MW16MTE2eHV5emtydw==" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('instagram')}>
          <FaInstagram className={activeIcon === 'instagram' ? 'active' : ''} />
        </a>
        <a href="https://www.linkedin.com/in/saheer-chungath-23b44434a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('linkedin')}>
          <FaLinkedin className={activeIcon === 'linkedin' ? 'active' : ''} />
        </a>
        <a href="https://github.com/saheer07" target="_blank" rel="noopener noreferrer" onClick={() => handleIconClick('github')}>
          <FaGithub className={activeIcon === 'github' ? 'active' : ''} />
        </a>
      </div>
    </div>
  );
}

export default Contact;