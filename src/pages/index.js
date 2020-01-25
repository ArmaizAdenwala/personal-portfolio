import React from 'react';
import { Container } from '../components/general';
import { Hero, About, Navbar } from '../components/home';
// import './Home.scss';
import { Link } from 'gatsby';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = () => (
  <div>
    <Hero />
    <div className="home__content">
      <About />
    </div>
  </div>
);

export default IndexPage;
