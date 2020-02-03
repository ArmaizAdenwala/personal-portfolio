import React, { Component } from 'react';
import { Container, TechTags } from '../../../components/general';
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

  _renderTitle() {
    if (this.props.extraContent) {
      return (
        <h1
          className="
              tg__title-5--s
              tg__title-4--m
              tg__title-3--l
              hero__content__title
              "
        >
          {this.props.title}
          <span className="tg__c--primary tg__w--400">
            {this.props.emphasized}
          </span>
        </h1>
      );
    }
    return (
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
    );
  }
  _renderDate() {
    if (this.props.date && !this.props.extraContent) {
      return (
        <h3
          className="
              tg__body-1--s
              tg__title-6--m
              tg__title-6--l
              hero__content__date
              "
        >
          {this.props.date}
        </h3>
      );
    }
  }
  _renderExtraContentDate() {
    if (this.props.date && this.props.extraContent) {
      return (
        <h3
          className="
              tg__body-1--s
              tg__title-6--m
              tg__title-6--l
              hero__content__date--extra
              "
        >
          {this.props.date}
        </h3>
      );
    }
  }

  _renderDescription() {
    if (this.props.extraContent) {
      return (
        <h2
          className="
              tg__title-5--l
              tg__title-6--m
              tg__subtitle--s
              hero__content__subtitle
            "
        >
          {this.props.description}
        </h2>
      );
    }
    return (
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
    );
  }

  render() {
    return (
      <div className="hero">
        <Container>
          <div className="hero__content">
            {this._renderTitle()}
            {this._renderDate()}
            {this._renderDescription()}
            {this._renderExtraContentDate()}
            {this._renderTags()}
          </div>
        </Container>
      </div>
    );
  }
}
