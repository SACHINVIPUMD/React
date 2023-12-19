import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';
import Testimonial from '../Components/Testimonial';
export default function Navigator() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}></Route>
        <Route path='/About' element = {<About />}></Route>
        <Route path='/Contact' element = {<Contact />}></Route>
        <Route path='/Testimonial' element = {<Testimonial />}></Route>
      </Routes>
    </div>
  )
}