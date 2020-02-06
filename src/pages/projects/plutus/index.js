import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../../components/general';
import { ProjectSection } from '../../../components/projects';
import '../../../styles/main.scss';
import '../Project.scss';
import SEO from '../../../components/seo';
import UpdatesImage from './plutus_material_design_app_updates.png';
import ProfileImage from './plutus_phonegap_app_profile.png';
import HomeImage from './plutus_shopping_app_home.png';

const IndexPage = () => (
  <div>
    <SEO
      title="Plutus - Shopping App Concept"
      secondaryTitle="Armaiz"
      description="A prototype shopping app for my highschool class."
      canonical="https://armaizadenwala.com/projects/plutus/"
    />
    <Navbar links={['Projects', 'PlutusDev']} />
    <Hero
      emphasized="Plutus"
      date="November 2015"
      description="A prototype shopping app for my highschool class"
    />
    <div className="page__content">
      <Container>
        <ProjectSection
          title={'Shop For Your Favorite Items'}
          description={
            "Plutus is a platform for you to buy/sell used and new items from trusted sellers. Using the reputation system, you'll know if you're buying from someone reliable."
          }
          src={HomeImage}
        />
        <ProjectSection
          flip
          title={'Start Selling Your Used Items'}
          description={
            "Plutus is a marketplace for you to sell the items you don't need. You can customize your profile with a custom slogan and a profile picture."
          }
          src={ProfileImage}
        />
        <ProjectSection
          title={'An Organized Dashboard'}
          description={
            "With a simple and organized dashboard, you'll be able to see what new updates have occured since you last checked."
          }
          src={UpdatesImage}
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
                Learn more about how this prototype app was built:
              </p>
              <div className="button">
                <a className="button__text" href="/projects/plutus/dev">
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
