import React from 'react';
import { TechTags } from '../general';
import { Link } from 'gatsby';
import './BlogCard.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const BlogCard = ({
  name,
  description,
  date,
  tags,
  url,
  img,
  alt,
  placeholder,
  color,
}) => (
  <Link className="tg__td--none" to={url}>
    <div className="blog-card">
      <div className="blog-card__content">
        <div
          style={{ background: color }}
          className="blog-card__content__img-background"
        >
          <LazyLoadImage
            className="blog-card__content__img"
            src={img}
            alt={alt}
            delayTime={0}
            effect="blur"
            wrapperClassName="blog-card__content__img-wrapper"
            placeholderSrc={placeholder}
          />
        </div>
        <div className="blog-card__content__title-container">
          <h5
            className="
          tg__title-6--s
          tg__title-5--m
          tg__title-5--l
          blog-card__content__title-container__title
          tg__td--none
          tg__nested-link
          tg__w--500
        "
          >
            {name + ' '}
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
  </Link>
);

export default BlogCard;
