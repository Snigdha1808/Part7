import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {
 return (
    <nav>
      <Link to="/" className="navbar-title">Indian Culture Management System</Link> {/* Add a class name to your website title */}
      <Link to="/">Home</Link>
      <Link to="/featured">Articles</Link>
      <Link to="/arts">Posts</Link>
      <input type="text" placeholder="Search..." />
      <Link to="/login">Login</Link>
    </nav>
 );
};

export default Navbar;
