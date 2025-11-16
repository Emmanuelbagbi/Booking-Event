import React, { useState } from 'react';
import './ContactUs.css';
import Navbar from '../../components/Nav/Navbar';
import LuxuryHotelFooter from '../../components/Footer/Footer';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="glass-heroX">
        <h1 className="animate-fade-in">Get In Touch</h1>
        <p className="animate-slide-up">We'd love to hear from you</p>
        <div className="hero-buttons">
          <button className="cta-button primary">Schedule a Call</button>
          <button className="cta-button secondary">Request Quote</button>
        </div>
      </div>
      
      <div className="contact-content">


        <div className="contact-info">
          <div className="info-card glass-cardContact animate-fade-in">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div className="details">
                <h3>Address</h3>
                <p>123 Business Avenue, Suite 100<br />New York, NY 10001</p>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="details">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <span className="contact-option">Tel | Fax | Mobile</span>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="details1">
                <h3>Email</h3>
                <p>info@company.com</p>
                <span className="contact-option">General Inquiries</span>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <div className="details">
                <h3>Business Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 2pm</p>
              </div>
            </div>
            
            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-icon"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          
          <div className="map-container glass-cardContact animate-slide-up">
            <h2>Find Us</h2>
            <div className="map-placeholder">
              <img 
                src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Office Location" 
              />
              <div className="map-overlay">
                <button className="map-button">
                  <i className="fas fa-map-marked-alt"></i>
                  Open in Maps
                </button>
              </div>
            </div>
          </div>
        
        </div>

        <div className="contact-form-container glass-cardContact animate-fade-in">
          <div className="form-header">
            <h2>Send Us a Message</h2>
            <p>Fill out the form below and we'll get back to you as soon as possible</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="form-groupContact">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-groupContact">
                <label htmlFor="email">Your Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-groupContact">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-groupContact">
              <label htmlFor="message">Your Message *</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-footer">
              <p>* Required fields</p>
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i>
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        
      </div>
    </div>
    <LuxuryHotelFooter/>
    </>
  );
};

export default ContactUs;