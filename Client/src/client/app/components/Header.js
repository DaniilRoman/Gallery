import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../containers/navigation';

// var active = true;
// var projectsLink = "nav-link active";
// var loginActive = "nav-link";
// function changeActive(e) {
//   e.preventDefault();
//   switch (e.target.className) {
//     case "nav-item 1":
//       projectsLink = "nav-link active";
//       loginActive = "nav-link";
//       break;
//     case "nav-item 2":
//       projectsLink = "nav-link";
//       loginActive = "nav-link-active";
//       break;
//     default:
//       break;
//   }

// }
const Header = () => (
  <header className="header clearfix">
    <div className="container">
      <Navigation />
    </div>
    <hr />
  </header>
)

export default Header;