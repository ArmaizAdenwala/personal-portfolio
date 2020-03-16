import React from 'react';
import { Link } from 'gatsby';
import './SeriesCard.scss';

const SeriesCard = ({ name, description, url }) => (
  <Link className="tg__td--none" to={url}>
    <div className="series-card">
      <div className="series-card__content">
        <div className="series-card__content__title-container">
          <h5
            className="
          tg__title-6--s
          tg__title-6--m
          tg__title-5--l
          series-card__content__title-container__title
        "
          >
            {name + ' '}
          </h5>
          <p className="tg__subtitle  series-card__content__title-container__subtitle">
            {description}
          </p>
        </div>
      </div>
    </div>
  </Link>
);

export default SeriesCard;
