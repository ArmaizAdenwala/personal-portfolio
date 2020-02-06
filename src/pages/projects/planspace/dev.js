import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="PlanSpace - React Native and Ruby on Rails App"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/planspace/dev/"
      description="Developer details for the PlanSpace React Native app."
    />
    <Navbar links={['Projects', 'PlanSpace']} />
    <Hero
      emphasized="PlanSpace"
      description="Developer Details"
      date="January 2020"
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
                m-v--8"
          >
            Video Demo
          </h3>
          <div className="video-container">
            <iframe
              width="400"
              height="300"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/79XiYeptc7g?rel=0&controls=1&autoplay=1><img src=https://img.youtube.com/vi/79XiYeptc7g/hqdefault.jpg alt='PlanSpace Demo'><span>▶</span></a>"
              src="https://www.youtube.com/embed/79XiYeptc7g?rel=0&controls=1"
              frameborder="0"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
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
            What was this built with?
          </h3>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
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
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
          >
            {
              'This app was built from scratch at HackDavis 2020 within 24 hours. I created the React Native app with a future web app in mind so that I can reuse as much of the codebase as possible for a React.js web app.'
            }
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
          >
            {
              ' Ruby on Rails allowed me to quickly create a REST API with fully working authentication using '
            }
            <span className="tg__c--primary tg__w--500">Devise.</span>
            {' Using '}
            <span className="tg__c--primary tg__w--500">
              Active Model Serializer
            </span>
            {
              ' I was able to keep the API responses small so that loading states are rare.'
            }
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
          >
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
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
          >
            Since this project was made at a hackathon, the biggest challenge
            was creating a functional app within the 24 hours. I went to the
            hackathon solo, so I decided to stay up the whole 24 hours to see
            how far I could get. Unfortunately I was not able to get that far
            with the automation part of the app. The app does automatically
            create the next task and assigns chores to roommates who haven't
            been putting in their fair share of work.
            <br />
            <br />
            The app was also designed to be quick to use. Figuring out good UX
            to achieve that goal was difficult. Lazyloading data using redux
            improved the quality feel of the app. Rarely would a user see
            loading states.
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
                m-t--64"
          >
            What did I learn?
          </h3>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24"
          >
            I learned how to completely setup a nearly production ready
            fullstack app from scratch. It allowed me to fine tune my skills in
            fullstack development and figure out what I need to focus on
            learning next.
          </p>
        </div>
      </Container>
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
                Learn more about PlanSpace:
              </p>
              <div className="button">
                <a className="button__text" href="/projects/planspace/">
                  VIEW PROJECT DETAILS
                </a>
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
