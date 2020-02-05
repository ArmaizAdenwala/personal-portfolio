import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Title, Paragraph } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Let's Create A Social Network App Using Rails And React Native - Part 1: Rails Setup"
      canonical="https://armaizadenwala.com/blog/social-network-using-rails-and-react-native-rails-setup"
      secondaryTitle="Armaiz"
      description="This series will be covering how to create a social network app using ruby on rails and react native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 1: Rails Setup"
      description="This series will be covering how to create a social network app using ruby on rails and react native"
      date="Feburary 7th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>Introduction</Title>
          <Paragraph>
            In this blog post series, I will be walking you through my process
            of creating a simple social network app. By the end of this series I
            will cover everything from authenthication to uploading images, to
            handling data efficently on the mobile app. We will be covering an
            array of features that will be implemented using Ruby on Rails and
            React Native.
          </Paragraph>
          <Paragraph>
            Before we work on the __React Native__ side, lets focus on just Ruby
            on Rails.
          </Paragraph>

          <div className="m-t--64 tg__t--center">
            <div className="button">
              <a
                className="button__text"
                rel="noopener noreferrer"
                target="_blank"
                href="https://education.github.com/pack"
              >
                GET THE GITHUB STUDENT PACK
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
