import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Personal Portfolio Website - React.js"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/personal-portfolio-site/"
      description="A website to showcase my projects, built with React.js and Gatsby"
    />
    <Navbar
      links={['Projects']}
      customLinks={[
        {
          name: 'GITHUB',
          to: 'https://github.com/ArmaizAdenwala/personal-portfolio',
        },
      ]}
    />
    <Hero
      emphasized="Personal Portfolio Website"
      description="Developer Details"
      date="January 2020"
      tags={['Gatsby', 'React.js', 'Heroku', 'SASS', 'SEO']}
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
            {'My personal portfolio website was built with '}
            <span className="tg__c--primary tg__w--500">React.js</span>
            {' and '}
            <span className="tg__c--primary tg__w--500">Gatsby</span>
            {' for the frontend. The app is deployed to '}
            <span className="tg__c--primary tg__w--500">Heroku</span>
            {'. The ui was inspired by '}
            <span className="tg__c--primary tg__w--500">Material Design</span>
            {' and the styles were made with '}
            <span className="tg__c--primary tg__w--500">SASS</span>
            {
              '. The hero section backgrounds were made using Adobe Illustrator.'
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
            The project was built with SEO in mind. Originally the app was built
            as a single page app in React.js, however, I realized that SPA's are
            not optimal for that. I switched over to Gatsby by copying over all
            of my components to a new Gatsby project.
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
            {'I used to use '}
            <span className="tg__c--primary tg__w--500">Ruby Middleman</span>
            {
              ' as my go-to static site generator. It did its job, however, it was not the best tool in my experience. After trying '
            }
            <span className="tg__c--primary tg__w--500">React.js</span>
            {' and '}
            <span className="tg__c--primary tg__w--500">Gatsby</span>
            {
              " out, I couldn't see myself using another stack. I was able to apply the coding practices I have from years of "
            }
            <span className="tg__c--primary tg__w--500">React Native</span>
            {' development to this project.'}
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
                Learn more about my Personal Portfolio Website:
              </p>
              <div className="button">
                <a
                  className="button__text"
                  href="https://github.com/ArmaizAdenwala/personal-portfolio"
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
