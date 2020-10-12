import React ,{useState,useEffect} from 'react'
import {storedata} from './Data';
import {workdata} from './Data';


export const NewContext = React.createContext();

export const ContextProvider=(props)=> {
    const [state, setstate] = useState([]);
     useEffect(() => {
        transferdata()
     },[setstate])
     const transferdata=()=>{
        let data=[]
        storedata.forEach(item=>{
            const singleItem= {...item};
              data=[...data,singleItem];
             
        })  
        setstate(data)
    }
    const [working, setworking] = useState([]);
    useEffect(()=>{
        takedata()},[setworking])
        const takedata=()=>{
            let workDatas=[]
           workdata.forEach(item=>{
               const work={...item};
               workDatas=[...workDatas,work]
           }) 
           setworking(workDatas)
        }
    return (
        <NewContext.Provider value={{aboutMeValues:state, work:working}}>
            {props.children}
        </NewContext.Provider>
     
     )
}