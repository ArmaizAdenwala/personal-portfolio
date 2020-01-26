import React, { Component } from 'react';
import { Container } from '../../../components/general';
import PlanspaceImg from './images/planspace_react_native_ruby_on_rails_app.jpg';
import TechTags from './TechTags';
import './Projects.scss';

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Container>
          <h3 className="tg__title-4 projects__title">
            Here are some projects I've worked on
          </h3>
          <div className="projects__card">
            <img src={PlanspaceImg} className="projects__card__img" />
            <div className="projects__card__content">
              <h5 className="tg__title-4 projects__card__content__title">
                PlanSpace
              </h5>
              <p className="tg__subtitle-1  projects__card__content__date">
                January 2020
              </p>
              <TechTags
                tags={[
                  'React Native',
                  'Redux',
                  'Ruby on Rails',
                  'PostgreSQL',
                  'Node.js',
                  'socket-io',
                ]}
              />
              <ul className="projects__card__content__list">
                <li className="tg__subtitle  projects__card__content__list__subtitle">
                  Automated chore schedules on a week by week basis
                </li>
                <li className="tg__subtitle  projects__card__content__list__subtitle">
                  Normalizes chore assignments overtime so that roommates who
                  did extra chores would have to do less over time.
                </li>
                <li className="tg__subtitle  projects__card__content__list__subtitle">
                  Focused on seamless UX by using loading states, lazy loading
                  data, caching, and pagination.
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
