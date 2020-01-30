import React, { Component } from 'react';
import { Container } from '../../../components/general';
import TechTags from '../../home/projects/TechTags';
import './Hero.scss';

export default class Hero extends Component {
  _renderTags() {
    if (this.props.tags) {
      return (
        <div
          className="
          m-t--16
          tg__t--left--l
        "
        >
          <TechTags tags={this.props.tags} />
        </div>
      );
    }
  }

  render() {
    return (
      <div className="hero">
        <Container>
          <div className="hero__content">
            <h1
              className="
              tg__title-4--s
              tg__title-3--m
              tg__title-2--l
              hero__content__title
              "
            >
              {this.props.title}
              <span className="tg__c--primary tg__w--400">
                {this.props.emphasized}
              </span>
            </h1>
            <h2
              className="
              tg__title-4--l
              tg__title-5--m
              tg__title-6--s
              hero__content__subtitle
            "
            >
              {this.props.description}
            </h2>
            {this._renderTags()}
          </div>
        </Container>
      </div>
    );
  }
}
