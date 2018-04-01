import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../containers/navigation';

const Header = () => (
  <header className="header clearfix">
    <div className="container">
      <Navigation />
    </div>
    <hr />
  </header>
)

export default Header;