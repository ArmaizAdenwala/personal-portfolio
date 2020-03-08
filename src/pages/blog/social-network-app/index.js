import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import { Title, Paragraph, CodeBlock } from '../../../components/content';
import SeriesCard from '../../../components/blog/SeriesCard';
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
        <div className="blog__card blog__card--series">
          <Title first>Introduction</Title>
          <Paragraph>
            In this series, I will be covering how to develop a social media app
            using React Native as the frontend and Ruby on Rails as the backend.
            Each line will be explained, and although it will be a much longer
            process, you will understand what each line means rather than
            copying and pasting blocks of code.
          </Paragraph>
          <Paragraph>
            _Note: I only work on this series outside of college and my job as
            they take much higher priority. Since I would like this series to be
            high quality, installments may be released over a longer period of
            time._
          </Paragraph>
        </div>
        <SeriesCard
          name="1: Rails Setup"
          description="This series will be covering how to create a social network app using Ruby on Rails and React Native"
          url="/blog/social-network-app/rails-setup"
        />
        <SeriesCard
          name="2: PostgreSQL Setup"
          description="Learn how to setup a PostgreSQL database for a Rails app"
          url="/blog/social-network-app/postgresql-setup"
        />
        <SeriesCard
          name="3: Authentication"
          description="Setting up authentication using devise"
          url="/blog/social-network-app/auth-setup"
        />
        <SeriesCard
          name="4: Creating A User"
          description="Lorem ipsum"
          url="/blog/social-network-app/creating-a-user"
        />
        <SeriesCard
          name="5: Creating Auth Endpoints"
          description="Creating authentication endpoints for our User models"
          url="/blog/social-network-app/creating-auth-endpoints"
        />
        <SeriesCard
          name="6: API Versioning"
          description="Implementing API versioning on our Rails API"
          url="/blog/social-network-app/api-versioning"
        />
        <SeriesCard
          name="7: JWT (JSON Web Token) Authentication"
          description="What is JWT (JSON Web Token) and how to use it"
          url="/blog/social-network-app/jwt-authenthication"
        />
        <SeriesCard
          name="8: Implementing Serializers"
          description="How to implement serializers for your endpoints in Rails"
          url="/blog/social-network-app/serializers"
        />
        <SeriesCard
          name="9: Creating a JWT Singleton Class"
          description="How to create a singleton class for JWT logic"
          url="/blog/social-network-app/singleton-classes"
        />
        <SeriesCard
          name="10: Implementing JWT In Auth Endpoints"
          description="How to implement JWT in login and register endpoints"
          url="/blog/social-network-app/jwt-endpoints"
        />
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
