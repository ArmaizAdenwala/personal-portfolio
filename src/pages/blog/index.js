import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Paragraph } from '../../components/content';
import BlogCard from '../../components/blog/BlogCard';
import '../../styles/main.scss';
import SEO from '../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Software Engineering Blog"
      secondaryTitle="Armaiz Adenwala"
      canonical="https://armaizadenwala.com/blog/"
      description="Detailed guides covering an array of technologies and frameworks."
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        '@id': 'https://armaizadenwala.com/blog/',
        description:
          'Detailed guides covering an array of technologies and frameworks.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://armaizadenwala.com/',
                name: 'Home',
              },
            },
            {
              '@type': 'ListItem',
              position: 2,
              item: {
                '@id': 'https://armaizadenwala.com/blog/',
                name: 'Blog',
              },
            },
          ],
        },
        publisher: {
          '@type': 'Organization',
          name: 'Armaiz Adenwala',
          logo: {
            '@type': 'imageObject',
            url: 'https://armaizadenwala.com/armaiz-developer-full.png',
          },
        },
        url: 'https://armaizadenwala.com/blog/',
      }}
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
      emphasized="Software Engineering Blog"
      description="Detailed guides covering an array of technologies and frameworks"
    />
    <div className="page__content">
      <div className="p-v--32">
        <Container>
          <Paragraph>
            _Opinions expressed in my blog are solely my own and do not express
            the views or opinions of my employer._
          </Paragraph>
          <BlogCard
            name="Using Pytesseract To Convert Images Into A HTML Site"
            description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
            date="March 7th, 2020"
            url="/blog/pytesseract-images-to-html/"
            tags={['Python', 'Tesseract']}
          />
          <BlogCard
            name="How To Create An LED Rave Mask Using Arduino, Neopixels, and C++"
            description="A detailed guide on how to create an LED mask and display effects"
            date="March 1st, 2020"
            url="/blog/how-to-create-a-led-rave-mask-using-arduino/"
            tags={['Arduino', 'C++', 'NeoPixels']}
          />
          <BlogCard
            name="Developing A Cross-Platform iOS & Android Social Media App"
            description="This series will be covering how to create a social media app using Ruby on Rails and React Native"
            date="Feburary 5th, 2020"
            url="/blog/social-media-app/"
            tags={['Ruby', 'Rails', 'PostgreSQL']}
          />
          <BlogCard
            name="My Favorite Github Student Pack Offers and Why They Are Important"
            description="My insights on the Github student pack and why you should take advantange of it"
            date="Feburary 3rd, 2020"
            url="/blog/my-favorite-github-student-pack-offers-and-why-they-are-important/"
            tags={['Git', 'Devops', 'CI']}
          />
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
