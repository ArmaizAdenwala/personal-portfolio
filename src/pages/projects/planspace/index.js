import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import { ProjectSection } from '../../../components/projects';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';
import CreateTaskImage from './create_task_planspace_react_native_app.png';
import ViewTaskImage from './view_task_planspace_node_js_socket_io_app.png';
import EditProfileImage from './edit_profile_invite_planspace_ruby_on_rails_app.png';
import TaskListImage from './task_list_ios_android_hackathon_app.png';

const IndexPage = () => (
  <div>
    <SEO
      title="PlanSpace - Automated Chore Management for iOS and Android"
      secondaryTitle="Armaiz"
      canonical="https://armaizadenwala.com/projects/planspace/"
      description="PlanSpace is designed for roommates to have automated chore schedules on a week by week basis."
    />
    <Navbar links={['Projects', 'PlanSpaceDev']} />
    <Hero
      emphasized="PlanSpace"
      date="January 2020"
      description="App designed for roommates to have automated chore schedules on a week by week basis."
    />
    <div className="page__content">
      <Container>
        <ProjectSection
          title={'Automate Your Chores'}
          description={
            'PlanSpace automatically plans out chores for you and your roommate on a week by week basis. Every day you will have a list of chores to complete. Once you mark a chore as complete, it automatically schedules the task for the next roommate based on their current chore schedule.'
          }
          src={TaskListImage}
        />
        <ProjectSection
          flip
          title={'Create Shared Tasks'}
          description={
            'Create shared tasks in seconds and let PlanSpace do the rest. Using the estimate and renewal fields, the app will automatically handle task assignments going forward. All you will have to do is wait for it to be assigned to you and mark it as complete.'
          }
          src={CreateTaskImage}
        />
        <ProjectSection
          title={'Everyone Does Their Fair Share'}
          description={
            'PlanSpace, uses task history data and the task estimates to balance the workload throughout the year. If you do a task more often than others, PlanSpace will assign it more to other roommates more often.'
          }
          src={ViewTaskImage}
        />
        <ProjectSection
          flip
          title={'Simple, As It Should Be'}
          description={
            "PlanSpace is supposed to help make chore assignments one less thing to worry about. It shouldn't be more work to use it. The app is designed to get you and your roommates setup in minutes."
          }
          src={EditProfileImage}
        />
      </Container>
      <div className="page__section">
        <Container>
          <div className="flex--h-center">
            <div className="tg__t--center">
              <p
                className="
                tg__title-6--s
                tg__title-5--m
                tg__title-5--l
                tg__lh--1-75
                m-v--8--s
              "
              >
                Learn more about how this React Native app was built:
              </p>
              <div className="button">
                <a className="button__text" href="/projects/planspace/dev">
                  VIEW DEVELOPER DETAILS
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
