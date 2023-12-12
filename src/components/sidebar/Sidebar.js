import React from 'react'
import './Sidebar.css'
import { RiCloseCircleFill } from "react-icons/ri";
import {navElements} from '../header/Header'
import { useNavigate } from 'react-router-dom';
import sidebarLogo from '../../imagesandvideos/tesla_logo1.png'


function Sidebar({setShowsidebar}) {
    const navigate = useNavigate()
  return (
    <nav className='sidebar'>
        <button onClick={() => setShowsidebar(false)}><RiCloseCircleFill  size={25} /></button>
        <ul>
        {navElements.map(({label, route}) => {
                    if (label === 'Menu') return null;
                    if (typeof label === 'object') {
                        label = <img src={sidebarLogo} />;
                    }
                    return <li onClick={()=>{ 
                        navigate(route)
                    }} key={label}>{label}</li>
                })}
        </ul>
    </nav>
  )
}

export default Sidebar;
