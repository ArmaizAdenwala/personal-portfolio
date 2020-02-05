import React from 'react';
import { TechTags } from '../general';
import { Link } from 'gatsby';
import './BlogCard.scss';

const _renderUrl = url => {
  if (url) {
    return (
      <div
        className="
        tg__t--center 
        m-t--32
      "
      >
        <Link
          to={url}
          className="
            tg__button
          "
        >
          VIEW POST
        </Link>
      </div>
    );
  }
};

const BlogCard = ({ name, description, date, tags, url }) => (
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
        </h5>
        <p className="tg__subtitle-1  project-card__content__title-container__title__date">
          {`(${date})`}
        </p>
        <p className="tg__subtitle-1  project-card__content__title-container__subtitle">
          {description}
        </p>
      </div>
      {_renderUrl(url)}
    </div>
  </div>
);

export default BlogCard;
