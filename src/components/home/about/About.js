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
              <h3 className="tg__title-4 about__title">About Me</h3>
              <p className="tg__title-6 about__bio">
                My passion for programming started in middleschool, however, my
                skills as a developer skyrocketed once I started programming
                professionally in highschool.
                <br />
                <br />I had the oppurtunity to develop for over 5 awesome
                companies / clients as a consultant. My work included mobile
                apps, web apps, backend servers, devops, and desktop apps.
              </p>
            </div>
            <div className="g__col-5">
              <ProfileCard />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
