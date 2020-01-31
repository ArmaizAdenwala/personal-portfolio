import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

export default class Navbar extends Component {
  links = {
    Home: {
      to: '/',
      name: 'HOME',
    },
    PlanSpace: {
      to: '/projects/planspace',
      name: 'PLANSPACE',
    },
    PlanSpaceDev: {
      to: '/projects/planspace/dev',
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
      return this.props.customLinks.map(link => this._renderLink(link));
    }
  };

  _renderLink = link => {
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
          {this._renderLinks()}
          {this._renderCustomLinks()}
        </div>
      </nav>
    );
  }
}
