import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../../../components/general';
import SeriesCard from '../../../../../components/blog/SeriesCard';
import '../../../../../styles/main.scss';
import '../../../Blog.scss';
import SEO from '../../../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Java Algorithms and Concepts"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle="Armaiz"
      description="A compilation of algorithims and concepts for the Java programming language.."
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        '@id': 'https://armaizadenwala.com/blog/algorithms/',
        description:
          'A growing list of detailed explanations of algorithms and concepts in an array of languages.',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': 'https://armaizadenwala.com',
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
            {
              '@type': 'ListItem',
              position: 3,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/',
                name: 'Algorithms',
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
        url: 'https://armaizadenwala.com/blog/algorithms/',
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Java Algorithms and Concepts"
      description="A compilation of algorithims and concepts for the Java programming language."
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/', hideOnMobile: true },
            {
              name: 'ALGORITHMS',
              url: '/blog/algorithms/',
            },
            { name: 'JAVA', url: '/blog/algorithms/java/' },
            { name: 'SORTING', url: '/blog/algorithms/sorting/' },
          ]}
        />
        <SeriesCard
          name="Iterative Bubble Sort"
          description="Iteratively swap adjacent elements of an array until the array is sorted."
          url="/blog/algorithms/java/sorting/iterative-bubble-sort"
        />
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
