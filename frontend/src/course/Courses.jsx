import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/Footer'
import Course from '../components/Course'

function Courses() {
  return (
    <>
     <Navbar/>
     <div className="max-h-screen">
     <Course/>
     </div>
     
   
    </>
  )
}

export default Courses