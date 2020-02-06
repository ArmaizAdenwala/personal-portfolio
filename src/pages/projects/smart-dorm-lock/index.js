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
      canonical="https://armaizadenwala.com/projects/smart-dorm-lock/"
      description="A mobile app used to unlock my dorm door without a physical key. Built with Arduino and React Native."
    />
    <Navbar
      links={['Projects']}
      customLinks={[
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
                m-v--8"
          >
            Video Demo
          </h3>
          <div className="video-container">
            <iframe
              width="400"
              height="300"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/HcZT8bCcFyw?rel=0&controls=1&autoplay=1><img src=https://img.youtube.com/vi/HcZT8bCcFyw/hqdefault.jpg alt='Smart Dorm Door Lock Demo'><span>▶</span></a>"
              src="https://www.youtube.com/embed/HcZT8bCcFyw?rel=0&controls=1"
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
                m-t--64"
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
                m-t--24"
          >
            When I lived in the dorms at Sac State, I consistently locked myself
            out of my dorm due to the locks used for their doors. My go-to
            method was to bend some coat hangers, slide it under the door, and
            attempt to pull the handle inside my room. It wasn't successful most
            of the time. The residence halls charge $40 for each spare key
            request and I didn't want to pay for that again.
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
            So I did what any enthusiatic Computer Science student does and
            programmed a solution. I bought an Arduino, an HC-05 module, a
            soldering kit, and a strong servo and built a device to open my dorm
            door. I created an iOS/Android app that connects to the Arduino via
            bluetooth and sends a request to unlock the door.
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
                m-t--64"
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
            {'The arduino bluetooth app was built with '}
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
                m-t--64"
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
            I have only worked with IOT once before this, so I chose something
            that was simple that was still a challenge. The first step was to
            learn how to control a servo using Arduino. Thankfully this was very
            straightforward.
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
            The biggest challenge was figuring out how an HC-05 module works. I
            soldered the module to the arduino board with a voltage divider
            based on diagrams available online. I then went to work on the React
            Native app.
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
            I learned how to take an actual problem I had and apply a solution.
            Despite only having a small amount of experience with Arduino, I
            managed to get a working prototype that I used over the course of
            the semester.
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
              'Having never done a tech talk, I was requested to do a talk at a local meetup about how one could enter the world of '
            }
            <span className="tg__c--primary tg__w--500">IOT</span>
            {' using an '}
            <span className="tg__c--primary tg__w--500">Arduino</span>
            {' and '}
            <span className="tg__c--primary tg__w--500">React Native</span>
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
      <Footer />
    </div>
  </div>
);

export default IndexPage;
