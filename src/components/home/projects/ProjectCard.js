import React from 'react';
import TechTags from './TechTags';
import './ProjectCard.scss';

const ProjectCard = ({ name, description, date, tags }) => (
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
    </div>
  </div>
);

export default ProjectCard;
