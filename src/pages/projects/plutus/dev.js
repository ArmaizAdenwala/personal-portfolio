import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Plutus - Material Design Phonegap App"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/plutus/dev/"
      description="Developer details for the Plutus prototype app."
    />
    <Navbar links={['Projects', 'Plutus']} />
    <Hero
      emphasized="Plutus"
      description="Developer Details"
      date="November 2015"
      tags={['HTML', 'CSS', 'Javscript', 'Phonegap', 'Material Design']}
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
            Why was this built?
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
            When I was attending Granite Bay High School, I was in a class
            called GBiT. It was a class for students interested in tech to grow
            their knowledge in it. There were multiple groups in that class, one
            of which was the CS group that I was a part of.
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
            I knew I wanted to do something in computer science, I just didn't
            know what I exactly wanted to do in that field. I tried making
            videogames in Lua, C++, and in Java but it wasn't something I
            excelled at or wanted to do in the future.
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
            Eventually, I got into web development and enjoyed it. I wasn't good
            at it, but I was learning. Soon I wanted to try iOS and Android
            development. Unfortunately that was a big task to accomplish at the
            time, so I stuck with designing a prototype mobile app in HTML, CSS,
            and Javascript.
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
            This project was later presented to the class as part of our final
            project for the semester.
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
            {'Plutus was build with '}
            <span className="tg__c--primary tg__w--500">HTML</span>
            {', '}
            <span className="tg__c--primary tg__w--500">CSS</span>
            {', and '}
            <span className="tg__c--primary tg__w--500">Javascript</span>
            {' for the frontend. It uses '}
            <span className="tg__c--primary tg__w--500">Materialize</span>
            {' for the ui framework and '}
            <span className="tg__c--primary tg__w--500">Animate.css</span>
            {
              ' for the animations. Plutus is packaged as an iOS and Android app by using '
            }
            <span className="tg__c--primary tg__w--500">Phonegap</span>
            {'.'}
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
            This was one of the first projects I made while learning html and
            css, so I had difficulty learning how to implement ui frameworks and
            javascript libraries.
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
            This project was a key stepping stone for me to pursue web
            development and eventually mobile app development. Looking back at
            this project from 5 years ago to today in 2020, I realized how far I
            have come and how important it is to pay attention to detail. Being
            able to feel confident in web development is what pushed me to keep
            learning.
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
                  href="https://github.com/ArmaizAdenwala/plutus"
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
