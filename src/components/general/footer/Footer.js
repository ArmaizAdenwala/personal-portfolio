import React, { Component } from 'react';
import './Footer.scss';
import { Link } from 'gatsby';
import { Container } from '../';
export default class Footer extends Component {
  render() {
    return (
      <div className="footer p-v--32">
        <Container>
          <div className="g__row">
            <div
              className="
                tg__t--center--s
                g__col-12--s
                g__col-4--m
                g__col-4--l
                m-b--32--s"
            >
              <h4 className="m-v--8">Contact</h4>
              <a
                className="footer__link footer__link--center tg__c--primary--dark tg__c--secondary"
                href={'mailto:armaiz.adenwala@gmail.com'}
              >
                Email
              </a>
              <a
                className="footer__link footer__link--center tg__c--primary--dark tg__c--secondary"
                href={'https://www.linkedin.com/in/armaizadenwala/'}
              >
                LinkedIn
              </a>
              <a
                className="footer__link footer__link--center tg__c--primary--dark tg__c--secondary"
                href={'https://github.com/ArmaizAdenwala'}
              >
                Github
              </a>
            </div>
            <div
              className="
                g__col-6--s
                g__col-4--m
                g__col-4--l"
            >
              <h4 className="m-v--8">General</h4>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'/'}
              >
                Home
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'/projects/'}
              >
                Projects
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'/experience/'}
              >
                Experience
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'/blog/'}
              >
                Blog
              </Link>
            </div>
            <div
              className="
                g__col-6--s
                g__col-4--m
                g__col-4--l"
            >
              <h4 className="m-v--8">Projects</h4>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'/projects/planspace/'}
              >
                PlanSpace
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'projects/personal-portfolio-site/'}
              >
                Personal Portfolio
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'projects/smart-dorm-lock/'}
              >
                Smart Dorm Lock
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'projects/led-rave-mask/'}
              >
                LED Rave Mask
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'projects/plutus/'}
              >
                Plutus
              </Link>
              <Link
                className="footer__link tg__c--primary--dark tg__c--secondary"
                to={'projects/spacegrab/'}
              >
                SpaceGrab
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}
