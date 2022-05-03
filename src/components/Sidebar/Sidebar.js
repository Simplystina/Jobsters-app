import React from 'react'
import './Sidebar.css'
import logo from '../../images/logo.svg'
import {IoMdStats} from 'react-icons/io'
import {MdQueryStats,MdOutlinePostAdd} from 'react-icons/md'
import {ImProfile} from 'react-icons/im'


const Sidebar = () => {
  return (
    <aside className='side-bar'>
       <div className='sidebar-logo'><img src={logo} alt='logo'></img></div>
       <ul className='sidebar-links'>
          <li> <IoMdStats className='links-icon'/> Stats </li>
          <li> <MdQueryStats className='links-icon'/> All Jobs </li>
          <li> <MdOutlinePostAdd className='links-icon'/> Add Jobs </li>
          <li> <ImProfile className='links-icon' />Profile </li>
       </ul>
    </aside>
  )
}

export default Sidebar
