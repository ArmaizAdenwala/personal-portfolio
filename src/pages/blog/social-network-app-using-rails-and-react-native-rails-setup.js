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
            array of features that will be implemented using __Ruby on Rails__
            and __React Native__.
          </Paragraph>
          <Paragraph>
            Before we work on the __React Native__ side, lets focus on just
            __Ruby on Rails__.
          </Paragraph>

          <Title>Installing Ruby and Rails</Title>
          <Paragraph>
            The first step is to install __Ruby__ and __Rails__ on your
            terminal. We will be using __Ruby__ version `2.6.5` and __Rails__
            version `6.0.2.1`
          </Paragraph>
          <Paragraph>
            I highly suggest using __rvm__ to manage your ruby versions. [Click
            here to view the doccumentation for RVM](https://rvm.io/)
          </Paragraph>
          <Paragraph>
            Using RVM, installing ruby `2.6.5` is very straightforward by
            running `$ rvm install 2.6.5` in your terminal.
          </Paragraph>
          <Paragraph>
            Going forward, if you ever want to use `2.6.5` you would just need
            to run: `$ rvm use 2.6.5`
          </Paragraph>
          <Paragraph>
            Now that ruby is setup, install rails `6.0.2.1`: `$ gem install
            rails -v 6.0.2.1`
          </Paragraph>

          <Title>Creating the API</Title>
          <Paragraph>
            To create a new Rails API, run `$ rails new social-media-blog-api
            --api --database=postgresql`
          </Paragraph>
          <Paragraph>
            This command will create a new app called social-media-blog-api and
            will preconfigure it for an api only stack using the `--api` stack
          </Paragraph>
          <Paragraph>
            Once this has been created, we can now cd into it ``$ cd
            social-media-blog-api``
          </Paragraph>

          <Title>Setting Up The Respository</Title>
          <Paragraph>
            I like to create my GitHub repository ASAP. So this is a good
            starting point to create our repo
          </Paragraph>
          <Paragraph>
            Keep in mind that rails automatically creates a readme, we can
            verify that by running `ls *.md` to print out all markdown files in
          </Paragraph>
          <pre>
            {'~/code/social-media-blog-api$ ls *.md'}
            <br />
            {'README.md'}
          </pre>
          <Paragraph>
            Lets initiate this directory as a git repository by running `$ git
            init`. Since we already have our files, we can run `$ git add .` to
            stage all of our newly created files. These will be the files that
            would be pushed under a commit.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <a
                className="button__text"
                rel="noopener noreferrer"
                target="_blank"
                href="https://education.github.com/pack"
              >
                VIEW PART TWO: POSTGRESQL SETUP
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
