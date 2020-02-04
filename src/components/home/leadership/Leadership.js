import React, { Component } from 'react';
import { Container } from '../../../components/general';
import './Leadership.scss';

export default class Leadership extends Component {
  render() {
    return (
      <div>
        <div className="leadership">
          <Container>
            <h3
              className="
            tg__title-5--s
            tg__title-4--m
            tg__title-4--l
            tg__t--center--s
            leadership__title
          "
            >
              Leadership Positions
            </h3>
            <div className="leadership__card">
              <h5 className="tg__title-5 leadership__card__title tg__c--primary">
                President of Hammock Club
              </h5>
              <h6 className="tg__title-6 leadership__card__subtitle">
                (January 2019 - January 2020)
              </h6>
              <ul className="leadership__card__details">
                <li className="tg__body-1">
                  Established the foundation for club by implementing an
                  official set of tasks and responsibilities for each officer in
                  the club's bylaws
                </li>
                <li className="tg__body-1">
                  One of the most talked about clubs at Sac State that is
                  recommended during Freshmen orientation as a club to join
                </li>
                <li className="tg__body-1">
                  Managed 4 talented and determined officers to ensure that work
                  was getting done
                </li>
                <li className="tg__body-1">
                  Marketed the club successfully, resulting in a record number
                  of members at general meetings and trips
                </li>
                <li className="tg__body-1">
                  Worked with the Vice President to plan out trips for over 25
                  people each trip
                </li>
                <li className="tg__body-1">
                  Worked with the Treasurer to plan out funding for trips,
                  hammocks, t-shirts, and stickers
                </li>
                <li className="tg__body-1">
                  Worked with the Secretary to have emails sent out to over 600
                  subscribed members
                </li>
                <li className="tg__body-1">
                  Involved new members to ensure they are all included in
                  conversations and have the opportunity to make friends.
                </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
