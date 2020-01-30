import React, { Component } from 'react';
import { Link } from 'gatsby';
import './Navbar.scss';

export default class Navbar extends Component {
  links = {
    Home: {
      to: '/',
      name: 'HOME',
    },
  };
  _renderLinks = () => {
    if (this.props.links) {
      return this.props.links.map(link => this._renderLink(link));
    }
  };

  _renderLink = linkKey => {
    const link = this.links[linkKey];
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
        <div className="nav__container">{this._renderLinks()}</div>
      </nav>
    );
  }
}
