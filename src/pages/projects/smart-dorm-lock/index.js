import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Smart Dorm Lock - Arduino and React Native"
      secondaryTitle="Armaiz"
      description="A mobile app used to unlock my dorm door without a physical key. Built with Arduino and React Native."
    />
    <Navbar
      customLinks={[
        {
          name: 'MEETUP',
          to:
            'https://www.meetup.com/Sacramento-ReactJS-Meetup/events/pggtznyzcbfb/',
        },
        {
          name: 'GITHUB',
          to: 'https://github.com/ArmaizAdenwala/ArduinoBluetooth',
        },
      ]}
    />
    <Hero
      emphasized="Smart Dorm Lock"
      description="A mobile app used to unlock my dorm door without a physical key"
      date="January 2019"
      tags={['React Native', 'Redux', 'C++', 'Arduino', 'IOT']}
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
            What is it?
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
              "
          >
            When I lived in the dorms at Sac State, I consistently locked myself
            out of my dorm due to the locks used for their doors. My go-to
            method was to bend some coat hangers, slide it under the door, and
            attempt to pull the handle inside my room. It wasn't successful most
            of the time. The residence halls charge $40 for each spare key
            request and I didn't want to pay for that again.
            <br />
            <br />
            So I did what any enthusiatic Computer Science student does and
            programmed a solution. I bought an Arduino, an HC-05 module, a
            soldering kit, and a strong servo and built a device to open my dorm
            door. I created an iOS/Android app that connects to the Arduino via
            bluetooth and sends a request to unlock the door.
            <br />
            <br />
            Until I finally moved out, I used the app to unlock my dorm door.
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
              "
          >
            {'The arduino bluetooth app was build with '}
            <span className="tg__c--primary tg__w--500">React Native</span>
            {' for the mobile app with '}
            <span className="tg__c--primary tg__w--500">Redux</span>
            {' for state management. An '}
            <span className="tg__c--primary tg__w--500">Arduino</span>
            {' was used to control the servo in '}
            <span className="tg__c--primary tg__w--500">C++</span>
            {'. An '}
            <span className="tg__c--primary tg__w--500">HC-05</span>
            {
              ' module was used so that the React Native app could communicate with the Arduino via bluetooth.'
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
              "
          >
            I have never worked with IOT before, so I chose something that was
            simple that was still a challenge. The first step was to learn how
            to control a servo using Arduino. Thankfully this was very
            straightforward.
            <br />
            <br />
            The biggest challenge was figuring out how an HC-05 module works. I
            soldered the module to the arduino board with a voltage divider
            based on diagrams available online. I then went to work on the React
            Native app.
            <br />
            <br />
            The React Native app is very simple: A user pushes a button and it
            sends a payload to the Arduino over bluetooth. After finding a
            reliable bluetooth node_module, I was able to connect to the Arduino
            and send data to it.
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
              "
          >
            I learned how to take an actual problem I had and apply a solution.
            Despite never working with Arduino, I managed to get a working
            prototype that I used over the course of the semester.
            <br />
            <br />
            {
              'Having never done a tech talk, I was requested to do a talk at a local meetup about how one could enter the world of '
            }
            <span className="tg__c--primary tg__w--500">IOT</span>
            {' using an '}
            <span className="tg__c--primary tg__w--500">Arduino</span>
            {' and '}
            <span className="tg__c--primary tg__w--500">React Native</span>
            <br />
            <br />
            {'You can view the meetup post '}
            <a
              className="tg__nested-link"
              href="https://www.meetup.com/Sacramento-ReactJS-Meetup/events/pggtznyzcbfb/"
            >
              here
            </a>
            .
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
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8--s
              "
              >
                Check out the source code:
              </p>
              <div className="button">
                <a
                  className="button__text"
                  href="https://github.com/ArmaizAdenwala/ArduinoBluetooth"
                >
                  VIEW ON GITHUB
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
