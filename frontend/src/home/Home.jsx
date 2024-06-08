import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Books from '../components/Books'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Login from '../components/Login'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>   
    <Books/>
    <Footer/>
    <Card/>
    <Login/>
    </>
  )
}

export default Home