import React from 'react';
import { TechTags } from '../../general';
import './ProjectCard.scss';

const _renderUrl = url => {
  if (url) {
    return (
      <div
        className="
        tg__t--center
        m-t--32
      "
      >
        <a
          href={url}
          className="
            tg__button
          "
        >
          VIEW PROJECT
        </a>
      </div>
    );
  }
};

const ProjectCard = ({ name, description, date, tags, url }) => (
  <div className="project-card">
    <div className="project-card__content">
      <div className="project-card__content__title-container">
        <h5
          className="
          tg__title-6--s
          tg__title-5--m
          tg__title-5--l
          project-card__content__title-container__title
        "
        >
          {name + ' '}
          <span className="tg__subtitle-1  project-card__content__title-container__title__date">
            {`(${date})`}
          </span>
        </h5>
        <p className="tg__subtitle-1  project-card__content__title-container__subtitle">
          {description}
        </p>
      </div>
      <TechTags tags={tags} />
      {_renderUrl(url)}
    </div>
  </div>
);

export default ProjectCard;
