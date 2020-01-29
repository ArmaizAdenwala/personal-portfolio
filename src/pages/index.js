import React from 'react';
import { Hero, Navbar, Footer } from '../components/general';
import { About, Experience, Projects } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero
      title="Hi, I'm "
      emphasized="Armaiz Adenwala"
      description="I'm a Software Engineer that welcomes challenges and provides solutions."
    />
    <div className="page__content">
      <About />
      <Experience />
      <Projects />
    </div>
  </Layout>
);

export default IndexPage;
