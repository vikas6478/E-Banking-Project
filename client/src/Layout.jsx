import React from 'react'
import { Outlet } from 'react-router-dom'
import Topnav from './component/Topnav'
import Footer from './component/Footer'

const Layout = () => {
  return (
    <>
    
   
    <Topnav/>

    <main>
        <Outlet/>
    </main>

    <Footer/>
    </>
  )
}

export default Layout
