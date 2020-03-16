import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../components/general';
import { Title, Paragraph, CodeBlock } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="My Favorite Github Student Pack Offers and Why They Are Important"
      canonical="https://armaizadenwala.com/blog/my-favorite-github-student-pack-offers-and-why-they-are-important/"
      secondaryTitle="Armaiz"
      description="My insights on the Github Student Pack and why you should take advantange of it"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="My Favorite Github Student Pack Offers and Why They Are Important"
      description="My insights on the Github Student Pack and why you should take advantange of it"
      date="Feburary 3rd, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/' },
            {
              name: 'GITHUB STUDENT PACK',
              url:
                '/blog/my-favorite-github-student-pack-offers-and-why-they-are-important/',
            },
          ]}
        />
        <div className="blog__card">
          <Title first>What is the Github Student Pack?</Title>
          <Paragraph>
            The __Github Student Pack__ is an abundance of resources available
            to students for free. The services and tools provided are used in
            the industry today and can launch your projects to the next level.
            [Apply for the Github Student Pack
            here](https://education.github.com/pack).
          </Paragraph>
          <Paragraph>
            In this article I am going to go over my favorite tools and services
            available for free in the Student Pack and why you should use them
            in your next project.
          </Paragraph>
          <Title>Heroku</Title>
          <Paragraph>
            Heroku is a __PAAS__ (Platform as a Service) that allows you to
            launch your app in seconds. Its focus is on taking all the devops
            work off your hands. That means you just need to run a couple
            commands for your app to be deployed and accessible anywhere!
          </Paragraph>
          <Paragraph>
            For example, here is all you need to get a Ruby on Rails API
            deployed on heroku:
          </Paragraph>
          <CodeBlock language="bash">
            {`$ heroku create
$ git push heroku master`}
          </CodeBlock>
          <Paragraph>
            Heroku provides __$168 worth of credits__ , equivalent to __2 years
            of the hobby dyno__. This allows you to have an app deployed on
            Heroku with little or no downtime and gives you access to __custom
            SSL certificates and custom domains__. Even better, you can use that
            credit for their __database instances__ above their free-tier.
            [Learn more about how to deploy your app on
            Heroku](https://heroku.com).
          </Paragraph>
          <Title>Namecheap</Title>
          <Paragraph>
            Namecheap is a domain registration site that provides a __free year
            of a .me domain__, perfect for your personal portfolio site. They
            also provide a __1 year SSL certificate__. You can have your new .me
            url point to your Heroku server by using a DNS provider such as
            Cloudflare all for free. [Register your .me domain
            here](https://nc.me/)
          </Paragraph>
          <Title>Digital Ocean</Title>
          <Paragraph>
            Digital Ocean is an __IAAS__ (Infrastructure as a Service). This
            means that you get a virtual machine (called a Droplet) and have
            full control of it via the terminal. Digital Ocean provides __$50
            credit__ to students, which is good for __10 months of their
            $5/month droplet__.
          </Paragraph>
          <Paragraph>
            You could install an Nginx server on a Digital Ocean droplet and
            host multiple static sites on one droplet. That is far __more cost
            effective__ than Heroku, emphasizing the benefit of doing the DevOps
            yourself. [Check out how you can create your own Digital Ocean
            Droplet](https://www.digitalocean.com/).
          </Paragraph>
          <Title>Travis CI</Title>
          <Paragraph>
            __CI__ (continuous integration) is a very important tool in the
            industry. A CI runs test against your code automatically and lets
            you know if any tests are failing or not for a specific commit.
            Travis CI can be integrated into GitHub to automatically run tests
            against pull requests. Blocking pull requests with failed tests
            helps keep the master branch working with a lower possiblity of
            regressions. [Learn more about Travis CI
            here](https://travis-ci.org/)
          </Paragraph>
          <Paragraph>
            Travis CI gives you __unlimited builds for private repos__ while you
            are a student so be sure to take advantange of this amazing service!
          </Paragraph>
          <Title>Sentry</Title>
          <Paragraph>
            Sometimes your users will find bugs and you will have no idea what
            exactly happened, or if it ever happened. Having error reporting is
            crucial for production apps and that is where Sentry comes into
            play.
          </Paragraph>
          <Paragraph>
            Sentry allows you to log errors in your code so that when they occur
            in production, you can see detailed information on what caused that
            error, how many times it has occured, the severity of it, and more.
          </Paragraph>
          <Paragraph>
            The __free 500,000 events/month__ should be more than enough for you
            to utilize for any app you integrate Sentry in. [View more info
            about Sentry's error monitoring service
            here](https://sentry.io/welcome/).
          </Paragraph>
          <Title>Get The Student Pack!</Title>
          <Paragraph>
            Overall, the GitHub student pack offers plenty of resources for
            everyone. These were only my favorites, but it is only a small
            fraction of what it has to offer. I highly recommend you to take
            advantange of this awesome offer and utilize them for your next
            project!
          </Paragraph>
          <div className="m-t--32 tg__t--center">
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
