import React from 'react';
import { Navbar, Footer } from '../components/general';
import { Hero, About } from '../components/home';
import { Link } from 'gatsby';
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
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
