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
      title="Java Sorting Algorithms and Concepts"
      canonical="https://armaizadenwala.com/blog/algorithms/java/sorting/"
      secondaryTitle="Armaiz"
      description="Sorting algorithms implemented using Java"
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        '@id': 'https://armaizadenwala.com/blog/algorithms/java/sorting/',
        description:
          'Sorting algorithms implemented using Java.',
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
            {
              '@type': 'ListItem',
              position: 4,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/java/',
                name: 'Java',
              },
            },
            {
              '@type': 'ListItem',
              position: 5,
              item: {
                '@id': 'https://armaizadenwala.com/blog/algorithms/java/sorting/',
                name: 'Sorting',
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
        url: 'https://armaizadenwala.com/blog/algorithms/java/sorting/',
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Java Sorting Algorithms and Concepts"
      description="Sorting algorithms implemented using Java"
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
            { name: 'SORTING', url: '/blog/algorithms/java/sorting/' },
          ]}
        />
        <SeriesCard
          name="Iterative Bubble Sort"
          description="Iteratively swap adjacent elements of an array until the array is sorted."
          url="/blog/algorithms/java/sorting/iterative-bubble-sort/"
        />
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
