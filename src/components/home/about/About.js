import React, { Component } from 'react';
import { Container } from '../../../components/general';
import ProfileCard from './ProfileCard';
import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <div className="g__row">
            <div className="g__col-5">
              <ProfileCard />
            </div>
            <div className="g__col-7">
              <h3 className="tg__title-4 about__title">Who am I?</h3>
              <p className="tg__title-6 about__bio">
                I'm a passionate Software Engineer from Sacramento, CA who's
                experienced in taking fullstack apps to production from scratch.
                <br />
                <br />
                I've had the oppurtunity to develop for over 5 awesome companies
                / clients as a consultant. My work included mobile apps, web
                apps, backend servers, devops, and desktop apps.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
