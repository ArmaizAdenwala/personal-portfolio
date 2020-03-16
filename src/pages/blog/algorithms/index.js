import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../components/general';
import SeriesCard from '../../../components/blog/SeriesCard';
import '../../../styles/main.scss';
import '../Blog.scss';
import SEO from '../../../components/seo';
import schema from './schema';

const IndexPage = () => (
  <div>
    <SEO
      title="Algorithms and Concepts"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle="Armaiz"
      description="A growing list of detailed explanations of algorithms and concepts in an array of languages."
      ldJson={schema}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Algorithms and Concepts"
      description="A growing list of detailed explanations of algorithms and concepts in an array of languages"
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/' },
            { name: 'ALGORITHMS', url: '/blog/algorithms/' },
          ]}
        />
        <SeriesCard
          name="Java"
          description="An object-oriented programming language that is commonly used to explain programming concepts in colleges"
          url="/blog/algorithms/java/"
        />
        {/* <SeriesCard
          name="Racket"
          description="A multi-paradigm programming language that is based on Scheme (A dialect of Lisp)."
          url="/blog/social-media-app/postgresql-setup/"
        /> */}
        <br />
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
