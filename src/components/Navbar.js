import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  return (
    <>
      <button type="button" onClick={handleToggle}>
        {navbarOpen ? 'Close' : 'Open'}
      </button>
      <nav className="navBar">
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
