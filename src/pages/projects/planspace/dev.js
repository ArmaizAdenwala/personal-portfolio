import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import { ProjectSection } from '../../../components/projects';
import '../../../styles/main.scss';
import './Project.scss';
import Layout from '../../../components/layout';
import SEO from '../../../components/seo';
import CreateTaskImage from './create_task_planspace_react_native_app.png';
import ViewTaskImage from './view_task_planspace_node_js_socket_io_app.png';
import EditProfileImage from './edit_profile_invite_planspace_ruby_on_rails_app.png';
import TaskListImage from './task_list_ios_android_hackathon_app.png';

const IndexPage = () => (
  <div>
    <SEO
      title="PlanSpace"
      description="PlanSpace is designed for roommates to have automated chore schedules on a week by week basis."
    />
    <Navbar links={['Home']} />
    <Hero emphasized="PlanSpace" description="Developer Write Up" />
    <div className="page__content">
      <Container>
        <div>
          <a href="/projects/planspace/dev"></a>
        </div>
      </Container>
    </div>
  </div>
);

export default IndexPage;
