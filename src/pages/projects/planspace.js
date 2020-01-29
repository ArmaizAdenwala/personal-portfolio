import React from 'react';
import { Hero, Navbar, Footer } from '../../components/general';
import { ProjectSection } from '../../components/projects';
import '../../styles/main.scss';
import '../../styles/pages/Home.scss';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero 
      emphasized="PlanSpace"
      description="App designed for roommates to have automated chore schedules on a week by week basis."
    />
    <div className="page__content">
      <ProjectSection/>
    </div>
  </Layout>
);

export default IndexPage;
