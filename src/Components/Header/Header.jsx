import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className='header'>
        <Link to='/'>
          <img className='header-logo' src={logo} alt='example' />
        </Link>
        <div
          className={`hamburger-menu ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`navbar ${menuOpen ? 'open' : ''}`}>
        <Link to='/All'>
          <button className='button-all'>All</button>
        </Link>
        <Link to= '/Apparel/Tops/crewneck'>
          <button className='button-apparel'>Apparel</button>
        </Link>
        <Link to='/Accessories'>
          <button className='button-accessories'>Accessories</button>
        </Link>
        <Link to='/Cart'>
          <button className='button-cart'>Cart</button>
        </Link>
      </div>
    </>
  );
};

export default Header;

