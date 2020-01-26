import React from 'react';
import { Navbar, Footer } from '../components/general';
import { Hero, About, Experience } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import Layout from '../components/layout';
// import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Navbar />
    <Hero />
    <div className="home__content">
      <About />
      <Experience />
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
