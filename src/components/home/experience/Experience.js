import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './Experience.scss';

export default class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <Container>
          <h3 className="tg__title-4 experience__title tg__c--primary">
            Here's where I've worked at
          </h3>
          <div className="experience__card">
            <h5 className="tg__title-5 tg__c--primary experience__card__title">
              FullStack Labs, Sacramento, CA
            </h5>
            <h6 className="tg__title-6 experience__card__subtitle">
              Software Engineer (January 2016 - Present)
            </h6>
            <ul className="experience__card__details">
              <li className="tg__body-1">
                Hired as one of the first employees to a very successful
                international software development consultancy
              </li>
              <li className="tg__body-1">
                Created web apps, mobile apps, and desktop apps to create pixel
                perfect designs to match prototypes created by the design team
              </li>
              <li className="tg__body-1">
                Quickly picked up projects with unfamiliar technologies by
                self-learning new languages, frameworks, and APIs to implement
                new features based on clients’ needs
              </li>
              <li className="tg__body-1">
                Created estimates, planned Agile Sprints, communicated directly
                with clients, and review other developers’ pull requests
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }
}
