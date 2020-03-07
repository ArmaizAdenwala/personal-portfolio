import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Title, Paragraph, CodeBlock } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';
import { Link } from 'gatsby';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CoverImage from './images/ocr/pytesseract-convert-image-to-html-site.png';

const IndexPage = () => (
  <div>
    <SEO
      title="Using Pytesseract To Convert Images To An HTML Site"
      canonical="https://armaizadenwala.com/blog/pytesseract-images-to-html/"
      secondaryTitle="Armaiz"
      image={CoverImage}
      description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Using Pytesseract To Convert Images To An HTML Site"
      description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
      date="March 7th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <LazyLoadImage
            className="cover-image"
            src={CoverImage}
            alt="NeoPixels in the shape of the Arduino LED mask. Cables are connected to the next row and snake around with each row having 1 less LED than the one above it."
          />
          <Title first>Overview</Title>
          <Paragraph>
            In this guide, we will cover how you can create the hardware and
            software for an Arduino LED rave mask. _Feel free to refer to [the
            GitHub repository for this Arduino
            project](https://github.com/ArmaizAdenwala/arduino-led-mask)._
          </Paragraph>
          <Title>Creating the project structure</Title>
          <Paragraph>Create the project root directory:</Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ mkdir python-ocr-tutorial
$ cd python-ocr-tutorial`}
          </CodeBlock>
          <Paragraph>
            `mkdir python-ocr-tutorial`: creates our root directory
          </Paragraph>
          <Paragraph>
            `cd python-ocr-tutorial`: changes current directory to our project
            directory
          </Paragraph>
          <Paragraph>Create our project folders:</Paragraph>
          <CodeBlock
            useHighlight
            language="shell"
          >{`$ mkdir html data utils`}</CodeBlock>
          <Paragraph>
            `mkdir html`: our html folder where our html would output to
          </Paragraph>
          <Paragraph>
            `mkdir data`: our data folder where our images will be
          </Paragraph>
          <Paragraph>
            `mkdir utils`: our utils package where we will keep all of our
            utility functions
          </Paragraph>
          <Paragraph>Create our project files:</Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ touch utils/utils.py utils/__init__.py main.py requirements.txt Makefile`}
          </CodeBlock>
          <Paragraph>
            `touch`: command that creates / updates modified date for a file
          </Paragraph>
          <Paragraph>
            `touch utils/utils.py`: creates our utils file where our util
            functions will live
          </Paragraph>
          <Paragraph>
            `touch utils/__init__.py`: tells python that `utils` should be
            treated as a package
          </Paragraph>
          <Paragraph>
            `touch main.py`: creates the file that will call our utils functions
          </Paragraph>
          <Paragraph>
            `touch requirements.txt`: creates the file that tells `pip` / `pip3`
            what packages we need to be installed
          </Paragraph>
          <Paragraph>
            `touch Makefile`: creates the Makefile that will help us run
            important tasks like `run`, `test`, and `clean`
          </Paragraph>
          <Title>Setting Up Our Libraries</Title>
          <Paragraph>In `requirements.txt` add the following:</Paragraph>
          <CodeBlock
            useHighlight
            language="shell"
          >{`pytesseract==0.3.2`}</CodeBlock>
          <Paragraph>
            `pytesseract`: Google's library that allows us to scan images using
            OCR and extract that data into a string
          </Paragraph>
          <Paragraph>Update your Makefile:</Paragraph>
          <CodeBlock language="makefile">
            {`init:
	pip3 install -r requirements.txt`}
          </CodeBlock>
          <Paragraph>
            `init`: this is the name of the command that can be called via `$
            Make init`. The name could be anything.
          </Paragraph>
          <Paragraph>
            `pip3 install -r requirements.txt`: pip3 is python 3's package
            installer. _(you may need to use `pip` if you do not have `python
            3`)_
          </Paragraph>
          <Paragraph>
            `-r requirements.txt`: This is a requirement option for `pip3`. The
            `requirements.txt` file contains the list of dependencies that pip3
            needs to install. Run `pip3 help install` for more info.
          </Paragraph>
          <Paragraph>Run `$ Make init`:</Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ Make init
pip3 install -r requirements.txt
Processing /Users/.../Caches/pip/...
...
Collecting Pillow
...
Installing collected packages: Pillow, pytesseract
Successfully installed Pillow-7.0.0 pytesseract-0.3.2`}
          </CodeBlock>
          <Paragraph>
            _Note: When installing Python dependencies, it would be ideal to use
            `virtualenv`, however, for guide we will not cover that._
          </Paragraph>
          <Paragraph>
            If you noticed, `$ Make init` installed `Pillow` automatically. This
            is because `pytesseract` requires it and it installs it
            automatically. You can view more info about libraries installed
            through `pip3` by running `$ pip3 show PACKAGE_NAME` in terminal
            (not the python console):
          </Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ pip3 show pytesseract
Name: pytesseract
Version: 0.3.2
...
Location: /usr/local/lib/python3.7/site-packages
Requires: Pillow`}
          </CodeBlock>
          <Paragraph>
            From this, we can see that this library requires `Pillow` which is a
            fork of `PIL` (Python Imaging Library). This library allows us to
            pass a path to an image to pytesseract and it will automatically
            process it for us.
          </Paragraph>
          <Paragraph>
            The issue with our requirements.txt is that it is prone to
            installing different `Pillow` versions. If this project is setup on
            a different device, the `Pillow` dependency will install the latest
            version. While it is nice to use the newest releases, updating
            dependencies should be done intentionally, not automatically to
            prevent apps from breaking. We should uninstall `Pillow`, update our
            `requirements.txt` to specifically install `Pillow 7.0.0`, and run
            `$ Make install`.
          </Paragraph>
          <Paragraph>
            Uninstall `Pillow` using the `$ pip3 uninstall PACKAGE_NAME`
            command:
          </Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ pip3 uninstall Pillow
