import React,{useEffect,useRef} from 'react'
import {TweenMax,Power3} from 'gsap';

export default function AboutMeBanner() {

    let title1 = useRef(null)
    useEffect(() => {
        TweenMax.from(
            title1,
            0.8,
            {
                opacity:0,
                y:-25,
                ease:Power3.easeOut,
               delay:0.4,
            })
       
    }, [])
    return (
        <div ref={el=>{title1=el}} className='aboutme-banner'>
            <h1  >About me</h1>
            <h3> My biography</h3>
        </div>
    )
}
