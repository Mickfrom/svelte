import React from "react";
import { Button } from './Button.jsx';
import './Footer.css';
import { Link } from 'react-router-dom';



function Footer() {
  return (
    <div className="footer-container">
       <section className="footer-subscription">
        <p className="footer-subscription-heading">
            Join the Adventure newletter ro receive our 
            best vacation deals
        </p>
        <p className="footer-subscription-text">
            You can unsubscribe at any time.
        </p>
        <div className="input-areas">
            <form action="">
                <input type="email" name="email"
                placeholder="Your Email"
                className="footer-input"/>
                <Button buttonStyle='btn--outline'>
                 Subscribe    </Button>
            </form>
        </div>
       </section>
       <div className="footer-links">
            <div className="footer-link-wrapper">
               <div className="footer-link-items">

                <h2>About Us</h2>
                    <Link to='/sign-up'>How it works
                    </Link>
                    <Link to="/">Testimonials
                    </Link>
                    <Link to="/">Careers
                    </Link>
                    <Link to="/">Investors
                    </Link>
                    <Link to="/">Terms of Service
                    </Link>
                </div> 
                <div className="footer-link-items">

                <h2>Contact Us</h2>
                <Link to='/sign-up'>How it works
                </Link>
                <Link to="/">Testimonials
                </Link>
                <Link to="/">Careers
                </Link>
                <Link to="/">Investors
                </Link>
                <Link to="/">Terms of Service
                </Link>
            </div> 
            <div className="footer-link-items">

            <h2>About Us</h2>
                <Link to='/sign-up'>How it works
                </Link>
                <Link to="/">Testimonials
                </Link>
                <Link to="/">Careers
                </Link>
                <Link to="/">Investors
                </Link>
                <Link to="/">Terms of Service
                </Link>
            </div> 
            </div>
       </div>
       <section className="social-media">
        <div className="social-media-wrap">
            <div className="footer-logo">
               <Link to='/' className="social-logo">
               TRVL <i className="fab fa-typo3" />
                </Link>
            </div>
            <small className="website-right">
                TRVL
            </small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label='Facebook'
                
                >
                <i className="fab fa-facebook">

                </i>
                
                </Link>
                <Link className="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label='instagram'
                
                >
                <i className="fab fa-instagram">

                </i>
                
                </Link>
            </div>
        </div>
       </section>
    </div>
  )
}

export default Footer;
