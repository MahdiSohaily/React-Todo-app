import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <>
      <nav className="navBar">
        <button
          style={{ border: 'none', backgroundColor: 'none' }}
          type="button"
          onClick={handleToggle}
        >
          {navbarOpen ? (
            <MdClose
              style={{
                color: '#fff',
                width: '40px',
                height: '40px',
              }}
            />
          ) : (
            <FiMenu
              style={{ color: '#7b7b7b', width: '40px', height: '40px' }}
            />
          )}
        </button>
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <li>
            <NavLink onClick={() => closeMenu()} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={() => closeMenu()} to="/About">
              About
            </NavLink>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
