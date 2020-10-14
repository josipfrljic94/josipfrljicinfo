import React from 'react'
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import "./App.css"


import {Route,Switch} from "react-router-dom"




export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/about">
        <About/>
      </Route>
      </Switch>
    </div>
  )
}

