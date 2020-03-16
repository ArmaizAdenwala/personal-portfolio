import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../../../components/general';
import { Title, Paragraph, CodeBlock } from '../../../../../components/content';
import SeriesCard from '../../../../../components/blog/SeriesCard';
import '../../../../../styles/main.scss';
import '../../../Blog.scss';
import SEO from '../../../../../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Developing A Cross-Platform iOS & Android Social Media App"
      canonical="https://armaizadenwala.com/blog/social-media-app/"
      secondaryTitle=""
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Developing A Cross-Platform iOS & Android Social Media App"
      description="This series will be covering how to create a cross-platform social media app using Ruby on Rails and React Native."
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
              hideOnMobile: true,
            },
            { name: 'JAVA', url: '/blog/algorithms/java/' },
            {
              name: 'SORTING',
              url: '/blog/algorithms/java/sorting/',
            },
            {
              name: 'ITERATIVE BUBBLE SORT',
              url: '/blog/algorithms/java/iterative-bubble-sort',
            },
          ]}
        />
        <div className="blog__card">
          <Title first>Overview</Title>
          <Paragraph>
            The bubble sort algorithm sorts an array by swapping adjacent
            elements until it is fully sorted. Bubble sort can be O(n) or
            O(n^2^) depending on the array being sorted.<sup>superscript</sup>
          </Paragraph>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
