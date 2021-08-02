import React from 'react';
import 'react-social-icons';
import { SocialIcon } from 'react-social-icons';
import './style.css';

const footer = () => {
    return (
        <div className="footer-social">
            <div className="d-flex align-items-center justify-content-center">
            
                <SocialIcon url="https://www.linkedin.com/in/alen-sudec-0805641a0/" fgColor="#FFFFFF" className="footer-pic"/>
              
                <SocialIcon url="https://github.com/AlenSudec" fgColor="#FFFFFF" className="footer-pic"/>
                <SocialIcon url="https://www.instagram.com/alensudec/" fgColor="#FFFFFF" className="footer-pic"/>
                <SocialIcon url="https://www.facebook.com/alen.sudec/" fgColor="#FFFFFF" className="footer-pic-last"/>
                
            </div>
            <br/>
            <div className="d-flex align-items-center justify-content-center">
                <h4 className="author"><b>@Alen Sudec, 2021.</b></h4>
            </div>
        </div>
    )
}

export default footer;
