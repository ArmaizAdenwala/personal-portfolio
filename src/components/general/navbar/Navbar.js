import React from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

const Navbar = () => (
  <nav className="nav">
    <div className="nav__container">
      <Link className="tg__button tg__c--primary nav__link" to="/">
        HOME
      </Link>
      <Link className="tg__button tg__c--primary nav__link" to="/projects">
        PROJECTS
      </Link>
      <Link className="tg__button tg__c--primary nav__link" to="/projects">
        BLOG
      </Link>
    </div>
  </nav>
);

export default Navbar;
