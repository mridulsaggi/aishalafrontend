import React from 'react'
import Main from './Main'
import Partners from './Partners'
import "./style.css"
import Super10batch from './Super10batch'
import img1 from "../../Images/discuss.png"
import { Link } from 'react-router-dom'
import Course from './courses/Course'
import Features from './courses/Features'
import Testimonial from "./courses/Testimonial"
const Home = () => {
  return (
    <>
    {/* <Main/> */}
    <Partners/>
    <Super10batch/>
    <div>
      <Link to="/page"><img  className='pd' src={img1} alt="" /></Link>
    </div>
    <Course/>
    <Features/>
    <Testimonial/>
    </>
  )
}

export default Home
