import React from 'react';
import { Hero, Navbar, Footer } from '../components/general';
import { About, Experience, Projects } from '../components/home';
import '../styles/main.scss';
import '../styles/pages/Home.scss';
import SEO from '../components/seo';

const IndexPage = () => (
  <div>
    <SEO
      title="Home"
      description="Hi, I'm Armaiz Adenwala, a Software Engineer that welcomes challenges and provides solutions. Come check out my projects!"
    />
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
      <Footer />
    </div>
  </div>
);

export default IndexPage;
