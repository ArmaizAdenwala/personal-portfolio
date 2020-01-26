import React from 'react';
import profilePic from '../../../images/armaiz_adenwala_software_engineer_sacramento_ca.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ProfileCard.scss';

const ProfileCard = () => (
  <div className="profile-card">
    <div className="profile-card__img" src={profilePic} alt="Armaiz Adenwala" />
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
          href="https://www.google.com/"
        >
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
        <a
          className="profile-card__content__social__link"
          href="https://www.google.com/"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </div>
    </div>
  </div>
);

export default ProfileCard;
