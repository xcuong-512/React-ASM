import React from 'react'
import './Footer.css'
import Youtube from '../../assets/youtube_icon.png'
// import Twitter from '../../assets/twitter_icon.png'
import Facebook from '../../assets/facebook_icon.png'
import Instagram from '../../assets/instagram_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icon">
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                {/* <img src={Twitter} alt="" /> */}
                <img src={Youtube} alt="" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift Cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Noitices</li>
                <li>Cookie Preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyright-text">	&copy; 2025 Cineon, Inc.</p>
        </div>
    )
}

export default Footer
