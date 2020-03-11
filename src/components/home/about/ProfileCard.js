import React from 'react';
import profilePic from './images/armaiz_adenwala_software_engineer_sacramento_ca.jpg';
import profilePicBlur from './images/armaiz_adenwala_software_engineer_sacramento_ca_blur.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileCard.scss';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => (
  <div className="profile-card">
    <LazyLoadImage
      className="profile-card__img"
      wrapperClassName="profile-card__img"
      alt="Armaiz Adenwala, Software Engineer Based In Sacramento, CA and San Francisco, CA"
      src={profilePic}
      delayTime={0}
      effect="blur"
      placeholderSrc={profilePicBlur}
    />
    <div className="profile-card__content">
      <h4 className="tg__title-6 profile-card__content__title">
        Armaiz Adenwala
      </h4>
      <p className="tg__body-1 profile-card__content__email">
        armaiz.adenwala@gmail.com
      </p>
      <div className="profile-card__content__social">
        <a
          className="profile-card__content__social__link"
          href="https://www.linkedin.com/in/armaizadenwala/"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          className="profile-card__content__social__link"
          href="https://github.com/ArmaizAdenwala"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </div>
);

export default ProfileCard;
