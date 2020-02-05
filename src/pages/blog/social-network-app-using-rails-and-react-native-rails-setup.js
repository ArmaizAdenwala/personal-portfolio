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
            Before we work on the React Native side, lets focus on just Ruby on
            Rails.
          </Paragraph>
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
            Heroku
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
            Heroku is a <span className="tg__c--primary tg__w--500">PAAS</span>{' '}
            (Plaform as a Service) that allows you to launch your app in
            seconds. Its focus is on taking all the devops work off your hands.
            That means you just need to run a couple commands for your app to be
            deployed and accessible anywhere!
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-b--0
                m-t--24"
          >
            For example, here is all you need to get a ruby on rails api
            deployed on heroku:
          </p>
          <pre>
            {'$ heroku create'}
            <br />
            {'$ git push heroku master'}
          </pre>
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
            So what does Heroku provide in the Student Pack? Heroku provides{' '}
            <span className="tg__c--primary tg__w--500">
              $168 worth of credits
            </span>
            , equivalent to{' '}
            <span className="tg__c--primary tg__w--500">
              2 years of the hobby dyno
            </span>
            . This allows you to have an app deployed on Heroku with little or
            no downtime and gives you access to custom SSL certificates and
            custom domains. Even better, you can use that credit for their
            database instances above their free-tier.{' '}
            <a
              className="tg__nested-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://heroku.com"
            >
              {'Learn more about how to deploy your app on Heroku'}
            </a>
            .
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
            Namecheap
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
            Namecheap is a domain registration site that provides a{' '}
            <span className="tg__c--primary tg__w--500">
              free year of a .me domain
            </span>
            , perfect for your personal portfolio site. They also provide a{' '}
            <span className="tg__c--primary tg__w--500">
              1 year SSL certificate
            </span>
            . You can have your new .me url point to your Heroku server by using
            a DNS provider such as Cloudflare.
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
                m-t--64
              "
          >
            Digital Ocean
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
                m-t--24
              "
          >
            Digital Ocean is an{' '}
            <span className="tg__c--primary tg__w--500">IAAS</span>{' '}
            (Infrastructure as a Service). This means that you get a virtual
            machine (called a Droplet) and have full control of it via the
            terminal. Digital Ocean provides{' '}
            <span className="tg__c--primary tg__w--500">$50 credit</span> to
            students, which is good for{' '}
            <span className="tg__c--primary tg__w--500">
              10 months of their $5/month droplet
            </span>
            .
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24
              "
          >
            You could install an Nginx server on a Digital Ocean droplet and
            host multiple static sites on one droplet. That is far{' '}
            <span className="tg__c--primary tg__w--500">
              more cost effective
            </span>{' '}
            than Heroku, emphasizing the benefit of doing the DevOps yourself.{' '}
            <a
              className="tg__nested-link"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.digitalocean.com/"
            >
              {'Check out how you can create your own Digital Ocean Droplet'}
            </a>
            .
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
                m-t--64
              "
          >
            Travis CI
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
                m-t--24
              "
          >
            <span className="tg__c--primary tg__w--500">CI</span> (continuous
            integration) is a very important tool in the industry. A CI runs
            test against your code automatically and lets you know if any tests
            are failing or not for a specific commit. Blocking pull request
            merges when a CI is failing helps keep the master branch working
            with no regressions.
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24
              "
          >
            Travis CI gives you{' '}
            <span className="tg__c--primary tg__w--500">
              unlimited builds for private repos
            </span>{' '}
            while you are a student so be sure to take advantange of this
            amazing service!
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
                m-t--64
              "
          >
            Sentry
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
                m-t--24
              "
          >
            Sometimes your users will find bugs and you will have no idea what
            exactly happened, or if it ever happened. Having error reporting is
            crucial for production apps and that is where Sentry comes into
            play.
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24
              "
          >
            Sentry allows you to log errors in your code so that when they occur
            in production, you can see detailed information on what caused that
            error, how many times it has occured, the severity of it, and more.
          </p>
          <p
            className="
                tg__title-7--s
                tg__title-6--m
                tg__title-6--l
                tg__lh--1-5--s
                tg__lh--1-75--m
                tg__lh--1-75--l
                m-v--8
                m-t--24
              "
          >
            The{' '}
            <span className="tg__c--primary tg__w--500">
              free 500,000 events/month
            </span>{' '}
            should be more than enough for you to utilize for any app you
            integrate Sentry in.
          </p>
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
