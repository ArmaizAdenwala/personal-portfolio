import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import BlogCard from '../../components/blog/BlogCard';
import '../../styles/main.scss';
import SEO from '../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Blog"
      secondaryTitle="Armaiz"
      description="A developer blog to share what I learn with other passionate developers."
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
      emphasized="Blog"
      description="A developer blog to share what I learn with other passionate developers"
    />
    <div className="page__content">
      <div className="p-v--32">
        <Container>
          <BlogCard
            name="The Best Github Student Pack Offers and Why They Are Important"
            description="My insights on the Github student pack and why you should take advantange of it"
            date="Feburary 3rd, 2020"
            url="/blog/the-best-github-student-pack-offers-and-why-they-are-important"
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
