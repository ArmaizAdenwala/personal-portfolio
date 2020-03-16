import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../../components/general';
import SeriesCard from '../../../../components/blog/SeriesCard';
import '../../../../styles/main.scss';
import '../../Blog.scss';
import SEO from '../../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Java Algorithms and Concepts"
      canonical="https://armaizadenwala.com/blog/algorithms/java/"
      secondaryTitle="Armaiz"
      description="A compilation of algorithims and concepts for the Java programming language."
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        '@id': 'https://armaizadenwala.com/blog/algorithms/java/',
        description:
          'A compilation of algorithims and concepts for the Java programming language.',
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
        url: 'https://armaizadenwala.com/blog/algorithms/java/'
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Java Algorithms and Concepts"
      description="A compilation of algorithims and concepts for the Java programming language."
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/', hideOnMobile: true },
            { name: 'ALGORITHMS', url: '/blog/algorithms/' },
            { name: 'JAVA', url: '/blog/algorithms/java/' },
          ]}
        />
        <SeriesCard
          name="Sorting"
          description="Algorithms used to order an array of integers"
          url="/blog/algorithms/java/sorting/"
        />
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
