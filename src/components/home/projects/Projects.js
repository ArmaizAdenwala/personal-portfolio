import React, { Component } from 'react';
import { Container } from '../../../components/general';
import ProjectCard from './ProjectCard';
import './Projects.scss';

export default class Projects extends Component {
  render() {
    return (
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
            name="PlanSpace"
            description="App designed for roommates to have automated chore schedules on a week by week basis."
            date="January 2020"
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
            tags={['Gatsby', 'React.js', 'Heroku', 'SEO', 'Adobe Illustrator']}
          />
          <ProjectCard
            name="Reacto Meetup Speaker"
            description='"Building a React Native App that Communicates with Arduino"'
            date="January 2019"
            tags={[
              'React Native',
              'Redux',
              'C++',
              'Arduino',
              'HC-05 BT Module',
            ]}
          />
          <ProjectCard
            name="Programmable LED Mask"
            description="Built an LED mask using individually addressable lightstrips and an Arduino"
            date="January 2019"
            tags={['C++', 'Arduino', 'WS2812B LEDS']}
          />
        </Container>
      </div>
    );
  }
}
