import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Title, Paragraph, CodeBlock } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <SEO
      title="How To Create A LED Rave Mask Using Arduino, Neopixels, and C++"
      canonical="https://armaizadenwala.com/blog/how-create-an-led-rave-mask-using-arduino.js"
      secondaryTitle="Armaiz"
      description="A detailed guide on how to create an LED mask and display effects"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="How To Create A LED Rave Mask Using Arduino, Neopixels, and C++"
      description="A detailed guide on how to make an LED rave mask"
      date="Feburary 29th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>Overview</Title>
          <Paragraph>
            in this guide, we will cover how to create the hardware and software
            for an arduino led rave mask. _Feel free to refer to [the GitHub
            repository for this Arduino
            project](https://github.com/ArmaizAdenwala/arduino-led-mask)._
          </Paragraph>

          <Title>Creating The Mask</Title>
          <Paragraph>_Note: A visual of the mask is shown below._</Paragraph>
          <Paragraph>
            The mask can be broken into two parts. The first part is the mask
            itself, which consists of 7 rows of WS2182B 144 LEDs/m Neopixels.
            There are a total of 161 LEDs, with the first row being 26. Each row
            decrements by 1, which means the 7th row will have 19 Neopixels.
            Since we are decrementing by an odd number, we will line up the
            pixels to be inbetween two pixels. This results in a hexagon-like
            geometric pattern which will allow us to make awesome patterns for
            our visuals.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-network-app-using-rails-and-react-native-jwt-endpoints/"
              >
                VIEW PART TEN: IMPLEMENTING JWT IN AUTH ENDPOINTS
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
