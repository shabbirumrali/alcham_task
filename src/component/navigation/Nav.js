import React from 'react'
import {Link } from 'react-router-dom'
import './Nav.css'
import '../../index.css'

const Nav = () => {
  return (
    <>
    <nav>
        <ul>
            <li><Link to='/' >Data</Link></li>
            <li><Link to='/Addform'>Add Form</Link></li>            
        </ul>        
    </nav>    
    </>
  )
}

export default Nav