import React from 'react'



import {FaFacebookSquare} from "react-icons/fa"
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {MdEmail } from "react-icons/md";

export default function HomeFooter() {
    return (
        <div>
            <ul className='home-footer-nav'>
                <li>Join me on the way </li>
                
                <ul className='social-nav'>
                   
                   <a href="mailto:josipfrljic77@gmail.com"><MdEmail size={36} /></a> 
                   <a href='https://www.facebook.com/josip.pop'><FaFacebookSquare  size={36}/></a>
                   <a href='https://www.linkedin.com/in/josip-frlji%C4%87-65009719a'><FaLinkedin  size={36}/></a>  
                   <a href='https://github.com/josipfrljic94'> <FaGithub size={36}/></a> 
                   
                </ul>
            </ul>
        </div>
    )
}
