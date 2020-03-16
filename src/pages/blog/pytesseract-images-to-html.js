import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../components/general';
import Layout from '../../components/layout';
import { Title, Paragraph, CodeBlock } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import CoverImage from './images/ocr/pytesseract-convert-image-to-html-site.png';
import CoverImageBlur from './images/ocr/pytesseract-convert-image-to-html-site_blur.png';
import LoremHtmlImg from './images/ocr/basic-ocr-to-html-page.png';
import Chapter1LoremHtmlImg from './images/ocr/chapter-1-image-to-webite.png';
import Chapter2HtmlImg from './images/ocr/chapter-2-full-page.png';
import Chapter2StyledImg from './images/ocr/chapter-2-styled-page.png';
import NavImg from './images/ocr/custom-navigation-using-python.png';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Using Pytesseract To Convert Images Into A HTML Site"
      canonical="https://armaizadenwala.com/blog/pytesseract-images-to-html/"
      secondaryTitle="Armaiz"
      image={CoverImage}
      description="Convert images to a string with Google Tesseract and then into a static HTML site using python"
      ldJson={{
        '@context': 'http://schema.org',
        '@type': 'TechArticle',
        name: 'Using Pytesseract To Convert Images Into A HTML Site',
        headline: 'Using Pytesseract To Convert Images Into A HTML Site',
        alternativeHeadline:
          'Convert Scanned Documents Into An HTML Site Using OCR',
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': 'https://armaizadenwala.com/blog/pytesseract-images-to-html/',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                item: {
                  '@id': 'https://armaizadenwala.com/',
                  name: 'Home',
                },
              },
              {
                '@type': 'ListItem',
                position: 2,
                item: {
                  '@id': 'https://armaizadenwala.com/blog/',
                  name: 'Blog',
                },
              },
              {
                '@type': 'ListItem',
                position: 3,
                item: {
                  '@id':
                    'https://armaizadenwala.com/blog/pytesseract-images-to-html/',
                  name: 'Using Pytesseract To Convert Images Into HTML',
                },
              },
            ],
          },
        },
        publisher: {
          '@type': 'Organization',
          name: 'Armaiz Adenwala',
          logo: {
            '@type': 'imageObject',
            url: 'https://armaizadenwala.com/armaiz-developer-full.png',
          },
        },
        wordcount: '6016',
        editor: 'Armaiz Adenwala',
        author: {
          '@type': 'Person',
          name: 'Armaiz Adenwala',
        },
        datePublished: '2020-03-07',
        dateModified: '2020-03-07',
        description:
          'Convert images to a string with Google Tesseract and then into a static HTML site using Python',
        articleBody:
          "Using Google's Tesseract OCR library, we will scan images from a dataset and create a HTML website out of it with navigation. We will be covering an array of topics including the Pytesseract library, Google's Tesseract library, Makefiles, regex, and more. This post is to serve as an introduction to the power of neural networks through basic OCR.",
        url: 'https://armaizadenwala.com/blog/pytesseract-images-to-html/',
      }}
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Using Pytesseract To Convert Images Into A HTML Site"
      description="Convert images to a string with Google Tesseract and then into a static HTML site using Python"
      date="March 7th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/' },
            {
              name: 'PYTESSERACT IMAGES TO HTML',
              url: '/blog/pytesseract-images-to-html/',
            },
          ]}
        />
        <div className="blog__card">
          <LazyLoadImage
            className="cover-image"
            wrapperClassName="cover-image"
            src={CoverImage}
            effect="blur"
            placeholderSrc={CoverImageBlur}
            alt="Using Pytesseract to convert images into a HTML site by Armaiz Adenwala."
          />
          <Title first>Overview</Title>
          <Paragraph>
            Using Google's Tesseract OCR library, we will scan images from a
            dataset and create a HTML website out of it with navigation. We will
            be covering an array of topics including the __Pytesseract__
            library, Google's __Tesseract__ library, __Makefiles__, __regex__,
            and more. This post is to serve as an introduction to the power of
            neural networks through basic OCR.
          </Paragraph>
          <Paragraph>
            [View a video of the project in action
            here](https://www.youtube.com/watch?v=nl7Zi-7YnoI).
          </Paragraph>
          <Paragraph>
            _Feel free to follow along by refering to [the GitHub repository for
            this Python OCR
            project](https://github.com/ArmaizAdenwala/image-scans-to-html) The
            datasets and the `styles.css` file are within this repository._
          </Paragraph>
          <Title>Creating the project structure</Title>
          <Paragraph>Create the project root directory:</Paragraph>
          <CodeBlock language="bash">
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
          <CodeBlock language="bash">{`$ mkdir html data utils`}</CodeBlock>
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
          <CodeBlock language="bash">
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
            `touch utils/__init__.py`: tells Python that `utils` should be
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
          <Paragraph>
            We will first need to download `Tesseract`. `Pytesseract` is a
            wrapper for Google's library. Which means it serves as a bridge from
            Python to `Tesseract`. In order for the Python library to work, you
            need to [install the Tesseract library through Google's install
            guide](https://tesseract-ocr.github.io/tessdoc/Home.html).
          </Paragraph>
          <Paragraph>In `requirements.txt` add the following:</Paragraph>
          <CodeBlock language="bash">{`pytesseract==0.3.2`}</CodeBlock>
          <Paragraph>
            `pytesseract`: A wrapper for Google's Tesseract OCR library that
            allows us to scan images and extract that data into a string
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
            `pip3 install -r requirements.txt`: `pip3` is Python 3's package
            installer. _(you may need to use `pip` if you do not have `python
            3`)_
          </Paragraph>
          <Paragraph>
            `-r requirements.txt`: This is a requirement option for `pip3`. The
            `requirements.txt` file contains the list of dependencies that
            `pip3` needs to install. You can run `$ pip3 help install` for more
            info.
          </Paragraph>
          <Paragraph>Run `$ Make init`:</Paragraph>
          <CodeBlock language="bash">
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
            `virtualenv`, however, for this guide we will not cover that._
          </Paragraph>
          <Paragraph>{`> Make will throw an error if you use spaces instead of tabs. Some IDEs automatically converts tabs into spaces. You will have to turn that off or use \`nano\` or \`vim\`.

> You can verify if the file is valid by running \`$ cat -e -t -v Makefile\`. If you see \`^I\` before each line, that means it is valid and is using tabs. If you only see spaces, then you need to convert them into tabs.
          `}</Paragraph>
          <Paragraph>
            If you noticed, `$ Make init` installed `Pillow` automatically. This
            is because `pytesseract` requires it and it installs it for us. You
            can view more info about libraries installed through `pip3` by
            running `$ pip3 show PACKAGE_NAME` in terminal (not the Python
            console):
          </Paragraph>
          <CodeBlock language="bash">
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
            pass a path to an image to `pytesseract` and automatically process
            it for us.
          </Paragraph>
          <Paragraph>
            The issue with our `requirements.txt` is that it is prone to
            installing different `Pillow` versions. If this project is setup on
            a different device, the `Pillow` dependency will install the latest
            version. While it is nice to use the newest release, updating
            dependencies should be done intentionally, not automatically to
            prevent apps from breaking. We should uninstall `Pillow`, update our
            `requirements.txt` to specifically install `Pillow 7.0.0`, and run
            `$ Make init`.
          </Paragraph>
          <Paragraph>
            Uninstall `Pillow` using the `$ pip3 uninstall PACKAGE_NAME`
            command:
          </Paragraph>
          <CodeBlock language="bash">
            {`$ pip3 uninstall Pillow
Uninstalling Pillow-7.0.0:
  Would remove:
    /usr/local/lib/python3.7/site-packages/PIL/*
    /usr/local/lib/python3.7/site-packages/Pillow-7.0.0.dist-info/*
Proceed (y/n)? y
  Successfully uninstalled Pillow-7.0.0`}
          </CodeBlock>
          <Paragraph>Update `requirements.txt`:</Paragraph>
          <CodeBlock language="bash">
            {`pytesseract==0.3.2
Pillow==7.0.0`}
          </CodeBlock>
          <Paragraph>Install dependencies:</Paragraph>
          <CodeBlock language="bash">
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
            the
            [image-to-html](https://github.com/ArmaizAdenwala/image-scans-to-html)
            repo and place the contents in our data folder. That means all of
            the `jpg` images go inside `python-ocr-tutorial/data/`
          </Paragraph>
          <Paragraph>Start Python with `$ python3`:</Paragraph>
          <CodeBlock language="python">
            {`$ python3
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
            We need to tell Python to import the `pytesseract` library:
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
            OCR engine based on what's available. [Visit Google's tessearct
            install guide](https://tesseract-ocr.github.io/tessdoc/Home.html).
          </Paragraph>
          <Paragraph>
            The `pytesseract` library provides us with the `image_to_string`
            method that allows us to pass in a path to an image or an image
            object. The library will scan an image and return the text it
            recognizes from the image. If no text is found, nothing would be
            returned. We can try scanning our first image from the dataset
            (`./data/python_dataset_01.jpg`):
          </Paragraph>
          <CodeBlock language="python">
            {`>>> pytesseract.image_to_string('./data/python_dataset_01.jpg')
'Chapter 1: Lorem\\n\\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisi ...Praesent ut diam aliquet, dapibus felis in,'
>>>`}
          </CodeBlock>
          <Paragraph>
            After a few seconds, the text from the image should be returned.
            Keep in mind that OCR is not perfect, our dataset is fortunately
            very ideal for OCR as it is oriented correctly and has text that is
            very clear and consistent.
          </Paragraph>
          <Paragraph>
            We won't worry about it much in this guide, but `tesseract` allows
            us to configure which OCR engine mode and page segmentation mode to
            use. Run `$ tesseract --help-extra` to see our options:
          </Paragraph>
          <CodeBlock language="bash">
            {`$ tesseract --help-extra
# ...
OCR options:
  # ...
  --psm NUM             Specify page segmentation mode.
  --oem NUM             Specify OCR Engine mode.
Page segmentation modes:
  0    Orientation and script detection (OSD) only.
  1    Automatic page segmentation with OSD.
  2    Automatic page segmentation, but no OSD, or OCR. (not implemented)
  3    Fully automatic page segmentation, but no OSD. (Default)
  4    Assume a single column of text of variable sizes.
  5    Assume a single uniform block of vertically aligned text.
  6    Assume a single uniform block of text.
  7    Treat the image as a single text line.
  8    Treat the image as a single word.
  9    Treat the image as a single word in a circle.
 10    Treat the image as a single character.
 11    Sparse text. Find as much text as possible in no particular order.
 12    Sparse text with OSD.
 13    Raw line. Treat the image as a single text line,
       bypassing hacks that are Tesseract-specific.

OCR Engine modes:
  0    Legacy engine only.
  1    Neural nets LSTM engine only.
  2    Legacy + LSTM engines.
  3    Default, based on what is available.
# ...`}
          </CodeBlock>
          <Paragraph>
            From here, we can see that we have plenty of options to pass to the
            `--psm` and `--oem` config options. We can pass these options
            through `pytesseract` by using the `config` parameter in our
            `image_to_string` method. Here is an example of intentionally using
            the wrong psm (I set it to expect vertically aligned text):
          </Paragraph>
          <CodeBlock language="python">
            {`>>> pytesseract.image_to_string('./data/python_dataset_01.jpg', config="--psm 5")
"=\\n5\\nLEE:\\nce\\nae\\not\\nnH\\nHite\\noo. =\\nnda ...a5\\nicees 3 3\\nor _ 8s\\nbaka gs\\nGas g\\n528 Ze\\n© © 5\\nEe 52\\n> 28\\nzo\\n2"`}
          </CodeBlock>
          <Paragraph>
            The text is unreadable due to `Tesseract` reading the documment
            vertically.
          </Paragraph>
          <Title>Overview Of The Utils File</Title>
          <Paragraph>
            We will have the following methods in our `utils.py` file:
          </Paragraph>
          <Paragraph>
            `extract`: finds all of the images in the `data` folder and returns
            an array containing each line from all of the images
          </Paragraph>
          <Paragraph>
            `build_chapters`: builds a hash where the keys are the chapter
            titles and the value of each key is a string equal to the contents
            of the chapter
          </Paragraph>
          <Paragraph>
            `get_chapter_file`: converts a chapter string into the appropriate
            html file name (`Chapter 1: Hello World` would equal to
            `hello-world.html` )
          </Paragraph>
          <Paragraph>
            `build_html_file`: converts a key and value pair from the
            `build_chapters` method into a html page
          </Paragraph>
          <Paragraph>
            `convert_chapter_to_spinal`: converts a chapter name into
            spinal-case ("Hello World" becomes "hello-world")
          </Paragraph>
          <Title>Creating The Extract Method:</Title>
          <Paragraph>
            The extract method's goal is to return an array of lines from all of
            the images in the `data` folder. So the first step is to figure out
            which files that we will need to run through `tesseract`. We can do
            this through the built-in `glob` package. We can pass a pattern to
            the `glob` library and it will return a list of files that match to
            it, similar to the `ls` command.
          </Paragraph>
          <Paragraph>
            __Globbing__ refers to the process that unix carrys out filename
            expansions. It is not regular expression, though it can be similar.
            `glob` uses the unix style pathname pattern expansion which we won't
            use for anything complex. In fact, we just need to use a simple
            wildcard (`*`). If we want to get a list of the jpg images in the
            `data` folder, we just need to use this pattern: `data/*.jpg`. This
            grabs any file path that is within the `data` folder and ends with
            `.jpg`. The `*` could be any string.
          </Paragraph>
          <Paragraph>
            We can test this out by using the `glob` method from the `glob`
            library. In the Python console, import the `glob` library and run
            the pattern above using the `glob` method:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> import glob
>>> glob.glob('data/*.jpg')
['data/python_dataset_16.jpg', ... 'data/python_dataset_33.jpg']
>>>`}
          </CodeBlock>
          <Paragraph>
            _Note: be sure to run this in the root directory of the project, not
            within the data folder_
          </Paragraph>
          <Paragraph>
            We can loop through this array of filepaths, run it through
            `tesseract`, and append it into one giant string which we can then
            break into an array, line by line. Here is the full `extract`
            method:
          </Paragraph>
          <CodeBlock language="python">
            {`import pytesseract
import glob


def extract(path='./data/*.jpg'):
    pages = glob.glob(path)
    pages.sort()

    text = ''

    for page in pages:
        print('extracting: {}'.format(page))
        image_string = pytesseract.image_to_string(page)
        text += image_string

    lines = text.split('\\n')
    return lines`}
          </CodeBlock>
          <Paragraph>
            `import ...`: imports the pytesseract and glob libraries
          </Paragraph>
          <Paragraph>`def extract`: creates the extract method</Paragraph>
          <Paragraph>
            `(path='./data/*.jpg')`: The `extract` method takes in a `path`
            parameter that defaults to the path we tested above. This will allow
            us to use a smaller and consistent dataset in our tests.
          </Paragraph>
          <Paragraph>
            `pages = glob.glob(path)`: this retrieves an array of filepaths for
            the pages/files in our dataset. It then assigns it to the `pages`
            variable
          </Paragraph>
          <Paragraph>
            `pages.sort()`: glob does not guarantee that the files are returned
            in the right order. We want to sort this array in alphanumeric order
            so that an earlier page does not come after a later page. Keep in
            mind that `sort()` mutates the array, it does not return a new
            array:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> a = [1, 2, 4, 3]
>>> a
[1, 2, 4, 3]
>>> a.sort()
>>> a
[1, 2, 3, 4]`}
          </CodeBlock>
          <Paragraph>
            `text = ''` : we instantiate the `text` string to be blank. We will
            append the strings that `tesseract` extracts from all our images to
            the `text` variable.
          </Paragraph>
          <Paragraph>
            `for page in pages:`: this loops through the `pages` variable we
            have above. The `page` variable refers to the current filepath the
            loop is currently on
          </Paragraph>
          <Paragraph>
            `print(...)`: This prints the current status to the console, since
            we have a large dataset, it is good to know which page it is on.
          </Paragraph>
          <Paragraph>
            {
              "`'extracting: {}'.format(page)`: `format` will replace `{}` with the variable we pass in (`page`)."
            }
          </Paragraph>
          <Paragraph>
            `image_string = pytesseract.image_to_string(page)`: this OCRs the
            current page and assigns the string to the `image_string` variable
          </Paragraph>
          <Paragraph>
            `text += image_string`: this appends `image_string` to `text`. This
            means that `text` will be an extremely large string containing all
            of the text from our images, like one large document.
          </Paragraph>
          <Paragraph>
            `lines = text.split('\n')`: the `split` method is part of the string
            class where you can create an array of strings at breakpoints within
            a string. For example, `\n` means new line which `tesseract` returns
            for each line. We want to iterate through these seperately so we
            should create a breakpoint for `\n`.
          </Paragraph>
          <Paragraph>Here is an example of the `split` command:</Paragraph>
          <CodeBlock language="python">
            {`>>> lines = 'line1\nline2\nline3'
>>> lines.split('\n')
['line1', 'line2', 'line3']`}
          </CodeBlock>
          <Paragraph>
            `return lines`: this returns the array of lines from all of the
            documents. We will use this array to build our chapters hash.
          </Paragraph>
          <Paragraph>
            _Note: There are two blank lines above the method to follow `pep8`
            standards_
          </Paragraph>
          <Title>Testing Our extract Method:</Title>
          <Paragraph>
            Since the `extract` method goes through all 40+ images, we should
            lower that amount temporarily for testing purposes. We can slice an
            array to only the first 3 items by using `[:3]`. The colon ( `:`)
            tells Python to extract everything before index `3` .
          </Paragraph>
          <Paragraph>
            We can update the `pages` variable to only loop through a few
            images:
          </Paragraph>
          <CodeBlock language="python">
            {`# ...
pages.sort()
pages = pages[:3]
# ...`}
          </CodeBlock>
          <Paragraph>
            Now that our temporary fix is in place, we can test the library in
            the Python console:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import extract
>>> extract()
extracting: data/python_dataset_01.jpg
extracting: data/python_dataset_02.jpg
extracting: data/python_dataset_03.jpg
['Chapter 1: Lorem', '', ... 'fermentum porta risus.']
>>>`}
          </CodeBlock>
          <Paragraph>
            `from utils.utils import extract`: This tells Python that we want to
            `import` the `extract` method from `utils/utils.py`. The first
            `utils` refers to the package name (due to the `__init__.py` file)
            and the second `utils` refers to the `utils.py` file.
          </Paragraph>
          <Paragraph>
            If a very large array was returned, your `extract` method works as
            intended!
          </Paragraph>
          <Title>Creating the build_chapters Method</Title>
          <Paragraph>
            Our goal of this method is to convert the array from the `extract()`
            method into a hash of chapters.
          </Paragraph>
          <Paragraph>For example, lines would become chapters here:</Paragraph>
          <CodeBlock language="bash">
            {`lines = ['Chapter 1: Lorem', 'line 1', 'line 2', 'Chapter 2: Ipsum', 'line 3']
build_chapters(lines) # {'Chapter 1: Lorem': 'line 1\\nline2', 'Chapter 2: Ipsum', 'line 3'}`}
          </CodeBlock>
          <Paragraph>
            In order to achieve this, we need to recognize which line is a
            chapter and which one is a normal line. We can tell if a string is a
            chapter if it starts with `Chapter NUMBER:`. Fortunately, regular
            expressions can be used to see if a string matches a "chapter"
            pattern. We will do this through the built-in `re` library:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> import re
>>> re.match(r"^(Chapter [0-9]+:)", 'Chapter 1: Lorem')
<re.Match object; span=(0, 10), match='Chapter 1:'>
>>> re.match(r"^(Chapter [0-9]+:)", 'Ipsum')
>>>`}
          </CodeBlock>
          <Paragraph>
            `import re`: imports the built-in Python regex library
          </Paragraph>
          <Paragraph>
            `re.match` the match method will return an object if the string
            matches with the pattern provided
          </Paragraph>
          <Paragraph>
            `r"^(Chapter [0-9]+:)"`: This is the regular expression pattern that
            checks for `Chapter NUMBER:`, we will cover what this means soon
          </Paragraph>
          <Paragraph>
            `'Chapter 1: Lorem'`: this is the string we want to check against
          </Paragraph>
          <Paragraph>
            {
              '`<re.Match object..>`: The object that is returned when a match is found'
            }
          </Paragraph>
          <Paragraph>
            `re.match(..., 'Ipsum')`: Nothing is returned from this because it
            is not a chapter
          </Paragraph>
          <br />
          <Paragraph>
            Here is a breakdown of the ``r"^(Chapter [0-9]+:)"`` pattern:
          </Paragraph>
          <Paragraph>`r`: signifies that it is a regular expression</Paragraph>
          <Paragraph>
            `^`: indicates that the string starts with the pattern so `Lorem
            chapter 1: ipsum` won't match. For the sake of this project, we will
            assume that `tesseract` will OCR the chapters correctly
          </Paragraph>
          <Paragraph>
            `(...)` : indicates the pattern that should be applied to `^`
          </Paragraph>
          <Paragraph>
            `Chapter `: tells the pattern to look for `Chapter ` in the string
          </Paragraph>
          <Paragraph>
            `[0-9]`: tells the pattern to look for a number between `0` to `9`
            in this position
          </Paragraph>
          <Paragraph>
            `+` : tells the pattern to look for one or more of the pattern
            before it. In this case it looks for one or more `0-9`
          </Paragraph>
          <Paragraph>`:`: tells the pattern to look for `:`</Paragraph>
          <br />
          <Paragraph>
            Here is the general workflow of the `build_chapters` method:
          </Paragraph>
          <Paragraph>
            {`1. create a blank chapters hash and a string for the current chapter key
2. loop through each line
3. if it is a chapter, update the current chapter_key
4. if it is not a chapter, append it to the current chapter key's value
5. return chapters hash`}
          </Paragraph>
          <Paragraph>Here is the `build_chapters` method:</Paragraph>
          <CodeBlock language="python">
            {`import re
# ...
def build_chapters(lines):
    chapters = {}
    cur_chapter = 'Intro'
    for line in lines:
        is_chapter = re.match(r"^(Chapter [0-9]+:)", line)

        if is_chapter:
            cur_chapter = line
        elif cur_chapter in chapters.keys():
            content = '{}\\n'.format(line)
            chapters[cur_chapter] += content
        else:
            content = '{}\\n'.format(line)
            chapters[cur_chapter] = content

    return chapters`}
          </CodeBlock>
          <Paragraph>
            `import re`: imports the regex library. This should at the top of
            the file with the other imports
          </Paragraph>
          <Paragraph>
            `def build_chapters(lines)`: defines the `build_chapters` method and
            has `lines` as the parameter
          </Paragraph>
          <Paragraph>
            {'`chapters = {}`: instantiates a blank chapters hash'}
          </Paragraph>
          <Paragraph>
            `cur_chapter = 'Intro'`: assigns `intro` to `cur_chapter`. This is
            only a fallback in the case that the document does not start with a
            chapter line. So any non-chapter line that occurs before the first
            chapter line would be assigned under the `intro` key
          </Paragraph>
          <Paragraph>`for line in lines:`: loops through the lines</Paragraph>
          <Paragraph>
            `is_chapter = re.match(...)`: checks if the current line is a
            chapter using the regex pattern we used before
          </Paragraph>
          <Paragraph>
            `if is_chapter`: we will handle chapter lines differently from
            non-chapter lines so we use an if statement
          </Paragraph>
          <Paragraph>
            `cur_chapter = line`: this line tells our method that it is done
            with the last chapter, and the content that follows will be for the
            next chapter. (ex. `Chapter 1: Lorem` -> `Chapter 2: Ipsum`)
          </Paragraph>
          <Paragraph>
            `elif cur_chapter in chapters.keys():`: This checks if `cur_chapter`
            is a key in our hash. If a key/value pair has already been
            instantiated, we can just append a line to the current value. We
            can't use `cur_chapter in chapters` because we won't be checking
            against an array of keys. So we use the `chapters.keys()` method
            which returns an array of keys.
          </Paragraph>
          <Paragraph>
            {
              "`content = '{}\\n'.format(line)`: builds our content string to add a new line (`\\n`). `chapters[cur_chapter] += content`: Since we know that `cur_chapter` exists in `chapters`, we can append it to its current value using the `+=` operator."
            }
          </Paragraph>
          <Paragraph>
            `else:`: if the content is not in the string, then we will
            instantiate the key/value pair
          </Paragraph>
          <Paragraph>
            {
              "`content = '{}\\n'.format(line)`: same as above. It is important to no repeat code (DRY), however, in this case it was only repated twice so it is not that bad. Otherwise we should extract it to a method or refactor our method. Since it is only one simple line, we won't need to worry about it."
            }
          </Paragraph>
          <Paragraph>
            `chapters[cur_chapter] = content`: since the key/value pair doesn't
            exist we would need to create it using the `=` operator. This line
            will only occur once per chapter.
          </Paragraph>
          <Paragraph>
            `return chapters`: return the hash of chapters we created
          </Paragraph>
          <Title>Testing build_chapters</Title>
          <Paragraph>
            In the Python console, lets pass the result of our `extract()`
            method into our `build_chapters` method:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import extract, build_chapters
>>> lines = extract()
extracting: data/python_dataset_01.jpg
extracting: data/python_dataset_02.jpg
extracting: data/python_dataset_03.jpg
>>> chapters = build_chapters(lines)
>>> chapters
{'Chapter 1: Lorem': '\\nLorem ...\\n', 'Chapter 2: lpsum': '\\nFusce ...'}
>>> chapters.keys()
dict_keys(['Chapter 1: Lorem', 'Chapter 2: lpsum', 'Chapter 3: Dolor'])`}
          </CodeBlock>
          <Paragraph>
            _Note: be sure to save the utils file and restart the Python
            console_
          </Paragraph>
          <Paragraph>
            If you can see a dict of keys for each chapter, then your function
            works correctly!
          </Paragraph>
          <Title>
            Creating The convert_chapter_to_spinal method And
            InvalidChapterException
          </Title>
          <Paragraph>
            Before we work on converting the chapters hash into html, we have
            some helper methods to create. First, we need to build the
            `convert_chapter_to_spinal` method. In addition, we will create a
            custom exception called `InvalidChapterException`.
          </Paragraph>
          <Paragraph>
            Our `convert_chapter_to_spinal` method converts a chapter key such
            as `Chapter 1: Lorem Ipsum Dolor` into spinal case without the
            chapter portion: `lorem-ipsum-dolor`
          </Paragraph>
          <Paragraph>Here is our `convert_chapter_to_spinal` method:</Paragraph>
          <CodeBlock language="python">
            {`def convert_chapter_to_spinal(chapter):
    name = re.sub(r"^(Chapter [0-9]+: )", '', chapter)
    if name == chapter:
        raise InvalidChapterException
    name = name.lower().replace(' ', '-')
    return name`}
          </CodeBlock>
          <Paragraph>
            `def convert_chapter_to_spinal(chapter):`: defines our method and
            takes a string called `chapter` as a parameter
          </Paragraph>
          <Paragraph>
            `re.sub(.., '', chapter)`: The regex library offers a `sub` method
            to replace matches using regex. This uses the pattern we created
            above to find that match and remove it from `chapter` and then
            assign it to `name`. You don't have to do this, but I wanted to keep
            the html urls short and easier to read. The first parameter is the
            pattern, the 2nd parameter is what we replace it with, and the last
            one is what we are checking against.
          </Paragraph>
          <Paragraph>
            `if name == chapter:`: At the point, chapter should be `Chapter 1:
            Lorem`, and the `name` variable should be `lorem`. If the `re.sub`
            method didn't work, then `name` should be equal to chapter since
            nothing was replaced. If the string isn't a valid chapter, it should
            throw an error.
          </Paragraph>
          <Paragraph>
            `raise InvalidChapterException`: this raises a custom exception, we
            will cover how this works shortly. When an exception is raised, it
            goes to the method that calls it. The method will throw an exception
            if it doesn't catch it (by wrapping it in a `try` `except`)
          </Paragraph>
          <Paragraph>
            `name = name.lower().replace(' ', '-')`: This cleans up our `name`
            string. It converts `Lorem Ipsum` into `lorem-ipsum`. The `lower()`
            method converts are sting to lowercase and `.replace` replaces all
            spaces (`' '`) with a dash (`-`).
          </Paragraph>
          <Paragraph>
            `return name`: we then return the name we created.
          </Paragraph>
          <Paragraph>
            Here is the custom exception we create below the method:
          </Paragraph>
          <CodeBlock language="python">
            {`class InvalidChapterException(Exception):
    """Chapter name is invalid"""
    pass`}
          </CodeBlock>
          <Paragraph>
            `class InvalidChapterException(Exception):` creates a class named
            `InvalidChapterException` that inherits the `Exception` class.
          </Paragraph>
          <Paragraph>
            ` """Chapter name is invalid"""`: This is the message that will be
            returned if the exception is raised
          </Paragraph>
          <Paragraph>
            `pass`: we don't need anything in this exception since we inherit
            the `Exception` class
          </Paragraph>
          <Paragraph>
            Now, whenever we raise `InvalidChapterException`, it will refer to
            this exception.
          </Paragraph>
          <Title>
            Testing Convert_chapter_to_spinal And InvalidChapterException
          </Title>
          <Paragraph>
            Restart the Python console and try passing strings to the new
            `convert_chapter_to_spinal` method:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import convert_chapter_to_spinal
>>> convert_chapter_to_spinal('Chapter 1: Lorem')
'lorem'
>>> convert_chapter_to_spinal('Chapter 2: Lorem Ipsum')
'lorem-ipsum'
>>> convert_chapter_to_spinal('Dolor Sit')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File ".../utils/utils.py", line 42, in convert_chapter_to_spinal
    raise InvalidChapterException
utils.utils.InvalidChapterException
>>>`}
          </CodeBlock>
          <Paragraph>
            We can see that the method converts are chapters appropriately and
            raises our custom error when an invalid chapter has been passed.
          </Paragraph>
          <Title>Creating The get_chapter_file Method</Title>
          <Paragraph>
            Our last helper method converts our chapter string into a file name:
          </Paragraph>
          <CodeBlock language="python">
            {`def get_chapter_file(chapter):
    chapter_spinal_case = convert_chapter_to_spinal(chapter)
    return '{}.html'.format(chapter_spinal_case)`}
          </CodeBlock>
          <Paragraph>
            `def get_chapter_file(chapter):`: Defines the `get_chapter_file`
            method and requires a `chapter` string as a parameter
          </Paragraph>
          <Paragraph>
            `convert_chapter_to_spinal(chapter)`: uses the helper method we
            created in the last section and assigns it to `chapter_spinal_case`
          </Paragraph>
          <Paragraph>
            {
              "` return '{}.html'.format(chapter_spinal_case)`: returns the converted chapter string as a html file name. `Chapter 1: Lorem` becomes `lorem.html`."
            }
          </Paragraph>
          <Paragraph>
            We can test this method by passing the same strings from the last
            helper method test:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import get_chapter_file
>>> get_chapter_file('Chapter 1: Lorem')
'lorem.html'
>>> get_chapter_file('Chapter 2: Lorem Ipsum')
'lorem-ipsum.html'
>>> get_chapter_file('Dolor Sit')
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File ".../utils/utils.py", line 53, in get_chapter_file
    chapter_spinal_case = convert_chapter_to_spinal(chapter)
  File ".../utils/utils.py", line 43, in convert_chapter_to_spinal
    raise InvalidChapterException
utils.utils.InvalidChapterException
>>>`}
          </CodeBlock>
          <Paragraph>
            We can see that the proper html file names are being returned. We
            can see where our error initially gets raised and going up the chain
            to the `get_chapter_file` method
          </Paragraph>
          <Title>Creating the build_html_files Method</Title>
          <Paragraph>
            We have one final method left which is to create the html files.
            Lets walk through creating one manually in the Python console:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import get_chapter_file
>>> chapters = {'Chapter 1: Lorem': 'content\n\nline2\n\nline3'}
>>> chapter_key = list(chapters)[0]
>>> chapter_file = get_chapter_file(chapter_key)
>>> content = chapters[chapter_key]
>>> file_name = '{0}{1}'.format('html/', chapter_file)
>>> html_file = open(file_name, 'w')
>>> html_file.write(content)
>>> html_file.close()`}
          </CodeBlock>
          <Paragraph>
            ` from utils.utils import get_chapter_file`: imports the
            `get_chapter_method`, we will just create mock data instead of using
            the other helper methods for now
          </Paragraph>
          <Paragraph>
            {
              "`{'Chapter 1: Lorem': 'content'}`: creates an example chapters dict"
            }
          </Paragraph>
          <Paragraph>
            `list(chapters)[0]`: we convert chapters into a list which will only
            return an array of keys. We do not use the `chapters.keys()` method
            for simplicity. In Python 3, `.keys()` returns `dict_keys` which are
            iteratable, but not indexible. This is because Python 3.6 and older
            do not order keys within our dict/hashes. They use less memory,
            however, we will use the less efficient route and convert it to a
            list. In this project, we won't need to look to much into being
            efficient, however, it is an important concept to keep in mind. We
            then take the list of keys, and retrieve the fist item by using
            `[0]`
          </Paragraph>
          <Paragraph>
            `get_chapter_file(chapter_key)`: this uses our helper method from
            before to retrieve our html file name which will be `lorem.html`.
          </Paragraph>
          <Paragraph>
            `chapters[chapter_key]`: retrieves the value of our key and assigns
            it to `content`
          </Paragraph>
          <Paragraph>
            {
              "`'{0}{1}'.format('html/', chapter_file)`: creates our html file path which will be `html/lorem.html`"
            }
          </Paragraph>
          <Paragraph>
            `html_file = open(file_name, 'w')`: this opens our html file which
            will allow us access to it. `w` means that we will just be writing
            to it.
          </Paragraph>
          <Paragraph>
            `html_file.write(content)`: this appends our `content` to our html
            file. When we open our html file, this is what we will see. In our
            actual method, we will have a html template.
          </Paragraph>
          <Paragraph>
            `html_file.close()`: this closes our html_file for writing, we want
            to do this on every iteration / file
          </Paragraph>
          <Paragraph>
            We can now see that our html file is created under
            `html/lorem.html`:
          </Paragraph>
          <LazyLoadImage
            className="full-width-img"
            src={LoremHtmlImg}
            alt='A basic html page for the lorem chapter that says "content".'
          />
          <Paragraph>
            This was a very simplified approach to our method, however, it is a
            good step towards understanding the overall idea of it. We are
            essentially retrieving a hash of chapters and looping through each
            key. Remember that each key is a chapter, where its value is the
            content for that chapter.
          </Paragraph>
          <Paragraph>
            So in every iteration, we have a chapter that we need to create a
            html file for. We get the name of the file, the chapter name, and
            the content of the chapter content through out helper methods. We
            open up our html file and pass in html code to our file. Once that
            is complete we close the file and move onto the next chapter until
            we are done. Lets take a look at our `build_html_files` method:
          </Paragraph>
          <CodeBlock language="python">
            {`def build_html_files(chapters, dest='html/'):
    for chapter in chapters.keys():
        chapter_file = get_chapter_file(chapter)
        file_name = '{0}{1}'.format(dest, chapter_file)
        html_file = open(file_name, 'w')
        paragraph = chapters[chapter].replace('\\n\\n', '<br/><br/>')
        content = """
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div>
            <h1>{0}</h1>
            <p>{1}</p>
        </div>
    </body>
</html>
""".format(chapter, paragraph)
        html_file.write(content)
        html_file.close()`}
          </CodeBlock>
          <Paragraph>
            `def build_html_files(chapters, dest='html/'):` creates our
            `build_html_files` method with `chapters` as a parameter and a
            `dest` as a paramater (Destination of the html folder, defualting to
            `html/`)
          </Paragraph>
          <Paragraph>
            {
              '`for chapter in chapters.keys():` : remember that `.keys()` returns `dict_keys` which are iteratable. So we can loop through each chapter key in our `chapters` variable'
            }
          </Paragraph>
          <Paragraph>
            `chapter_file = get_chapter_file(chapter)`: uses our helper method
            from before to get the chapter file name (ex. `lorem.html`)
          </Paragraph>
          <Paragraph>
            {
              "`file_name = '{0}{1}'.format(dest, chapter_file)`: builds the entire file path (ex. `html/lorem.html`)"
            }
          </Paragraph>
          <Paragraph>
            `html_file = open(file_name, 'w')`: opens the html file in write
            mode
          </Paragraph>
          <Paragraph>
            {
              "`chapters[chapter].replace('\\n\\n', '<br/><br/>')`:  this grabs the value of our chapters key and replaces the newlines with `<br/><br/>`. In html, the `<br/>` element refers to a linebreak, where two line breaks results in a blank line as spacing. This allows us to properly see the new lines (`\\n\\n`) in our html file. This is then assigned to `paragraph`."
            }
          </Paragraph>
          <CodeBlock language="python">
            {`content = """
  <html>
      <head>
          <link rel="stylesheet" href="styles.css">
      </head>
      <body>
          <div>
              <h1>{0}</h1>
              <p>{1}</p>
          </div>
      </body>
  </html>
""".format(chapter, paragraph)`}
          </CodeBlock>
          <Paragraph>
            {
              'This is our entire html file as a string. It is very basic which is all we need. We use triple quotes (`"""`) to signify that it a multiline html file. The `link` meta tag imports a `styles.css` file, which we will cover soon. `<h1>{0}</h1>` is where our chapter title will be and `<p>{1}</p>` is where our chapter content will be. `{0}` and `{1}` refer to the first and second param in the `format` method (`chapter`, `paragraph`). The entire html content is then assigned to `content`.'
            }
          </Paragraph>
          <Paragraph>
            `html_file.write(content)`: this writes our html content to the
            current html file.
          </Paragraph>
          <Paragraph>`html_file.close()`: this closes the html file.</Paragraph>
          <Title>Testing build_html_files</Title>
          <Paragraph>
            We can test the `build_html_files` function out now (we will create
            styles.css later).
          </Paragraph>
          <Paragraph>
            But, we still need to clear out our html folder. Add the `clean`
            command to your Makefile:
          </Paragraph>
          <CodeBlock language="makefile">
            {`init:
	pip3 install -r requirements.txt
clean:
	rm html/*.html`}
          </CodeBlock>
          <Paragraph>
            `rm` : this is the remove file command in the unix shell
          </Paragraph>
          <Paragraph>
            `html/*.html`: this is a pattern passed to `rm` that tells it to
            delete every html file in the html folder.
          </Paragraph>
          <Paragraph>Run `Make clean` to clean up our html folder.</Paragraph>
          <Paragraph>
            Start the Python terminal again and test our new method:
          </Paragraph>
          <CodeBlock language="python">
            {`>>> from utils.utils import build_html_files
>>> chapters = {'Chapter 1: Lorem': 'content\n\nline2\n\nline3'}
>>> build_html_files(chapters)
>>>`}
          </CodeBlock>
          <Paragraph>
            Open up the html folder, and view the `lorem.html` file:
          </Paragraph>
          <LazyLoadImage
            className="full-width-img"
            src={Chapter1LoremHtmlImg}
            alt='Basic HTML page that says "Chapter 1: Lorem. Content, line2, line 3. This is the screen generated by the python program.'
          />
          <Paragraph>
            At this point your `utils.py` file should look like:
          </Paragraph>
          <CodeBlock language="python">
            {`import pytesseract
import glob
import re


def extract(path='data/*.jpg'):
    pages = glob.glob(path)
    pages.sort()
    pages = pages[:3]

    text = ''

    for page in pages:
        print('extracting: {}'.format(page))
        image_string = pytesseract.image_to_string(page)
        text += image_string

    lines = text.split('\n')
    return lines


def build_chapters(lines):
    chapters = {}
    cur_chapter = 'Intro'
    for line in lines:
        is_chapter = re.match(r"^(Chapter [0-9]+:)", line)

        if is_chapter:
            cur_chapter = line
        elif cur_chapter in chapters.keys():
            content = '{}\n'.format(line)
            chapters[cur_chapter] += content
        else:
            content = '{}\n'.format(line)
            chapters[cur_chapter] = content

    return chapters


def convert_chapter_to_spinal(chapter):
    name = re.sub(r"^(Chapter [0-9]+: )", '', chapter)
    if name == chapter:
        raise InvalidChapterException
    name = name.lower().replace(' ', '-')
    return name


class InvalidChapterException(Exception):
    """Chapter name is invalid"""
    pass


def get_chapter_file(chapter):
    chapter_spinal_case = convert_chapter_to_spinal(chapter)
    return '{}.html'.format(chapter_spinal_case)


def build_html_files(chapters, dest='html/'):
    for chapter in chapters.keys():
        chapter_file = get_chapter_file(chapter)
        file_name = '{0}{1}'.format(dest, chapter_file)
        html_file = open(file_name, 'w')

        paragraph = chapters[chapter].replace('\n\n', '<br/><br/>')
        content = """
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div>
            <h1>{0}</h1>
            <p>{1}</p>
        </div>
    </body>
</html>
""".format(chapter, paragraph)
        html_file.write(content)
        html_file.close()
`}
          </CodeBlock>
          <Title>Creating The main.py File</Title>
          <Paragraph>
            We can now connect everything together in our `main.py` file. Update
            your `main.py` to include the following:
          </Paragraph>
          <CodeBlock language="python">
            {`from utils.utils import extract, build_chapters, build_html_files

lines = extract()

chapters = build_chapters(lines)

build_html_files(chapters)`}
          </CodeBlock>
          <Paragraph>
            At this point, this file should be self-explanatory. We import the
            extract method to extract the lines from our images. Then, we import
            the `build_chapters` method to create our `chapters` hash using
            `lines`. Then we pass it to `build_html_files` to create our html
            files.
          </Paragraph>
          <Paragraph>
            Save this file and run `$ Make clean` and then `$ python3 main.py`
            (or `$ python main.py`):
          </Paragraph>
          <CodeBlock language="bash">
            {`$ python3 main.py
extracting: data/python_dataset_01.jpg
extracting: data/python_dataset_02.jpg
extracting: data/python_dataset_03.jpg`}
          </CodeBlock>
          <Paragraph>
            Now if we check if the files exist in our html folder using `ls`:
          </Paragraph>
          <CodeBlock language="bash">
            {`$ ls html
dolor.html lorem.html lpsum.html`}
          </CodeBlock>
          <Paragraph>
            We now have our 3 chapters created! Open one of them to check it
            out:
          </Paragraph>
          <LazyLoadImage
            className="full-width-img"
            src={Chapter2HtmlImg}
            alt="The HTML page for the full Chapter 2 section. There is a lost of content and it is unstyled."
          />
          <Paragraph>
            This page could use some styling. Download the `styles.css` files
            from the `html` folder in the github repo and put it in our `html`
            folder. Once complete, refresh the page:
          </Paragraph>
          <LazyLoadImage
            className="full-width-img"
            src={Chapter2StyledImg}
            alt="This is a styled screen for chapter 2 that is inspired by material design."
          />
          <Paragraph>
            This now looks a lot more readable. There is still one more feature
            we can add to it though: __navigation__.
          </Paragraph>
          <Title>Adding Navigation</Title>
          <Paragraph>
            We can improve our existing code to allow us to navigate from page
            to page with a `next` and `previous` button. Here is the basic
            overview of how we can achieve that:
          </Paragraph>
          <Paragraph>
            {`1. update our for loop to include the index we are on
2. If we are on the 2nd iteration or later, add a previous button
3. if we are before the last page, add the next button`}
          </Paragraph>
          <Paragraph>
            Starting with the first step, update your loop from:
          </Paragraph>
          <CodeBlock language="python">{`for chapter in chapters.keys():`}</CodeBlock>
          <Paragraph>to:</Paragraph>
          <CodeBlock language="python">
            {`chapter_keys = list(chapters)
for index, chapter in enumerate(chapter_keys):`}
          </CodeBlock>
          <Paragraph>
            `list(chapters)`: this converts our `chapters.keys()` into a `list`
            of keys that is indexable and assigns it to `chapter_keys`
          </Paragraph>
          <Paragraph>
            `for index, chapter`: adds `index` as a variable that increments
            every loop.
          </Paragraph>
          <Paragraph>
            `enumerate(chapter_keys)`: Python provides us with a built-in
            function called `enumerate` which will keep track of the iterations
            for us, allowing us to retrieve the `index` value each loop.
          </Paragraph>
          <Paragraph>We can now work on adding our previous link:</Paragraph>
          <CodeBlock language="python">
            {`# ...
html_file = open(file_name, 'w')
prev_link = ''
if index > 0:
  prev_chapter = chapter_keys[index - 1]
  prev_chapter_file = get_chapter_file(prev_chapter)
  prev_link = '<p><a href="{}">Previous</a></p>'.format(
    prev_chapter_file)
 # ...
content = """
<html>
    ...
            <h1>{0}</h1>
            <p>{1}</p>
            {2}
    ...
</html>
""".format(chapter, paragraph, prev_link)`}
          </CodeBlock>
          <Paragraph>
            `prev_link = ''`: This is our previous link, which is defaulted to
            be blank
          </Paragraph>
          <Paragraph>`if index > 0:`: if it is the 2nd page or later</Paragraph>
          <Paragraph>
            `prev_chapter = chapter_keys[index - 1]`: gets the previous chapter
          </Paragraph>
          <Paragraph>
            `get_chapter_file(prev_chapter)`: gets the previous chapter file
            name
          </Paragraph>
          <Paragraph>
            {
              '` \'<p><a href="{}">Previous</a></p>\'`: our html for the previous link, the link would be relative to the folder it is in (`html`), so we can just pass the normal file name (ex. `lorem.html`). We get add the file link through the `format` method.'
            }
          </Paragraph>
          <Paragraph>
            {
              '`content = """...{2}..."""`: this refers to the previous link string. If it is blank, it would be as if it was never added. If the string has the html tags, it will appear in the html page as a link. This means that we won\'t need a condition to hide the previous link if one does not exist. If it doesn\'t exist, it won\'t appear in the html file.'
            }
          </Paragraph>
          <Paragraph>
            `.format(chapter, paragraph, prev_link)`: adds the previous link as
            a parameter
          </Paragraph>
          <Paragraph>
            {
              "The `next` button is basically the same thing, except our conditional would be `if (index < len(chapters) - 1):` so that it checks if the current page isn't the last page. It will also pull the next chapter using `chapter_keys[index + 1]` instead of pulling the previous chapter."
            }
          </Paragraph>
          <Paragraph>
            Here is the full method with the naviagtion buttons:
          </Paragraph>
          <CodeBlock language="python">
            {`def build_html_files(chapters, dest='html/'):
    chapter_keys = list(chapters)
    for index, chapter in enumerate(chapter_keys):
        chapter_file = get_chapter_file(chapter)
        file_name = '{0}{1}'.format(dest, chapter_file)
        html_file = open(file_name, 'w')

        prev_link = ''
        next_link = ''
        if index > 0:
            prev_chapter = chapter_keys[index - 1]
            prev_chapter_file = get_chapter_file(prev_chapter)
            prev_link = '<p><a href="{}">Previous</a></p>'.format(
                prev_chapter_file)

        if (index < len(chapters) - 1):
            next_chapter = chapter_keys[index + 1]
            next_chapter_file = get_chapter_file(next_chapter)
            next_link = '<p><a href="{}">Next</a></p>'.format(
                next_chapter_file)
        paragraph = chapters[chapter].replace('\\n\\n', '<br/><br/>')
        content = """
<html>
    <head>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <div>
            <h1>{0}</h1>
            <p>{1}</p>
            {2}{3}
        </div>
    </body>
</html>
""".format(chapter, paragraph, prev_link, next_link)
        html_file.write(content)
        html_file.close()`}
          </CodeBlock>
          <Paragraph>
            Once you have updated your code, run `$ Make clean` and then
            `python3 main.py`. After the script runs, view your html files to
            see the next and previous buttons:
          </Paragraph>
          <LazyLoadImage
            className="full-width-img"
            src={NavImg}
            alt="A HTML screen with a next and previous button to navigate through pages and chapters."
          />
          <Title>Testing The Entire Dataset</Title>
          <Paragraph>
            Now that we verified it worked for the first 3 images, we can test
            it for the entire dataset by removing `pages = pages[:3]`. Update
            the `extract` method from:
          </Paragraph>
          <CodeBlock language="python">
            {`def extract(path='data/*.jpg'):
    pages = glob.glob(path)
    pages.sort()
    pages = pages[:3]
    
    text = ''
    # ...`}
          </CodeBlock>
          <Paragraph>to:</Paragraph>
          <CodeBlock language="python">
            {`def extract(path='data/*.jpg'):
    pages = glob.glob(path)
    pages.sort()

    text = ''
    # ...`}
          </CodeBlock>
          <Paragraph>Now run `$ Make clean` and `python3 main.py`:</Paragraph>
          <CodeBlock language="bash">
            {`$ python3 main.py
extracting: data/python_dataset_01.jpg
...
extracting: data/python_dataset_38.jpg`}
          </CodeBlock>
          <Paragraph>
            If everything went well, you should now have a static website in
            `html/`!
          </Paragraph>
          <Title>What's Next?</Title>
          <Paragraph>
            At this point, the project is at a good position to build off of.
            You can add more features like a table of contents, word count, and
            more. I recommend viewing the Github Repo to see how I [tested the
            utils.py
            file](https://github.com/ArmaizAdenwala/image-scans-to-html/blob/master/tests/test_utils.py)
            using `pytest` and `coverage`. I am always available to help with
            any questions, so don't hesitate to contact me!
          </Paragraph>
        </div>
      </Container>
      <Footer />
    </div>
  </Layout>
);

export default IndexPage;
