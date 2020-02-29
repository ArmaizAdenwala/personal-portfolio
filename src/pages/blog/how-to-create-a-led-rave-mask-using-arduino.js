import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Title, Paragraph, CodeBlock } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';
import { Link } from 'gatsby';
import MaskImage from './images/arduino-led-mask/arduino_led_rave_mask.png';
import LedsMaskImage from './images/arduino-led-mask/arduino_led_rave_mask_only_leds.png';
import LedsMaskArduino from './images/arduino-led-mask/arduino_led_rave_mask_cropped.png';
import LedsMaskFull from './images/arduino-led-mask/arduino_led_rave_mask_full.png';

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

          <Title>Overview Of The Mask</Title>
          <img className="full-width-img" src={MaskImage} loading="lazy" />
          <div
            className="
              tg__t--center
              m-t--32
            "
          >
            <a
              href={MaskImage}
              className="
                tg__button
              "
            >
              VIEW FULL MASK IMAGE
            </a>
          </div>
          <Paragraph>
            The mask itself consists of 7 rows of __WS2182B 144 LEDs/m
            Neopixels__. There are a total of 161 LEDs, with the first row being
            26. Each row decrements by 1, which means the 7th row will have 19
            Neopixels. Since we are decrementing by an odd number, we will line
            up the pixels to be inbetween the two pixels above it. This results
            in a hexagon-like geometric pattern which will allow us to make
            awesome patterns for our visuals.
          </Paragraph>
          <img className="full-width-img" src={LedsMaskImage} loading="lazy" />
          <div
            className="
              tg__t--center
              m-t--32
            "
          >
            <a
              href={LedsMaskImage}
              className="
                tg__button
              "
            >
              VIEW FULL LEDS IMAGE
            </a>
          </div>
          <Paragraph>
            The order of WS2182B pins can differ depending on the brand. In my
            case, the order was `Ground`, `Data`, and `Power`. These are
            represented with `G`, `I/O`, `+` respecively. These leds are
            individually addressable so the order of these leds matter. When you
            get a Neopixel strip, it will be one long strip of 144 leds or so.
            You can cut these leds between these pins and solder them together
            as seen with the image above, making sure that the `O` pin connects
            to the `I` pin.
          </Paragraph>
          <Paragraph>
            The problem is that the Arduino won't see this in the shape of a
            mask, it will still think of it as one long strip. As seen with the
            full-sized image, the leds snake around, having each alternating row
            flipped. This is so that we do not have long wires going from one
            end of the mask to the other (I marked the flow of the led strip's
            data pin using arrows). This means that the 26th led is the last led
            in the first row, 27th led is the last led of the 2nd row, 28th led
            is the 2nd to last led of the 2nd row, and the 51st led is the first
            led of the 2nd row.
          </Paragraph>
          <Paragraph>
            Luckily, this isn't an issue if all of our designs are symetrical,
            because the `27th` led and the `51st` leds would be the same color.
            If our designs are not symetical, we would need a helper function
            which could use more memory.
          </Paragraph>
          <Title>Creating The Mask</Title>
          <Paragraph>
            In order to keep the leds in place and wearable, I bought an airsoft
            mask and measured that the first row of 26 LEDs would fit. After
            that, I measured the maximum amount of rows I could fit while
            keeping the "decrement by 1" rule. In my case it was 7 rows. Once
            everything was measured, the leds were cut and soldered, ensuring
            each alternating row flipped. Then the back of the neopixels were
            taped together using electrical tape. Once the leds were soldered
            together, I used a braided fishing line to sew the leds to the mask
            as it was the neatest method I found. This is my suggested approach
            in creating the mask itself.
          </Paragraph>
          <Title>Overview Of The Arduino</Title>
          <img
            className="full-width-img"
            src={LedsMaskArduino}
            loading="lazy"
          />
          <div
            className="
              tg__t--center
              m-t--32
            "
          >
            <a
              href={LedsMaskArduino}
              className="
                tg__button
              "
            >
              VIEW FULL ARDUINO MASK IMAGE
            </a>
          </div>
          <Paragraph>
            The Arduino is connected to the mask's data pin through th `A5` pin.
            There is a 470ohm resistor prior to reaching the Arduino's pin. The
            mask is powered by a battery pack with 3 AA batteries. The ground
            cable is connected to the arduino and the mask. The power cable of
            the battery is connected to the mask's `+` pin. You can also connect
            the power to the Arduino's `5V` pin, however, we won't worry about
            that until we are finished programming it. The Arduino will be
            connected to our computer using a usb cable.
          </Paragraph>
          <Paragraph>
            _Alternatively, you could upgrade the battery pack from `4.5V` to
            `4.8V` by using 4 Reachargable NiMH batteries at `1.2V` each. As
            long as you limit the power to the neopixels to be under `5V`, you
            should be ok._
          </Paragraph>
          <img className="full-width-img" src={LedsMaskFull} loading="lazy" />
          <div
            className="
              tg__t--center
              m-t--32
            "
          >
            <a
              href={LedsMaskFull}
              className="
                tg__button
              "
            >
              VIEW FULL COMPLETE ARDUINO MASK IMAGE
            </a>
          </div>
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
