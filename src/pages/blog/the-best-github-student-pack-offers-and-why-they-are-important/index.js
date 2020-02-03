import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import '../../../styles/main.scss';
import '../Blog.scss';
import VSCodeImage from './vscode_image_armaiz_adenwala.jpg';
import SEO from '../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="The Best Github Student Pack Offers and Why They Are Important"
      secondaryTitle="Armaiz"
      description="My insights on the Github student pack and why you should take advantange of it"
    />
    <Navbar links={['Projects']} />
    <Hero
      emphasized="The Best Github Student Pack Offers and Why They Are Important"
      description="My insights on the Github student pack and why you should take advantange of it"
      date="Feburary 3rd 2020"
      extraContent
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
                m-v--8
            "
          >
            What is the Github Student Pack?
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
            The Github Student Pack is an abundance of resources available to
            students for free. The services and tools provided are all used in
            the industry today and can launch your projects to another level for
            free. One can apply for the student pack here:
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
                m-t--24"
          >
            In this article I am going to go over my favorite tools and services
            available for free in the student pack and why you should use them
            in your next project.
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
            Heroku is a PAAS (Plaform as a Service) that allows you to launch
            your app in seconds. It's focus is on taking all the devops work off
            your hands and all you will have to do is deploy. That means you
            just need to run a couple commands and your app is deployed and
            accessible anywhere! Even better, you can use that credit for their
            db instances above their free-tier.
          </p>
          <pre>{`
            $ heroku create
            $ git push heroku master
          `}</pre>
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
            So what does heroku provide in the Student Pack? Heroku provides
            $168 worth of credits, equivalent to 2 years of the hobby dyno. This
            allows you to have an app deployed on heroku with little or no
            downtime and gives you access to ssl implementation for custom
            domains.
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
            Namecheap is a domain registration site that provides a free year of
            a .me domain, perfect for your personal portfolio site. They also
            provide a 1 year ssl certificate, but I highly reccomend Cloudflare
            for that along with Cloudflare's other free-tier features.
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
            Digital Ocean is an IAAS (Infrastructure as a Service). This means
            that you get a virtual machine (called a Droplet) and have full
            control of it via the terminal. Digital Ocean provides $50 credit to
            students, which is good for 10 months of their $5/mo droplet.
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
            host multiple static sites on one droplet. That is far more cost
            effective than Heroku which is a benifit of doing the DevOps
            yourself.
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
            Git Kraken
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
            GitKraken is a GUI for git repos that can supercharge your git
            workflow without needing to use a terminal. Rebasing can be scary in
            the terminal for some, but using a ui might make that an easier task
            to accomplish. GitKraken has a full suite of features so be sure to
            check them all out with their free 1 year of their pro plan!
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
          ></p>
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
          ></p>
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
            Twilo's SendGrid
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
          ></p>
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
            Stripe
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
          ></p>
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
                Check out the source code:
              </p>
              <div className="button">
                <a
                  className="button__text"
                  href="https://github.com/ArmaizAdenwala/led-rave-mask"
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
