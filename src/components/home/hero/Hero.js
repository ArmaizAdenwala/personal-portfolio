import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './Hero.scss';

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Container>
          <div className="hero__content">
            <h1
              className="
              tg__title-2
              hero__content__title
              "
            >
              {"Hi, I'm "}
              <span className="tg__c--primary tg__w--400">Armaiz Adenwala</span>
            </h1>
            <h2 className="tg__title-4 hero__content__subtitle">
              I'm a Software Engineer that welcomes challenges and provide
              solutions.
            </h2>
          </div>
        </Container>
      </div>
    );
  }
}
