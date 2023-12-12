import React from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../imagesandvideos/tesla_logo.png';

export const navElements = [
  { label: <img src={logo} />, route: '/', style: { marginRight: 'auto' } },
  { label: 'Model 3', route: '/model_3' },
  { label: 'Model S', route: '/model_s' },
  { label: 'Model X', route: '/model_x' },
  { label: 'Model Y', route: '/model_y' },
  { label: 'Cypertruck', route: '/cypertruck' },
  { label: 'Menu', route: null, style: { marginLeft: 'auto' } },
];

function Header({ setShowsidebar }) {
  const navigate = useNavigate();

  const handleClick = (route) => {
    window.scrollTo(0, 0); 
    navigate(route);
  };

  return (
    <div>
      <nav>
        <ul className='header_line'>
          {navElements.map(({ label, route, style = {} }) => (
            <li style={style} key={label} onClick={() => {
              if (label === "Menu") {
                setShowsidebar(true)
              } else {
                handleClick(route);
              }
            }}>{label}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
