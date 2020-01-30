import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import './Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="PlanSpace"
      description="PlanSpace is designed for roommates to have automated chore schedules on a week by week basis."
    />
    <Navbar links={['Home']} />
    <Hero
      emphasized="PlanSpace"
      description="Developer Write Up"
      tags={[
        'React Native',
        'Redux',
        'Ruby on Rails',
        'PostgreSQL',
        'Node.js',
        'socket-io',
      ]}
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <h3
            className="
                tg__title-5--s
                tg__title-4--m
                tg__title-4--l
                tg__t--center--s
                tg__c--primary
                tg__w--700
                m-v--8
              "
          >
            What was this built with?
          </h3>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-75
                m-v--8
              "
          >
            {'PlanSpace was build with '}
            <span className="tg__c--primary tg__w--500">React Native</span>
            {' for the frontend, '}
            <span className="tg__c--primary tg__w--500">Ruby on Rails</span>
            {' for the backend, '}
            <span className="tg__c--primary tg__w--500">Node.js</span>
            {' for the '}
            <span className="tg__c--primary tg__w--500">Socket.io</span>
            {' server, and '}
            <span className="tg__c--primary tg__w--500">PostgreSQL</span>
            {' for the database.'}
            <br />
            <br />
            {
              'This app was built from scratch at HackDavis 2020 within 24 hours. I created the React Native app with a future web app in mind so that I can reuse as much of the codebase as possible for a React.js web app.'
            }
            <br />
            <br />
            {
              ' Ruby on Rails allowed me to quickly create a REST api with fully working authentication using '
            }
            <span className="tg__c--primary tg__w--500">Devise.</span>
            <br />
            <br />
            {
              'The Node.js server is a simple Socket.io server that emits redux actions to be dispatched. Using this server, users can see real-time updates for their task list.'
            }
          </p>
          <h3
            className="
                tg__title-5--s
                tg__title-4--m
                tg__title-4--l
                tg__t--center--s
                tg__c--primary
                tg__w--700
                m-v--8
                m-t--64
              "
          >
            What were the biggest challenges?
          </h3>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-75
                m-v--8
              "
          >
            Learn more about how this React Native app was built:
          </p>
          <h3
            className="
                tg__title-5--s
                tg__title-4--m
                tg__title-4--l
                tg__t--center--s
                tg__c--primary
                tg__w--700
                m-v--8
                m-t--64
              "
          >
            What is next for PlanSpace?
          </h3>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-75
                m-v--8
              "
          >
            Learn more about how this React Native app was built:
          </p>
        </div>
      </Container>
      <div className="project__section">
        <Container>
          <div className="flex--h-center">
            <div className="tg__t--center">
              <p
                className="
                tg__title-6--s
                tg__title-5--m
                tg__title-5--l
                tg__lh--1-75
                m-v--8--s
              "
              >
                Learn more about how this React Native app was built:
              </p>
              <div className="button">
                <a className="button__text" href="/projects/planspace/dev">
                  VIEW DEVELOPER WRITE-UP
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
);

export default IndexPage;
