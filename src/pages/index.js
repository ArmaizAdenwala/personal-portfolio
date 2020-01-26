import React from 'react';
import { Navbar, Footer } from '../components/general';
import { Hero, About } from '../components/home';
// import './Home.scss';
import { Link } from 'gatsby';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
// import Layout from "../components/layout"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Navbar />
    <Hero />
    <div className="home__content">
      <About />
    </div>
    <Footer />
  </div>
);

export default IndexPage;
