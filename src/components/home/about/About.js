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
            <div
              className="
              g__col-12--s
              g__col-6--m
              g__col-5--l
            "
            >
              <ProfileCard />
            </div>
            <div
              className="
              g__col-12--s
              g__col-6--m
              g__col-7--l
              about__content
            "
            >
              <h3
                className="
                tg__title-5--s
                tg__title-4--m
                tg__title-4--l
                tg__t--center--s
                about__content__title
              "
              >
                Who am I?
              </h3>
              <p className="tg__title-6 about__content__bio">
                Hello! I'm Armaiz, a Software Engineer based in{' '}
                <span className="about__content__bio--emphasis">
                  Sacramento, CA
                </span>{' '}
                who's experienced in taking fullstack apps to production from
                scratch.
                <br />
                <br />
                I've had the oppurtunity to develop for over{' '}
                <span className="about__content__bio--emphasis">
                  5 awesome companies / clients
                </span>{' '}
                as a consultant. My work included mobile apps, web apps, backend
                servers, devops, and desktop apps.
              </p>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
