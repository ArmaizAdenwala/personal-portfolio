import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import { Title, Paragraph, CodeBlock } from '../../../components/content';
import '../../../styles/main.scss';
import '../Blog.scss';
import SEO from '../../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <SEO
      title="Developing A Cross-Platform iOS & Android Social Network App"
      canonical="https://armaizadenwala.com/blog/social-network-app/"
      secondaryTitle=""
      description="This series will be covering how to create a cross-platform social network app using Ruby on Rails and React Native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Developing A Cross-Platform iOS & Android Social Network App"
      description="This series will be covering how to create a cross-platform social network app using Ruby on Rails and React Native."
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>Introduction</Title>
          <Paragraph>
            In this series, I will be covering how to develop a social media app
            using React Native as the frontend and Ruby on Rails as the backend.
            Each line will be explained, and although it will be a much longer
            process, you will understand what each line means rather than
            copying and pasting blocks of code.
          </Paragraph>
          <Paragraph>
            _Note: I only work on this series outside of college and work. Since
            I would like this series to be high quality, installments may be
            released over a longer period of time._
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-network-app-using-rails-and-react-native-postgresql-setup/"
              >
                VIEW PART TWO: POSTGRESQL SETUP
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
