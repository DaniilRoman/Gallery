import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header>
    <nav>
      <ul>
        <li><Link to='/projects'>Projects</Link></li>
        <li><Link to='/login'>Login</Link></li>
      </ul>
    </nav>
    <hr/>
  </header>
)

export default Header;