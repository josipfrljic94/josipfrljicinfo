import React from 'react';
import {Link} from 'react-scroll';
import {FaFacebookSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className='myfooter' id='contact'>
            <h1>Contact me</h1>
            <div className='myfooter-container'>
           
            
            <ul className='footer-nav'  >
            <Link to='home' > <li >Home </li></Link>
                <Link to='about' duration={1200} smooth={true}><li  >About me </li></Link>
               <Link to='mywork' smooth={true} duration={1000}> <li >My work </li></Link>
               <Link to='contact' smooth={true} duration={100}> <li>Contact </li></Link>
            </ul>  

            <ul className='footer-social'>
                   
                   <a href='mailto:josipfrljic77@gmail.com'><MdEmail size={36} /></a> 
                   <a href='https://www.facebook.com/josip.pop'><FaFacebookSquare  size={36}/></a>
                   <a href='https://www.linkedin.com/in/josip-frlji%C4%87-65009719a'><FaLinkedin  size={36}/></a>  
                   <a href='https://github.com/josipfrljic94'> <FaGithub size={36}/></a> 
                   
                </ul>
            
            </div>
            
        </div>
    )
}
