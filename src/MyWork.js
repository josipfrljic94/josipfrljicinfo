import React,{useEffect,useContext} from 'react'
import {NewContext} from './Contex';

export default function MyWork() {

    const contextdata = useContext(NewContext);
    const mywork= contextdata.work;

    return (
        <div id='mywork' className='mywork'>
            <h1 className='mywork-title'>My Work</h1>
            {mywork.map((item)=>{
                return(
                    <div key={(Math.random() * 100000000)} className='mywork-container'>
                        <h1>{item.title}</h1>
                        <p>{item.tech}</p>
                        <div className='mywork-img-container'>
                        <img src={item.img[0]}/>
                        <img src={item.img[1]}/>
                        </div>
                       
                    </div>
                )
            })}
        </div>
    )
}
