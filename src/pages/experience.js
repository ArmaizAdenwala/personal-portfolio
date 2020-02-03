import React from 'react';
import { Hero, Navbar, Footer, Container } from '../components/general';
import { Link } from 'gatsby';
import '../styles/main.scss';
import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="My Work Experience"
      secondaryTitle="Armaiz"
      description="Detailed information on my work history."
    />
    <Navbar
      customLinks={[
        {
          name: 'GITHUB',
          to: 'https://github.com/ArmaizAdenwala/',
        },
      ]}
    />
    <Hero
      emphasized="My Work Experience"
      description="Detailed information on my work history"
    />
    <div className="page__content">
      <div className="p-v--32">
        <Container>
          <div className="experience__card">
            <h5 className="tg__title-5 experience__card__title tg__c--primary">
              FullStack Labs, Sacramento, CA
            </h5>
            <h6 className="tg__title-6 experience__card__subtitle">
              Software Engineer (January 2016 - Present)
            </h6>
            <ul className="experience__card__details">
              <li className="tg__body-1">
                Hired as one of the first employees to a very successful
                software development consultancy
              </li>
              <li className="tg__body-1">
                Created web apps, mobile apps, and desktop apps to create pixel
                perfect designs to match prototypes created by the design team
              </li>
              <li className="tg__body-1">
                Quickly picked up projects with unfamiliar technologies by
                self-learning new languages, frameworks, and APIs to implement
                new features based on clients’ needs
              </li>
              <li className="tg__body-1">
                Created estimates, planned Agile Sprints, communicated directly
                with clients, and review other developers’ pull requests
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="page__section">
        <Container>
          <div className="flex--h-center">
            <div className="tg__t--center">
              <p
                className="
                tg__title-6--s
                tg__title-5--m
                tg__title-5--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8--s"
              >
                Check out my projects:
              </p>
              <div className="button">
                <Link className="button__text" to="/projects/">
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
