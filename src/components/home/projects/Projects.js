import React, { Component } from 'react';
import { Container } from '../../../components/general';
import ProjectCard from './ProjectCard';
import { Link } from 'gatsby';
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
              Here are my favorite projects
            </h3>
            <ProjectCard
              name="PlanSpace - HackDavis"
              description="App designed for roommates to have automated chore schedules on a week by week basis."
              date="January 2020"
              url="/projects/planspace/"
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
              name="Smart Dorm Lock"
              description="A mobile app used to unlock my dorm door without a physical key."
              date="January 2019"
              tags={['React Native', 'Redux', 'C++', 'Arduino', 'IOT']}
              url="/projects/smart-dorm-lock/"
            />
            <ProjectCard
              name="Programmable LED Rave Mask"
              description="An LED rave mask using individually addressable WS2812B led light strips and an Arduino"
              date="December 2018"
              tags={['C++', 'Arduino', 'WS2812B LEDS', 'FastLED']}
              url="/projects/led-rave-mask/"
            />
          </Container>
          <div className="m-t--32 tg__t--center">
            <div className="button">
              <Link className="button__text" to="/projects/">
                VIEW ALL PROJECTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
