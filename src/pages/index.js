import React from 'react';
import { Hero, Navbar, Footer } from '../components/general';
import { About, Experience, Projects } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import SEO from '../components/seo';
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Hi, I'm Armaiz Adenwala, a Software Engineer that welcomes challenges and provides solutions. Come check out my projects!"
    />
    <Navbar links={['Projects']} />
    <Hero
      title="Hi, I'm "
      emphasized="Armaiz Adenwala"
      description="I'm a Software Engineer that welcomes challenges and provides solutions."
    />
    <div className="page__content">
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
