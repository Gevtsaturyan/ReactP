import React from "react";
import {
  BrowserRouter as Roter,
  Route,
  Routes
}
from 'react-router-dom'
import Menu from "./Components/menu/menu";
import About from "./Pages/AboutPage/About";
import Contact from "./Pages/ContactPage/Contact";
import Corona from "./Pages/CoronaPage/Corona";
import Home from "./Pages/HomePage/Home";
import Register from "./Pages/RegisterPage/Register";




export default function App(){
  return(
    <Roter>
      <Menu/>
      <Routes>
        <Route path="/Home" element={<Home/>}/>
        <Route exact path="/AboutPage" element={<About/>}/>
        <Route exact path="/Contact" element={<Contact/>}/>
        <Route exact path="/Corona" element={<Corona/>}/>
        <Route exact path="/Register" element={<Register/>}/>
      </Routes>
    </Roter>
  )
}