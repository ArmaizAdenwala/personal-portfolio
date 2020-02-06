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
      secondaryTitle="Armaiz"
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
            name="Let's Create A Social Network Using Rails And React Native - Part 1: Rails Setup"
            description="This series will be covering how to create a social network app using ruby on rails and react native"
            date="Feburary 5th, 2020"
            url="/blog/social-network-app-using-rails-and-react-native-rails-setup"
          />
          <BlogCard
            name="My Favorite Github Student Pack Offers and Why They Are Important"
            description="My insights on the Github student pack and why you should take advantange of it"
            date="Feburary 3rd, 2020"
            url="/blog/my-favorite-github-student-pack-offers-and-why-they-are-important"
          />
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
