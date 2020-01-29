import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './ProjectSection.scss';

export default class ProjectSection extends Component {
  _getDirection = () =>
    this.props.flip ? 'flex--row-reverse--m flex--row-reverse--l' : '';
  render() {
    return (
      <div className="project-section">
        <Container>
          <div className={`g__row ${this._getDirection()}`}>
            <div className="g__col-5">
              <img className="project-section__img" src={this.props.src} />
            </div>
            <div className="g__col-7 flex--v-center">
              <h3
                className="
                  tg__title-5--s
                  tg__title-4--m
                  tg__title-4--l
                  tg__t--center--s
                  tg__c--primary
                  tg__w--700
                  m-v--8
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
          </div>
        </Container>
      </div>
    );
  }
}
