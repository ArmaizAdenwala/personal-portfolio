import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <SEO
      title="Programmable LED Rave Mask"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/led-rave-mask/"
      description="An LED rave mask using individually addressable WS2812B led light strips and an Arduino."
    />
    <Navbar
      links={['Projects']}
      customLinks={[
        {
          name: 'GITHUB',
          to: 'https://github.com/ArmaizAdenwala/led-rave-mask/',
        },
      ]}
    />
    <Hero
      emphasized="Programmable LED Rave Mask"
      description="An LED rave mask using led light strips and an Arduino"
      date="December 2018"
      tags={['C++', 'Arduino', 'WS2812B LEDS', 'FastLED']}
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
              srcDoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/pRaodK85-go?rel=0&controls=1&autoplay=1><img src=https://img.youtube.com/vi/pRaodK85-go/hqdefault.jpg alt='Smart Dorm Door Lock Demo'><span>▶</span></a>"
              src="https://www.youtube.com/embed/pRaodK85-go?rel=0&controls=1"
              frameBorder="0"
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
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
            I built an LED mask with effects inspired by the visuals seen at
            raves. The mask loops through multiple effects as seen in the demo
            video.
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
            {'The LED rave mask was built by using an '}
            <span className="tg__c--primary tg__w--500">Arduino</span>
            {' and '}
            <span className="tg__c--primary tg__w--500">WS2812B</span>
            {' light strips. The arduino was programmed in '}
            <span className="tg__c--primary tg__w--500">C++</span>
            {' and utilized the '}
            <span className="tg__c--primary tg__w--500">FastLED</span>
            {' library.'} I used the WS2812B light strips as they are
            individually addressable with the data pin.
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
            Programming the led light strips was very difficult. The leds are
            treated as one single 2d array, which means that it treats is as a
            single strip of leds instead of 11 rows of leds. My solution was to
            manually hardcode some designs into the array and have the Arduino
            loop through them.
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
            I also had to figure out how to animate the designs. My method was
            to have a function that fades from one design to the next one. This
            allowed the effects to be smoother.
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
            In the future I would like to create more complex designs instead of
            fading through designs.
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
                m-t--24
              "
          >
            I learned the importance of power efficency in order to maximize the
            number of leds I can use while still outputting colors correctly.
            This project got me to self-learn how Arduinos work and how to
            solder components together. I used what I learned from this project
            to create a{'  '}
            <Link
              className="tg__nested-link"
              to="/blog/how-to-create-a-led-rave-mask-using-arduino/"
            >
              new version of this LED mask
            </Link>
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
                m-v--8--s
              "
              >
                Check out the source code:
              </p>
              <div className="button">
                <a
                  className="button__text"
                  href="https://github.com/ArmaizAdenwala/led-rave-mask"
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
