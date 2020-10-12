import React,{useRef, useState, useEffect} from 'react'
import {AiOutlineMenu} from "react-icons/ai";
import {MdHome} from 'react-icons/md';
import {MdPerson} from 'react-icons/md';
import {MdWallpaper} from 'react-icons/md';
import {MdContactMail} from 'react-icons/md';
import {Link} from 'react-scroll';
import {TweenMax,Power3} from 'gsap';
import gsap from 'gsap';

export default function Navbar() {

    const [activemenu, setactivemenu] = useState(false);

    const navbarAction=()=>{
        setactivemenu(!activemenu)
       activemenu  ? TweenMax.to('.nav-container',
           
       {
        top:'0%',
        display:'flex',
        zIndex:'10000',
        duration:'1.5',
        ease:Power3.slideOut,
       
       }  
        ) 
        :  gsap.fromTo('.nav-container',
        {
            
          top:'0',
            
    },
    {
    top:'-100%',
    left:'0',
    duration:'1.5',
    
    ease:Power3.slideOut,
    }  
    )
       
    }
    
   
    let hamburger= useRef(null);
    let list= useRef(null);
useEffect(() => {
    navbarAction()
}, [])
   
const turnof=()=>{
    setactivemenu(false);
    navbarAction()
}
   
    return (
        <div className='nav'>
                <a  onClick={navbarAction} ref={el=>hamburger=el}> <AiOutlineMenu size={26} className='hamburger'/></a>
                
            <ul className='nav-container' ref={el=>list=el} >
            <Link to='home' > <li onClick={()=>{turnof()}}>Home <MdHome/></li></Link>
                <Link to='about' duration={1000} smooth={true}><li  onClick={()=>{turnof()}}>About me <MdPerson/></li></Link>
               <Link to='mywork' smooth={true} duration={1000}> <li  onClick={()=>{turnof()}}>My work <MdWallpaper/></li></Link>
               <Link to='contact' smooth={true} duration={1200}> <li onClick={()=>{turnof()}}>Contact <MdContactMail/></li></Link>
            </ul>
        </div>
    )
}
