import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';
import ArmaizLogo from './armaiz-developer-code-logo.png';

export default class Navbar extends Component {
  links = {
    Projects: {
      to: '/projects/',
      name: 'PROJECTS',
    },
    Blog: {
      to: '/blog/',
      name: 'BLOG',
    },
    PlanSpace: {
      to: '/projects/planspace/',
      name: 'PLANSPACE',
    },
    PlanSpaceDev: {
      to: '/projects/planspace/dev/',
      name: 'DEV DETAILS',
    },
    Plutus: {
      to: '/projects/plutus/',
      name: 'PLUTUS',
    },
    PlutusDev: {
      to: '/projects/plutus/dev/',
      name: 'DEV DETAILS',
    },
  };

  _renderLinks = () => {
    if (this.props.links) {
      return this.props.links.map(link => this._renderLink(this.links[link]));
    }
  };
  _renderCustomLinks = () => {
    if (this.props.customLinks) {
      return this.props.customLinks.map(link => this._renderLink(link, true));
    }
  };

  _renderLink = (link, custom) => {
    if (custom) {
      return (
        <a
          className="tg__c--primary--dark tg__button nav__link tg__c--secondary"
          href={link.to}
        >
          {link.name}
        </a>
      );
    }
    return (
      <Link
        className="tg__c--primary--dark tg__button nav__link tg__c--secondary"
        to={link.to}
      >
        {link.name}
      </Link>
    );
  };

  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <div>
            <a href="/">
              <img
                className="nav__container__logo"
                alt="Armaiz Adenwala, Software Engineer - JS, Python, Ruby, and More"
                src={ArmaizLogo}
              />
            </a>
          </div>
          <div className="nav__container__links">
            {this._renderLinks()}
            {this._renderCustomLinks()}
          </div>
        </div>
      </nav>
    );
  }
}
