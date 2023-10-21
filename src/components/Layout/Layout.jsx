import React from 'react'
import Navigation from "../Navigation"
import Footer from '../Footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navigation/>
        <main className='min-h-[70vh]'>{children}</main>
        <Footer/>
    </div>
    
  )
}

export default Layout