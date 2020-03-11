import React from 'react';
import { Hero, Navbar, Footer } from '../components/general';
import { About, Experience, Leadership, Projects } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Software Engineer Portfolio - JS, Python, Ruby"
      secondaryTitle="Armaiz"
      description="Software Engineer with over over 4 years of experience. Experienced in React. Ruby, Rails, Python, Django, Node, and more."
      canonical="https://armaizadenwala.com"
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'WebPage',
        name:
          'Software Engineer Portfolio - JS, Python, Ruby | Armaiz Adenwala',
        description:
          'Software Engineer with over over 4 years of experience. Experienced in React. Ruby, Rails, Python, Django, Node, and more.',
        publisher: {
          '@type': 'ProfilePage',
          name: 'Armaiz Adenwala',
        },
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      title="Hi, I'm "
      emphasized="Armaiz Adenwala"
      description="I'm a Software Engineer that welcomes challenges and architects solutions."
    />
    <div className="page__content">
      <About />
      <Experience />
      <Leadership />
      <Projects />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
