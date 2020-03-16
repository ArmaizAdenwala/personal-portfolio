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
import schema from './schema';

const IndexPage = () => (
  <div>
    <SEO
      title="Java Algorithms and Concepts"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle="Armaiz"
      description="A compilation of algorithims and concepts for the Java programming language.."
      ldJson={schema}
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
