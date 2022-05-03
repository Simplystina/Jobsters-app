import React from 'react'
import './Navbar.css'
import logo from '../../images/logo.svg'
import {AiOutlineMenuUnfold, AiFillCaretDown} from 'react-icons/ai'
import {BsPersonCircle} from 'react-icons/bs'

const Navbar = () => {
  return (
    <div className='navbar-container'>
        <AiOutlineMenuUnfold className='menu-icon'/>
        <h2>Dashboard</h2>
        <button className='btn user-btn'><BsPersonCircle className='user-icon'/>  Troy  <AiFillCaretDown className='user-down-icon'/></button>
    </div>
  )
}

export default Navbar
