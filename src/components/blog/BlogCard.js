import React from 'react';
import { TechTags } from '../general';
import { Link } from 'gatsby';
import './BlogCard.scss';

const BlogCard = ({ name, description, date, tags, url }) => (
  <div className="blog-card">
    <div className="blog-card__content">
      <div className="blog-card__content__title-container">
        <h5
          className="
          tg__title-6--s
          tg__title-5--m
          tg__title-5--l
          blog-card__content__title-container__title
        "
        >
          <Link className="tg__td--none tg__nested-link tg__w--500" to={url}>
            {name + ' '}
          </Link>
        </h5>
        <p className="tg__subtitle-1  blog-card__content__title-container__title__date">
          {`(${date})`}
        </p>
        <p className="tg__subtitle-1  blog-card__content__title-container__subtitle">
          {description}
        </p>
        <TechTags tags={tags || []} />
      </div>
    </div>
  </div>
);

export default BlogCard;
