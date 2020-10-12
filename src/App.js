import React,{lazy,Suspense,useEffect,useRef,useState} from 'react';
import { useScroll } from 'react-use';

import {TweenMax,Power3} from 'gsap';
import './App.css';
import {FaArrowAltCircleUp} from 'react-icons/fa'
import Navbar from './Navbar';
import HomeFooter from './HomeFooter';
import {Link} from 'react-scroll';
// import MyWork from './MyWork';
// import About from './About';

import slika from './images/josip.png';
import Loading from './Loading';



const About = lazy(()=>import ('./About'))
const MyWork = lazy(()=>import ('./MyWork'))
const Footer = lazy(()=>import('./Footer'))
function App() {
useEffect(() => {
  window.addEventListener("scroll", logit);
  
}, [])
 
  const logit=()=>{
    if (window.pageYOffset>ovaj.offsetTop || window.pageYOffset<contact.YOoffset){
      
      TweenMax.to(ovaj,1,
        {
            opacity:1,
            
            ease:Power3.easeOut,
            delay:0.3
         
    }   
    )
    }
    else if(window.pageYOffset<ovaj.offsetTop || window.pageYOffset>contact.offsetTop){
      console.log(contact.offsetBottom,'co')
      console.log(window.pageYOffset,'wi')
      console.log(ovaj.offsetTop,'ov')
      TweenMax.to(ovaj,1,
        {
            opacity:0,
            
            ease:Power3.easeOut,
            delay:0.3
         
    }   
    )
    }
    
    else(ovaj.style.opacity='0')
  
  }

  
  let app= useRef(null);
  
  let midBanner=useRef(null);
  let imgbanner= useRef(null);
  let ovaj= useRef(null);
  let contact= useRef(null);
  
 


 

  useEffect(() => {
    TweenMax.to(app,{css:{visibility:'visible'}})
    TweenMax.from(midBanner, 1.2,
      {
          opacity:0,
          y:-75,
          ease:Power3.easeOut,
          delay:1
       
  }   
  )
  TweenMax.from(imgbanner,1.2,{
    opacity:0,
          y:-75,
          ease:Power3.easeOut,
          delay:0.6
  })
  

},[])


 

  return (
 
    <Suspense fallback={<Loading/>}>
    <div ref={el=>app=el} className='App' >
    <div className="App-header"  id='home'>
      <div className='header'>
       
        
      </div>
      <div className='left'>
        <Navbar/>
      </div>
      <div className='middle'>
        <div ref={el=>midBanner=el} className='middle-banner'>
        <h1>I'm Josip Frljić</h1>
        <h3> front-end developer</h3>
        </div>
      
      <img ref={el=>imgbanner=el} src={slika} className='slika1'></img>
     
      </div>
      <div ref={el=>ovaj=el}  className='arrow-container'>
        <Link to='home' duration={1000} smooth={true}><FaArrowAltCircleUp   className='arrowOut' size={36}/> </Link>  
      </div>
     
     
  
      
      <div className='footer' >
        <HomeFooter/>
      </div>
     
      
      
    </div>
  
    <div className='section2'  >
   
      <About/>
     
      </div>
      <div  >
        <Suspense>
          <div  >
          <MyWork/>
          <Footer/>
          </div>
       
        </Suspense>
      </div>
      
    
    </div>
    </Suspense>
  );
}

export default App;
