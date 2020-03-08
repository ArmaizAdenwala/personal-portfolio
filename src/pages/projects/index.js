import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import ProjectCard from '../../components/home/projects/ProjectCard';
import '../../styles/main.scss';
import SEO from '../../components/seo';
import { Paragraph } from '../../components/content';
const IndexPage = () => (
  <div>
    <SEO
      title="My Projects"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/"
      description="A list of the projects that I have worked on ranging from multiple languages and frameworks."
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
      emphasized="My Projects"
      description="A list of the projects that I have worked on ranging from multiple languages and frameworks"
    />
    <div className="page__content">
      <div className="p-v--32">
        <Container>
          <Paragraph disableRel>
            _My blog posts are project-based, so be sure to check those out for
            [detailed guides on more projects](/blog)._
          </Paragraph>
          <br />
          <ProjectCard
            name="PlanSpace - HackDavis"
            description="App designed for roommates to have automated chore schedules on a week by week basis."
            date="January 2020"
            url="/projects/planspace"
            tags={[
              'React Native',
              'Redux',
              'Ruby on Rails',
              'PostgreSQL',
              'Node.js',
              'socket-io',
            ]}
          />
          <ProjectCard
            name="Personal Portfolio Website"
            description="A website to showcase my projects."
            date="January 2020"
            tags={['Gatsby', 'React.js', 'Heroku', 'SASS', 'SEO']}
            url="/projects/personal-portfolio-site"
          />
          <ProjectCard
            name="Smart Dorm Lock"
            description="A mobile app used to unlock my dorm door without a physical key."
            date="January 2019"
            tags={['React Native', 'Redux', 'C++', 'Arduino', 'IOT']}
            url="/projects/smart-dorm-lock"
          />
          <ProjectCard
            name="Programmable LED Rave Mask"
            description="An LED rave mask using individually addressable WS2812B led light strips and an Arduino"
            date="December 2018"
            tags={['C++', 'Arduino', 'WS2812B LEDS', 'FastLED']}
            url="/projects/led-rave-mask"
          />
          <ProjectCard
            name="Plutus"
            description="A prototype shopping app for my highschool class"
            date="November 2015"
            tags={['HTML', 'CSS', 'Javscript', 'Phonegap', 'Material Design']}
            url="/projects/plutus"
          />
          <ProjectCard
            name="SpaceGrab"
            description="A simple Java game made from scratch"
            date="November 2014"
            tags={['Java', 'Java AWT', 'Java Swing']}
            url="/projects/spacegrab"
          />
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
                Check out my Github:
              </p>
              <div className="button">
                <a
                  className="button__text"
                  href="https://github.com/ArmaizAdenwala/"
                >
                  VIEW GITHUB
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
