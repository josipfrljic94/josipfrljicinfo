import React from 'react';
import Footer from "../components/Footer";


import{SiNodeDotJs} from "react-icons/si";
import {SiMongodb} from "react-icons/si";
import {SiMysql} from "react-icons/si";

import { SiHtml5} from "react-icons/si";
import { SiCss3} from "react-icons/si";
import { SiSass} from "react-icons/si";
import{SiBootstrap} from "react-icons/si";
import { SiGreensock} from "react-icons/si";
import { SiJavascript} from "react-icons/si";
import { SiReact} from "react-icons/si";
import { SiGatsby} from "react-icons/si";


import { FiFigma } from "react-icons/fi";
import { SiAdobephotoshop} from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import secondsvg from "../images/josipsam.svg"


import "../about.css";
 const About = () => {
    return (
        <div className="about">
            <div className="about-container">
                <section className="aboutme-section">
                    
                     <div>  
                        <img src={secondsvg} alt="myimg"></img>
                      
                    <span>
                    I improve my programing skills every day.<br/>
                        In free time I play guitar,
                        writting, and train jiu-jitsu

                    </span>
                    
                    </div>   
                  

                   
                  
                </section>


                <section className="myskills">
                    <div className="myskills-container">
                        <h1>My Skills</h1>
                        <div className="myskill-d">
                           <div>
                               <h5>
                               making a modern UI.
                            working with animations for better UX
                               </h5>
                                <span>
                                    <SiAdobeillustrator/>
                                    <SiAdobephotoshop/>
                                    <FiFigma/>
                                </span>
                            
                           </div>
                           <div>

                           </div>
                        </div>
                        <div className="myskill-f">
                        <div>
                            <h5>
                                Client side,development, making creative UI,
                                RWD. State managment skills.
                            </h5>
                            <span>
                                <SiHtml5/>
                                <SiCss3/>                                                      
                                <SiSass/>
                                
                                <SiBootstrap/>
                                <SiGreensock/>
                                <SiJavascript/>
                                <SiReact/>
                                <SiGatsby/>
                            </span>
                        </div>
                            <div></div>
                        </div>
                        <div className="myskill-b">
                        <div>
                            <h5>
                        making a simple back end. 
                        Knowing the basics of MongoDB, MySQl
                            </h5>
                            <span>
                                <SiNodeDotJs/>
                                <SiMongodb/>
                                <SiMysql/>
                            </span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
           
        </div>
    )
}
export default About;