import React from 'react';
import { Hero, Navbar, Footer, Container } from '../../components/general';
import { Title, Paragraph } from '../../components/content';
import '../../styles/main.scss';
import './Blog.scss';
import SEO from '../../components/seo';
import FirstCommit from './images/social-network/github_first_commit.png';
import NewRepo from './images/social-network/github_new_repo.png';
import BlankRepo from './images/social-network/github_blank_repo.png';
import SocialImage from './images/social-network/part1_social.png';

const IndexPage = () => (
  <div>
    <SEO
      title="Let's Create A Social Network App Using Rails And React Native - Part 1: Rails Setup"
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-rails-setup"
      secondaryTitle="Armaiz"
      image={SocialImage}
      description="This series will be covering how to create a social network app using ruby on rails and react native."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 1: Rails Setup"
      description="This series will be covering how to create a social network app using ruby on rails and react native"
      date="Feburary 7th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>Introduction</Title>
          <Paragraph>
            In this blog post series, I will be walking you through my process
            of creating a simple social network app. By the end of this series
            we will have a fullstack app where users can post their pictures
            with captions.
          </Paragraph>
          <Paragraph>
            We will be covering an array of features that will be implemented
            using __Ruby on Rails__ and __React Native__. Before we work on the
            __React Native__ side, we will direct our focus on __Ruby on
            Rails__.
          </Paragraph>

          <Title>Installing Ruby and Rails</Title>
          <Paragraph>
            The first step is to install __Ruby__ and __Rails__ on your
            terminal. We will be using __Ruby__ version `2.6.5` and __Rails__
            version `6.0.2.1`
          </Paragraph>
          <Paragraph>
            I suggest using __RVM__ to manage your ruby versions. [Click here to
            view the documentation for RVM](https://rvm.io/)
          </Paragraph>
          <Paragraph>
            Installing Ruby `2.6.5` is very straightforward by running the
            following command in your terminal:
          </Paragraph>
          <pre>$ rvm install 2.6.5</pre>
          <Paragraph>
            Going forward, if you ever want to use `2.6.5`, you would just need
            to run: `$ rvm use 2.6.5`
          </Paragraph>
          <Paragraph>Once Ruby is setup, install Rails `6.0.2.1`:</Paragraph>
          <pre>$ gem install rails -v 6.0.2.1</pre>
          <Title>Creating the API</Title>
          <Paragraph>To create a new Rails API, run</Paragraph>
          <pre>
            $ rails new social-media-blog-api --api --database=postgresql
          </pre>
          <Paragraph>
            This command will create a new app called `social-media-blog-api`
            and will preconfigure it for an api only stack using the `--api`
            flag. It will also prepare it to be used with a __PostgreSQL__
            database using the `--database=postgresql` flag.
          </Paragraph>
          <Paragraph>
            Once this has been created, we can now enter the app directory by
            running
          </Paragraph>
          <pre>$ cd social-media-blog-api</pre>

          <Title>Setting Up The Respository</Title>
          <Paragraph>
            I like to create my GitHub repository ASAP. So this is a good time
            to create our GitHub repo. [Click here to create a new
            repository](https://github.com/new) and name it to whatever you
            like.
          </Paragraph>
          <img className="full-width-img" src={NewRepo} loading="lazy" />
          <Paragraph>
            Once you create a repository, GitHub will provide you with some
            instructions that includes creating a `README.md` file.
          </Paragraph>
          <img className="full-width-img" src={BlankRepo} loading="lazy" />
          <Paragraph>
            Keep in mind that Rails automatically creates a readme file for us
            so we won't need to worry about creating a new one.
          </Paragraph>
          <Paragraph>
            Lets initiate this directory as a git repository by running `$ git
            init`. Since we already have our files, we can run `$ git add .` to
            stage all of our newly created files. These will be the files that
            would be pushed under a commit.
          </Paragraph>
          <Paragraph>
            Lets initiate this directory as a git repository by running `$ git
            init`. Since we already have our files, we can run `$ git add .` to
            stage all of our newly created files. These will be the files that
            would be pushed under a commit.
          </Paragraph>
          <Paragraph>
            Create your first commit by running `$ git commit -m "setup rails
            api"`. I try to commit as much as possible as it helps track down
            bugs and issues in the future.
          </Paragraph>
          <Paragraph>
            We would now have to tell git that we want to connect this local
            respository with a remote repository hosted on Github by running:
          </Paragraph>
          <pre>
            $ git remote add origin
            https://github.com/ArmaizAdenwala/social-media-blog-api.git
          </pre>
          <Paragraph>
            _(Keep in mind that your url will be different, refer to the GitHub
            repository page to find your url)_.
          </Paragraph>
          <Paragraph>
            We will now need to tell git that we want to push our `master`
            branch to `origin`, which is the default name of the repository
            GitHub created.
          </Paragraph>
          <pre>$ git push -u origin master</pre>
          <Paragraph>
            Now we have GitHub setup! Checkout your GitHub repo url to see your
            files.
          </Paragraph>
          <img className="full-width-img" src={FirstCommit} loading="lazy" />
          <Title>Confirming The Setup</Title>
          <Paragraph>
            We are now ready to continue with our rails development. Lets run `$
            rails server` or `$ rails s` to start our server. If everything went
            right, you should see `Listening on tcp://127.0.0.1:3000` in the
            printed output. That means our server is now running on the default
            port of `3000`.
          </Paragraph>
          <Paragraph>
            Congrats! We now have a foundation to work off of for our Rails API!
          </Paragraph>
          <Paragraph>
            _Part 2 (PostgreSQL Setup) will be released soon. Please check back
            later._
          </Paragraph>
          {/* <div className="m-t--64 tg__t--center">
            <div className="button">
              <a
                className="button__text"
                rel="noopener noreferrer"
                target="_blank"
                href="https://education.github.com/pack"
              >
                VIEW PART TWO: POSTGRESQL SETUP
              </a>
            </div>
          </div> */}
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
