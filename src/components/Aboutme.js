import React from 'react';
import homesvg from "../images/josipsvg.svg"

export default function Aboutme() {
    return (
        <div className="about-me"> 
       
         <div className="banner-images">
                <div>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path  d="M44.8,-75.7C57.6,-70.3,67.1,-57.2,70.8,-43.4C74.6,-29.5,72.6,-14.7,74.1,0.8C75.5,16.4,80.4,32.8,75.3,44.5C70.3,56.1,55.3,63,41.1,71.3C26.9,79.7,13.4,89.6,1,87.9C-11.4,86.1,-22.8,72.7,-35.7,63.6C-48.6,54.4,-63,49.6,-70.9,39.7C-78.7,29.8,-80,14.9,-78.2,1C-76.5,-12.9,-71.8,-25.8,-63.9,-35.6C-56,-45.4,-44.9,-52,-33.7,-58.3C-22.6,-64.6,-11.3,-70.6,2.4,-74.7C16,-78.8,32.1,-81.1,44.8,-75.7Z" transform="translate(100 100)" />
                </svg>
                <span>My passion is web development and i am looking for job !!!</span>
                </div>
               
            <img src={homesvg} alt="myimgg" ></img>
           
           
            </div>
            
        </div>
    )
}
