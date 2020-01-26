import React, { Component } from 'react';
import { Container } from '../../../components/general';
import profilePic from '../../../images/armaiz_adenwala_software_engineer_sacramento_ca.jpg';
import './About.scss';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Container>
          <div className="g__row">
            <div className="g__col-6">
              <h3 className="tg__title-4 about__title">About Me</h3>
            </div>
          </div>
          <div className="g__row">
            <div className="g__col-6">
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
            <div className="g__col-4">
              <div className="about__card">
                <img
                  className="about__card__img"
                  src={profilePic}
                  alt="Armaiz Adenwala"
                />
                <h4 className="tg__title-6">Armaiz Adenwala</h4>
                <p className="tg__body-1">Sacramento, CA</p>
                <p className="tg__body-1">Github</p>
                <p className="tg__body-1">LinkedIn</p>
                <p className="tg__body-1">Gmail</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
