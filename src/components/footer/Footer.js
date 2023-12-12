import React from 'react';
import './Footer.css'; 
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


const Footer = () => {
  return (
    <footer className="tesla-footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/model_s">Model S</a>
          <a href="/model_3">Model 3</a>
          <a href="/model_x">Model X</a>
          <a href="/model_y">Model Y</a>
          <a href="/notfound">Roadster</a>
          <a href="/cypertruck">Cybertruck</a>
          <a href="/notfound">Energy</a>
        </div>
        <div className="footer-social-media">
          <a href="https://www.facebook.com/Tesla" aria-label="Facebook">
           <FacebookIcon />
          </a>
          <a href="https://twitter.com/Tesla" aria-label="Twitter">
            <TwitterIcon />
          </a>
          <a href="https://www.instagram.com/Tesla" aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/company/tesla-motors" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href="https://www.youtube.com/user/TeslaMotors" aria-label="YouTube">
            <YouTubeIcon />
          </a>
        </div>
        <div className="footer-copy-right">
          <p>© {new Date().getFullYear()} Tesla, Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
