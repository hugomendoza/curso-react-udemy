import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      
      <Link to="/" className="navbar-brand">UseContext</Link>
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="navbar-nav">
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>
          <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
        </div>
      </div>
    </nav>
  )
}
