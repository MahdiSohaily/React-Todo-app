import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navBar">
        <ul>
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
