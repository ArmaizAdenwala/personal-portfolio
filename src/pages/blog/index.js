import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import BlogCard from '../../components/blog/BlogCard';
import '../../styles/main.scss';
import SEO from '../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Blog"
      canonical="https://armaizadenwala.com/blog/"
      description="A developer blog to share what I learn."
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
      description="A developer blog to share what I learn"
    />
    <div className="page__content">
      <div className="p-v--32">
        <Container>
          <BlogCard
            name="Using Pytesseract To Convert Images Into An HTML Site"
            description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
            date="March 7th, 2020"
            url="/blog/pytesseract-images-to-html/"
          />
          <BlogCard
            name="How To Create A LED Rave Mask Using Arduino, Neopixels, and C++"
            description="A detailed guide on how to create an LED mask and display effects"
            date="March 1st, 2020"
            url="/blog/how-to-create-a-led-rave-mask-using-arduino/"
          />
          <BlogCard
            name="Part 10: Implementing JWT In Auth Endpoints - Let's Create A Social Network Using Rails And React Native"
            description="How to implement JWT in login and register endpoints"
            date="Feburary 19th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-jwt-endpoints/"
          />
          <BlogCard
            name="Part 9: Creating a JWT Singleton Class - Let's Create A Social Network Using Rails And React Native"
            description="How to create a singleton class for JWT logic"
            date="Feburary 19th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-singleton-classes/"
          />
          <BlogCard
            name="Part 8: Implementing Serializers - Let's Create A Social Network Using Rails And React Native"
            description="How to implement serializers for your endpoints in Rails"
            date="Feburary 19th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-serializers/"
          />
          <BlogCard
            name="Part 7: JWT (JSON Web Token) Authentication - Let's Create A Social Network Using Rails And React Native"
            description="What is JWT (JSON Web Token) and how to use it"
            date="Feburary 12th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-jwt-authentication/"
          />
          <BlogCard
            name="Part 6: API Versioning - Let's Create A Social Network Using Rails And React Native"
            description="Implementing API versioning on our Rails API"
            date="Feburary 10th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-api-versioning/"
          />
          <BlogCard
            name="Part 5: Creating Auth Endpoints - Let's Create A Social Network Using Rails And React Native"
            description="Creating authentication endpoints for our User models"
            date="Feburary 9th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-creating-auth-endpoints/"
          />
          <BlogCard
            name="Part 4: Creating A User - Let's Create A Social Network Using Rails And React Native"
            description="Setting up authentication using devise"
            date="Feburary 8th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-creating-a-user/"
          />
          <BlogCard
            name="Part 3: Authentication - Let's Create A Social Network Using Rails And React Native"
            description="Setting up authentication using devise"
            date="Feburary 7th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-auth-setup/"
          />
          <BlogCard
            name="Part 2: PostgreSQL Setup - Let's Create A Social Network App Using Rails And React Native"
            description="Learn how to setup a PostgreSQL database for a Rails app"
            date="Feburary 6th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-postgresql-setup/"
          />
          <BlogCard
            name="Part 1: Rails Setup - Let's Create A Social Network Using Rails And React Native"
            description="This series will be covering how to create a social network app using ruby on rails and react native"
            date="Feburary 5th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-rails-setup/"
          />
          <BlogCard
            name="My Favorite Github Student Pack Offers and Why They Are Important"
            description="My insights on the Github student pack and why you should take advantange of it"
            date="Feburary 3rd, 2020"
            url="/blog/my-favorite-github-student-pack-offers-and-why-they-are-important/"
          />
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
