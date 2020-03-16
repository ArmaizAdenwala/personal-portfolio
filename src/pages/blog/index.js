import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../components/general';
import BlogCard from '../../components/blog/BlogCard';
import '../../styles/main.scss';
import SEO from '../../components/seo';
import TesseractImg from './images/ocr/tesseract-jpg-to-html.png';
import TesseractBlurImg from './images/ocr/tesseract_jpg_to_html_blur.png';
import ArduinoImg from './images/arduino-led-mask/arduino_neopixel.png';
import ArduinoBlurImg from './images/arduino-led-mask/arduino_neopixel_blur.png';
import RailsImg from './images/social-network/social_media_app.png';
import RailsBlurImg from './images/social-network/social_media_app_blur.png';
import GithubImg from './images/github/free_github.png';
import GithubBlurImg from './images/github/free_github_blur.png';
import AlgorithmsImg from './images/algorithms/algorithms.png';
import AlgorithmsBlurImg from './images/algorithms/algorithms_blur.png';

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
      <div className="p-b--32">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'HOME', url: '/' },
              { name: 'BLOG', url: '/blog/' },
            ]}
          />
          <p
            className="
            tg__title-7--s
            tg__title-6--m
            tg__title-6--l
            tg__lh--1-5--s
            tg__lh--1-75--m
            tg__lh--1-75--l
            m-v--8
            "
          >
            <em>
              Opinions expressed in my blog are solely my own and do not express
              the views or opinions of my employer.
            </em>
          </p>
          <BlogCard
            name="Algorithms and Concepts"
            description="A growing list of detailed explanations of algorithms and concepts in an array of languages"
            date="Last Updated: March 16th, 2020"
            url="/blog/algorithms/"
            tags={['JAVA']}
            img={AlgorithmsImg}
            placeholder={AlgorithmsBlurImg}
            alt="Image of a terminal compiling and executing a Bubble Sort program in Java"
            color="#96d8d8"
          />
          <BlogCard
            name="Using Pytesseract To Convert Images Into A HTML Site"
            description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
            date="March 7th, 2020"
            url="/blog/pytesseract-images-to-html/"
            tags={['Python', 'Tesseract']}
            img={TesseractImg}
            placeholder={TesseractBlurImg}
            alt="Image of multiple documents from HTML to JPG"
            color="#E7E5FB"
          />
          <BlogCard
            name="How To Create An LED Rave Mask Using Arduino, Neopixels, and C++"
            description="A detailed guide on how to create an LED mask and display effects"
            date="March 1st, 2020"
            url="/blog/how-to-create-a-led-rave-mask-using-arduino/"
            tags={['Arduino', 'C++', 'NeoPixels']}
            img={ArduinoImg}
            placeholder={ArduinoBlurImg}
            alt="Image of NeoPixels for Arduino"
            color="#D9EDFE"
          />
          <BlogCard
            name="Series: Developing A Cross-Platform iOS & Android Social Media App"
            description="A detailed 10+ part series that details how to create a social media app using Ruby on Rails and React Native"
            date="Feburary 5th, 2020"
            url="/blog/social-media-app/"
            tags={['Ruby', 'Rails', 'PostgreSQL']}
            img={RailsImg}
            placeholder={RailsBlurImg}
            alt="Design that represents an iPhone and Android phone"
            color="#EA886E"
          />
          <BlogCard
            name="My Favorite Github Student Pack Offers and Why They Are Important"
            description="My insights on the Github student pack and why you should take advantange of it"
            date="Feburary 3rd, 2020"
            url="/blog/my-favorite-github-student-pack-offers-and-why-they-are-important/"
            tags={['Git', 'Devops', 'CI']}
            img={GithubImg}
            placeholder={GithubBlurImg}
            alt="Free price tag design"
            color="#F3DDC5"
          />
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
