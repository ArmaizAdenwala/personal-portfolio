import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './ProjectSection.scss';

export default class ProjectSection extends Component {
  render() {
    return (
      <div className="project-section">
        <Container>
          <div className="g__row">
            <div className="g__col-7">
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
                {this.props.title}
              </h3>
              <p
                className="
              tg__title-5
              tg__lh--1-75
            "
              >
                {this.props.description}
              </p>
            </div>
            <div className="g__col-5">
              <img className="project-section__img" src={this.props.src} />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
