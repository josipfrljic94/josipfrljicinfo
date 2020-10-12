import React,{useContext} from 'react'


import {NewContext} from './Contex'
import AboutMeBanner from './AboutMeBanner';


export default function About() {
    
    const mydata = useContext(NewContext);
    const aboutme= mydata.aboutMeValues;

    
    return (
        <div>
           <div className="grid-container-2"  id='about'>
                <div className="item1"><AboutMeBanner/></div>
               
              <div   className='item2'>
                    
               { aboutme.map((onedata)=>{
                   return(
                      
                   <section  className='about-section'  key={(Math.random() * 100000000)}>
                            <div  key={onedata.title} className='section-img'>
                       <img src={onedata.img}></img>
                   </div>
                   <div  className='section-text'>
                       <h1>{onedata.title}</h1>
                   <p>{onedata.desc}</p>
                   </div>  
                   </section>)})}
                   </div>

              
              
                   
             
               
                
              
        </div>
        </div>
    )
}
