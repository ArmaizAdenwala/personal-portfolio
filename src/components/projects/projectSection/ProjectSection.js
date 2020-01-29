import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './ProjectSection.scss';

export default class ProjectSection extends Component {
  render() {
    return (
      <div className="experience">
        <Container>
          <h3
            className="
            tg__title-5--s
            tg__title-4--m
            tg__title-4--l
            tg__t--center--s
            tg__c--primary
            tg__w--700
          "
          >
            Manage Roommates
          </h3>
          <div className="g__row">
          <div className="g__col-7">
            <p className="
              tg__title-5
              tg__lh--1-75
            ">
            
              App designed for roommates to have automated chore schedules on a week by week basis. App designed for roommates to have automated chore schedules on a week by week basis.
            </p>
          </div>
          <div class_name="g__col-4">
          </div>
          </div>
        </Container>
      </div>
    );
  }
}
