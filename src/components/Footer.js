import React from 'react';

import {  FaFacebookF} from "react-icons/fa";
import  {FaInstagram} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
                       
                       


export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-nav">
                    <nav>
                        <h1>Content</h1>
                        <ul>
                            <li>Home</li>
                            <li>About me</li>
                            <li>Contact me</li>
                        </ul>
                    </nav>
                </div>
                <div className="footer-rights">
                    <nav>
                        <h1>Policies</h1>
                    <ul>
                    
                        <li>Licences</li>
                        <li>Policies</li>
                        <li>Contact</li>
                    </ul>
                    </nav>
                </div>
                <div className="footer-social">
                   
                   <nav>
                   <h1>Contact</h1>
                      <ul>
                       <FaFacebookF/>
                       <FaInstagram/>
                       <FaGithub/>
                       <FiMail/>
                       </ul>
                   </nav>
                </div>
            </div>
        </div>
    )
}
