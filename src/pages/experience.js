import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  TechTags,
} from '../components/general';
import { Link } from 'gatsby';
import '../styles/main.scss';
import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="My Work Experience"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/experience/"
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
                {'Created estimates, planned '}
                <span className="tg__c--primary tg__w--700">SCRUM</span>
                {
                  ' Sprints, communicated directly with clients, and review other developers’ pull requests'
                }
              </li>
              <li className="tg__body-1">
                {'Developed and deployed iOS and Android apps with '}
                <span className="tg__c--primary tg__w--700">React Native</span>
                {
                  ' while following code practices focused on readability, modularity, and efficiency'
                }
              </li>
              <li className="tg__body-1">
                {'Maintained a '}
                <span className="tg__c--primary tg__w--700">React Native</span>
                {' chat application using socket.io and Node.js'}
              </li>
              <li className="tg__body-1">
                {'Optimized a legacy HIPAA compliant '}
                <span className="tg__c--primary tg__w--700">Django</span>
                {' web app and refactored inefficent '}{' '}
                <span className="tg__c--primary tg__w--700">Salesforce</span>{' '}
                {' report generation speeds by 99%'}
              </li>
              <li className="tg__body-1">
                {'Implemented '}
                <span className="tg__c--primary tg__w--700">SEO</span>
                {
                  ' practices for company’s website to help raise Google page ranks to top 5 for numerous keywords'
                }
              </li>
              <li className="tg__body-1">
                {'Maintained '}
                <span className="tg__c--primary tg__w--700">AWS RDS</span>
                {' instances (beginner),'}
                <span className="tg__c--primary tg__w--700">
                  AWS Elastic Beanstalk
                </span>
                {' instances (beginner), '}
                <span className="tg__c--primary tg__w--700">AWS EC2</span>
                {' instances (beginner), '}
                <span className="tg__c--primary tg__w--700">Heroku</span>
                {' servers, and '}
                <span className="tg__c--primary tg__w--700">Digital Ocean</span>
                {' droplets'}
              </li>
              <li className="tg__body-1">
                Created software development blog posts for the company blog
                centered around technologies I use on a day to day basis.
              </li>
            </ul>
            <div className="m-t--32">
              <TechTags
                tags={[
                  'React Native',
                  'React',
                  'Redux',
                  'Javascript',
                  'Node.js',
                  'Socket-io',
                  'Middleman',
                  'Rails',
                  'Ruby',
                  'PostgreSQL',
                  'Python',
                  'Django',
                  'Salesforce Apex (Beginner)',
                  'Firebase',
                  'AWS (Beginner)',
                  'Nginx',
                  'Heroku',
                  'Digital Ocean',
                  'SEO',
                  'HTML',
                  'CSS',
                  'SASS',
                  'Wordpress',
                  'Shopify Liquid (Beginner)',
                  'Linux',
                  'SCRUM',
                  'Agile',
                ]}
              />
            </div>
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
