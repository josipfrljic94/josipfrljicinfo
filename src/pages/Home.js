import React from 'react'
import Banner from "../components/Banner";
import Aboutme from "../components/Aboutme"
import MyServices from '../MyServices';
import Footer from '../components/Footer';
import "../App.css"




export default function Home() {
  return (
    <div className="home">
     
      <Banner/>
      <Aboutme/>
      <MyServices/>
      <Footer/>
    </div>
  )
}
