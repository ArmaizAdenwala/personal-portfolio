import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="SpaceGrab - Java Game"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/spacegrab/"
      description="A simple Java game made from scratch in 2014."
    />
    <Navbar
      links={['Projects']}
      customLinks={[
        {
          name: 'GITHUB',
          to: 'https://github.com/ArmaizAdenwala/SpaceGrab',
        },
      ]}
    />
    <Hero
      emphasized="SpaceGrab"
      description="A simple Java game made from scratch in 2014"
      date="October 2014"
      tags={['Java', 'Java AWT', 'Java Swing']}
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
                m-t--24"
          >
            Video Demo
          </h3>
          <div className="video-container">
            <iframe
              width="400"
              height="300"
              srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/NwJG39aYvww?rel=0&controls=1&autoplay=1><img src=https://img.youtube.com/vi/NwJG39aYvww/hqdefault.jpg alt='Smart Dorm Door Lock Demo'><span>▶</span></a>"
              src="https://www.youtube.com/embed/NwJG39aYvww?rel=0&controls=1"
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
            It is a Java game that I made from scratch in sophomore year of
            highschool. The goal is to evade the red dots (enemies) and aquire
            the yellow dots (tokens). You can collect the blue dot as a powerup
            to have the enemies fly away from you. You control your green dot
            with your mouse and the enemies will disappear once they collide
            with each other. Each time you get a token, your dot grows, but you
            shrink if you get hit by an enemy.
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
            {'SpaceGrab was built with '}
            <span className="tg__c--primary tg__w--500">Java</span>
            {' and utilized both the '}
            <span className="tg__c--primary tg__w--500">Java AWT</span>
            {' package and the '}
            <span className="tg__c--primary tg__w--500">Java Swing</span>
            {' package for drawing the ui.'}
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
            This was the first playable game I made in Java so I was faced with
            many challenges. The biggest one was drawing the ui for the
            application which I used Java AWT to accomplish.
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
            I recall spending weeks trying to figure out how pathfinding worked
            and eventually decided on just having the enemies go directly in a
            straight direction. My goal was to do a simple implementation and
            implement pathfinding in the future.
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
            Back then I had no idea that you could create classes for enemies,
            powerups, and tokens. If I knew back then, this would've been far
            less complicated and the code would've looked much cleaner.
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
            Fortunately, I did learn an immense amount from this project.
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
            I learned to not worry so much about accomplishing everything
            (pathfinding, obstacles, etc.), and just focus on accomplishing one
            challenge / feature at a time. I was new to creating games,
            especially from scratch in Java.
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
            For example, the stars in the background are objects drawn using
            Java AWT. I wanted to have a moving background and have the stars
            move at different speeds depending on size. I originally was going
            to use a gif or a video, but looping it was too difficult.
            Eventually I decided to accomplish it with drawing multiple objects.
            This may not have been the most optimal way, but I was learning and
            that was what was my goal for this project: to take something scary
            and unfamiliar and accomplish it one way or another.
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
            This project pushed me to try new unfamiliar things and the
            motivation got me to try web development in the first place. I
            learned to always try new scary things and no matter how long it
            takes to get to that point, it can get accomplished one way or
            another. This mentality is applied into my consulting work as I
            always get thrown with new challenges and need to provide solutions,
            whether that be figured out on my own or through help with some of
            my amazing and talented coworkers.
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
