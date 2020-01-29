import React from 'react';
import { Navbar, Footer } from '../components/general';
import { Hero, About, Experience, Projects } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero />
    <div className="home__content">
      <About />
      <Experience />
      <Projects />
    </div>
  </Layout>
);

export default IndexPage;
