import React from 'react';
import { Hero, Navbar, Footer } from '../../components/general';
import { ProjectSection } from '../../components/projects';
import '../../styles/main.scss';
import '../../styles/pages/Home.scss';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CreateTaskImage from './planspace/create_task_planspace_react_native_app.png';
import ViewTaskImage from './planspace/view_task_planspace_node_js_socket_io_app.png';
import EditProfileImage from './planspace/edit_profile_invite_planspace_ruby_on_rails_app.png';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navbar />
    <Hero
      emphasized="PlanSpace"
      description="App designed for roommates to have automated chore schedules on a week by week basis."
    />
    <div className="page__content">
      <ProjectSection
        title={'Manage Roommates'}
        description={
          'App designed for roommates to have automated chore schedules on a week by week basis. App designed for roommates to have automated chore schedules on a week by week basis.'
        }
        src={CreateTaskImage}
      />
      <ProjectSection
        flip
        title={'Manage '}
        description={
          'App designed for roommates to have automated chore schedules on a week by week basis. App designed for roommates to have automated chore schedules on a week by week basis.'
        }
        src={ViewTaskImage}
      />
      <ProjectSection
        title={'Manage Roommates'}
        description={
          'App designed for roommates to have automated chore schedules on a week by week basis. App designed for roommates to have automated chore schedules on a week by week basis.'
        }
        src={EditProfileImage}
      />
    </div>
  </Layout>
);

export default IndexPage;
