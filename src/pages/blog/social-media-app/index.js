import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../components/general';
import { Title, Paragraph } from '../../../components/content';
import SeriesCard from '../../../components/blog/SeriesCard';
import '../../../styles/main.scss';
import '../Blog.scss';
import SEO from '../../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <SEO
      title="Developing A Cross-Platform iOS & Android Social Media App"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle=""
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Developing A Cross-Platform iOS & Android Social Media App"
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/' },
            { name: 'SOCIAL MEDIA APP', url: '/blog/social-media-app/' },
          ]}
        />
        <div className="blog__card">
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
        <h4 className="tg__subtitle tg__t--center m-b--16">
          Milestone 1: Creating our Rails API
        </h4>
        <SeriesCard
          name="1: Rails Setup"
          description="How to setup Ruby on Rails 6 for our social media app"
          url="/blog/social-media-app/rails-setup/"
        />
        <SeriesCard
          name="2: PostgreSQL Setup"
          description="Learn how to setup a PostgreSQL database for a Ruby on Rails app"
          url="/blog/social-media-app/postgresql-setup/"
        />
        <SeriesCard
          name="3: Authentication Setup"
          description="Setting up Devise with a Rails API for authenthication"
          url="/blog/social-media-app/auth-setup/"
        />
        <SeriesCard
          name="4: Creating A User"
          description="Creating a user with an email and a password using the Rails console"
          url="/blog/social-media-app/creating-a-user/"
        />
        <SeriesCard
          name="5: Creating Auth Endpoints"
          description="Creating authentication endpoints for our User models"
          url="/blog/social-media-app/creating-auth-endpoints/"
        />
        <SeriesCard
          name="6: API Versioning"
          description="Implementing API versioning on our Rails API"
          url="/blog/social-media-app/api-versioning/"
        />
        <SeriesCard
          name="7: JWT (JSON Web Token) Authentication"
          description="What JWT (JSON Web Token) authentication is and how to use it"
          url="/blog/social-media-app/jwt-authentication/"
        />
        <SeriesCard
          name="8: Implementing Serializers"
          description="Creating active model serializers in our Rails endpoints"
          url="/blog/social-media-app/serializers/"
        />
        <SeriesCard
          name="9: Creating a JWT Singleton Class"
          description="Developing a module for JWT logic"
          url="/blog/social-media-app/singleton-classes/"
        />
        <SeriesCard
          name="10: Implementing JWT In Auth Endpoints"
          description="How to implement JWT in login and register endpoints"
          url="/blog/social-media-app/jwt-endpoints/"
        />
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
