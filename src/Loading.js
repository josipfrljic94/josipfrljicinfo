import React,{useRef,useEffect } from 'react';

import {TweenMax,Power3} from 'gsap';


export default function Loading() {
    let loading=useRef(null);
   useEffect(() => {
    TweenMax.to(loading, 0.5, {x: -100, repeat: -1, yoyo: true});
     
   }, [])
    

    return (
        <div className='loading'>
        <div ref={el=>loading=el} className='loading-container'>
            <div className='red'></div>
            <div className='blue'></div>
            <div className='yellow'></div>
        </div>
        </div>
    )
}