Uninstalling Pillow-7.0.0:
  Would remove:
    /usr/local/lib/python3.7/site-packages/PIL/*
    /usr/local/lib/python3.7/site-packages/Pillow-7.0.0.dist-info/*
Proceed (y/n)? y
  Successfully uninstalled Pillow-7.0.0`}
          </CodeBlock>
          <Paragraph>Update `requirements.txt`:</Paragraph>
          <CodeBlock useHighlight language="shell">
            {`pytesseract==0.3.2
Pillow==7.0.0`}
          </CodeBlock>
          <Paragraph>Install dependencies:</Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ Make init
pip3 install -r requirements.txt
...
Collecting Pillow==7.0.0
...
Installing collected packages: Pillow
Successfully installed Pillow-7.0.0`}
          </CodeBlock>
          <Title>Trying out Tesseract</Title>
          <Paragraph>
            Before we cover our program, we should take a close look at
            `tesseract` and `pytesseract` to understand the core of our project.
          </Paragraph>
          <Paragraph>
            First, populate the `data` folder. Download the `data` folder from
            the image-to-html repo and place the contents in our data folder.
            That means all of the `jpg` images go inside
            `python-ocr-tutorial/data/`
          </Paragraph>
          <Paragraph>Start python with `$ python3`:</Paragraph>
          <CodeBlock language="python">
            {`python3
Python 3.7.6 (default, Dec 30 2019, 19:38:28)
[Clang 11.0.0 (clang-1100.0.33.16)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>>`}
          </CodeBlock>
          <Paragraph>
            _Note: I will be using `python3` for this guide, `python` (older
            versions) should work as well._
          </Paragraph>
          <Paragraph>
            We need to tell python to import the pytesseract library:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> import pytesseract
>>>`}
          </CodeBlock>
          <Paragraph>
            If we see no errors, it means that we have successfully imported
            `pytesseract`.
          </Paragraph>
          <Paragraph>
            If you do see an error, you may need to install `tesseract`. For
            this guide, I have using `4.1.1` which allows us to use their newer
            Neural nets LSTM engine. `pytesseract` will automatically use the
            OCR engine based on what's available.
          </Paragraph>
          <Paragraph>
            The `pytesseract` library provides us with the `image_to_string`
            method that allows us to pass in a path to an image or an image
            object. The library will scan an image and return the text it
            recognizes from the image. We can try scanning our first image from
            the dataset (`./data/python_dataset_01.jpg`):
          </Paragraph>
          <CodeBlock language="python">
            {`>>> pytesseract.image_to_string('./data/python_dataset_01.jpg')
'Chapter 1: Lorem\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi ...Praesent ut diam aliquet, dapibus felis in,'
>>>`}
          </CodeBlock>
          <Paragraph>
            After a few seconds, the text from the image should be returned.
            Keep in mind that OCR is not perfect, our dataset is fortunately
            very ideal for OCR as it is oriented correctly and has text that is
            very clear and consistent.
          </Paragraph>
          <Paragraph>
            We won't worry about it much in this guide, but tesseract allows us
            to configure which OCR engine mode and page segmentation mode to
            use. Run `tesseract --help-extra` to see our options:
          </Paragraph>
          <Paragraph></Paragraph>
          <Paragraph></Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <a
                className="button__text"
                href="https://github.com/ArmaizAdenwala/arduino-led-mask"
              >
                VIEW ON GITHUB
              </a>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
