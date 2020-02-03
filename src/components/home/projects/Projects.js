import React, { Component } from 'react';
import { Container } from '../../../components/general';
import ProjectCard from './ProjectCard';
import './Projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <div>
        <div className="projects">
          <Container>
            <h3
              className="
            tg__title-5--s
            tg__title-4--m
            tg__title-4--l
            tg__t--center--s
            projects__title
          "
            >
              Here are some of my projects
            </h3>
            <ProjectCard
              name="PlanSpace - HackDavis"
              description="App designed for roommates to have automated chore schedules on a week by week basis."
              date="January 2020"
              url="/projects/planspace"
              tags={[
                'React Native',
                'Redux',
                'Ruby on Rails',
                'PostgreSQL',
                'Node.js',
                'socket-io',
              ]}
            />
            <ProjectCard
              name="Personal Portfolio Website"
              description="A website to showcase my projects."
              date="January 2020"
              tags={['Gatsby', 'React.js', 'Heroku', 'SASS', 'SEO']}
              url="/projects/personal-portfolio-site"
            />
            <ProjectCard
              name="Smart Dorm Lock"
              description="A mobile app used to unlock my dorm door without a physical key."
              date="January 2019"
              tags={['React Native', 'Redux', 'C++', 'Arduino', 'IOT']}
              url="/projects/smart-dorm-lock"
            />
            <ProjectCard
              name="Programmable LED Rave Mask"
              description="A LED rave mask using individually addressable WS2812B led light strips and an Arduino"
              date="December 2018"
              tags={['C++', 'Arduino', 'WS2812B LEDS', 'FastLED']}
              url="/projects/led-rave-mask"
            />
            <ProjectCard
              name="Plutus"
              description="A prototype shopping app for my highschool class"
              date="November 2015"
              tags={['HTML', 'CSS', 'Javscript', 'Phonegap', 'Material Design']}
              url="/projects/plutus"
            />
          </Container>
        </div>
        <div className="page__section">
          <Container>
            <div className="flex--h-center">
              <div className="tg__t--center">
                <p
                  className="
                tg__title-6--s
                tg__title-5--m
                tg__title-5--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8--s"
                >
                  Check out all of my projects!
                </p>
                <div className="button">
                  <a className="button__text" href="/projects/">
                    VIEW ALL PROJECTS
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
