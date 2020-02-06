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
      title="Let's Create A Social Network App Using Rails And React Native - Part 2: PostgreSQL Setup"
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-postgresql-setup/"
      secondaryTitle="Armaiz"
      image={SocialImage}
      description="Learn how to setup a PostgreSQL database for a Rails app"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 2: PostgreSQL Setup"
      description="Learn how to setup a PostgreSQL database for a Rails app"
      date="Feburary 6th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the previous article we [installed Ruby on Rails and initiated a
            new Rails
            API](/blog/social-network-app-using-rails-and-react-native-rails-setup/).
            You are now ready for the next step: __setting up the database__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 2 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part2)
            if needed._
          </Paragraph>
          <Title>Configuring The Database.yml Config</Title>
          <Paragraph>
            Now that we have our api initiated, we need to prepare the database
            so that we can start creating models in Rails.
          </Paragraph>
          <Paragraph>
            Lets checkout the database config file that Rails created for us.
            Open `config/database.yml` in your preferred code editor.
          </Paragraph>
          <Paragraph>
            You'll notice a lot of information in there. We're going to simplify
            it by replacing the entire file with:
          </Paragraph>
          <pre>
            {`default: &default
  adapter: postgresql
  encoding: unicode
  username: <%= ENV['POSTGRES_USER'] %>
  password: <%= ENV['POSTGRES_PASSWORD'] %>
  pool: 5
  timeout: 5000
  host: <%= ENV['POSTGRES_HOST'] %>
development:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>
test:
  <<: *default
  database: <%= ENV['POSTGRES_TEST_DB'] %>
production:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>`}
          </pre>
          <Paragraph>
            {
              "What this does is tell Rails that we have a postgresql user that will use the same database for production and development and have a seperate database for tests. Notice that we pull the credentials from an environment variable via ` <%= ENV['POSTGRES_USER'] %>`. This is crucial when working with git. We don't want credentials uploaded to GitHub so we will have it in an `.env`. We will tell git to not upload this file so that our credentials are kept safe."
            }
          </Paragraph>
          <Paragraph>
            {
              "In order to setup the `.env`, we need to install the `dontenv-rails` gem by adding `gem 'dotenv-rails'` to `Gemfile`. Once that is done, we can run `$ bundle install` to install it."
            }
          </Paragraph>
          <Paragraph>
            Once the command has been ran, lets create a `.env` in the root of
            the project. You can create it in your editor or by running `$ touch
            .env` in your terminal.
          </Paragraph>
          <Paragraph>Open that file and add the following lines:</Paragraph>
          <pre>{`POSTGRES_USER=''
POSTGRES_PASSWORD=''
POSTGRES_HOST='localhost'
POSTGRES_DB=''
POSTGRES_TEST_DB=''`}</pre>
          <Paragraph>
            You can set the username, password, db name, and test db name to
            anything. But here is my sample .env:
          </Paragraph>
          <pre>{`POSTGRES_USER='social_media_blog'
POSTGRES_PASSWORD='password123'
POSTGRES_HOST='localhost'
POSTGRES_DB='social_media_blog'
POSTGRES_TEST_DB='social_media_blog_test'`}</pre>
          <Paragraph>
            Save the file and run `$ rails console` or `$ rails c`. Once the
            console starts, we can verify that the env variables were set by
            entering `ENV['POSTGRES_USER']`:
          </Paragraph>
          <pre>{`~/code/social-media-blog-api$ rails console
Loading development environment (Rails 6.0.2.1)
2.6.5 :001 > ENV['POSTGRES_USER']
 => "social_media_blog"`}</pre>
          <Paragraph>
            You can exit the console by typing `exit` or using the `ctrl+z`
            command.
          </Paragraph>
          <Paragraph>
            Before we commit these changes, we need to tell git to ignore our
            `.env` file. Open `.gitignore` and append `.env` to the end so that
            it matches below:
          </Paragraph>
          <pre>
            {`...

# Ignore master key for decrypting credentials and more.
/config/master.key

.env`}
          </pre>
          <Paragraph>
            Run `$ git status` . You should not see `.env` listed in the output.
          </Paragraph>
          <pre>{`~/code/social-media-blog-api$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .gitignore
	modified:   Gemfile
	modified:   Gemfile.lock
	modified:   config/database.yml

no changes added to commit (use "git add" and/or "git commit -a")`}</pre>
          <Paragraph>
            This is a good point for us to commit our changes:
          </Paragraph>
          <pre>{`$ git add .
$ git commit -m 'setup postgresql config'
$ git push`}</pre>
          <Paragraph>
            We have one final step: __Creating the postgresql role__.
          </Paragraph>
          <Paragraph>
            If you have not setup postgresql, [refer to the official postgresql
            site on how to install it](https://www.postgresql.org/download/)
          </Paragraph>
          <Paragraph>_Note: I am using_ `PostgreSQL 12.1`</Paragraph>
          <Paragraph>
            If you are using MacOSX, you can run `$ brew search postgresql` too
            see the available version names. For now, `postgresql 12` falls
            under `postgresql` meaning you can just run `brew install
            postgresql`
          </Paragraph>
          <Paragraph>
            In the future, you may need to run `brew install postgresql@12`
          </Paragraph>
          <Paragraph>
            You should now be able to access the __PostgreSQL console__. If you
            installed it via Homebrew on Mac, you should be able to access it
            via `$ psql postgres`
          </Paragraph>
          <Paragraph>
            In this console, we would need to create a new role, for now we will
            make it a superuser out of convience and simplicity. A role that has
            superuser privileges means that it has full control of everything.
          </Paragraph>
          <Paragraph>
            We can create the role by running: `CREATE ROLE social_media_blog
            LOGIN SUPERUSER PASSWORD 'password123';`
          </Paragraph>
          <Paragraph>
            This will create a role with the name of `social_media_blog` with
            `password123` as the password. _(Be sure this matches with your_
            `.env` _file.)_
          </Paragraph>
          <Paragraph>
            If successful, your console should look like this:
          </Paragraph>
          <pre>{`postgres=# CREATE ROLE social_media_blog LOGIN SUPERUSER PASSWORD 'password123';
CREATE ROLE`}</pre>
          <Paragraph>
            You can exit the console by typing `exit` or by using the `ctrl+z`
            command.
          </Paragraph>
          <Paragraph>
            Now that Rails can login to a role, lets run a built-in __rake
            task__ that creates the databases for us: `$ rake db:create`
          </Paragraph>
          <Paragraph>You should see a similar response:</Paragraph>
          <pre>{`~/code/social-media-blog-api$ rake db:create
Created database 'social_media_blog'
Created database 'social_media_blog_test'`}</pre>
          <Paragraph>
            As you can see, it created two databases for us automatically:
            `social_media_blog` and `social_media_blog_test`
          </Paragraph>
          <Paragraph>
            One last step is to verify that running `rails server` does not
            return any error. Go ahead and run the server and verify that
            nothing has been broken.
          </Paragraph>
          <Paragraph>
            Viola! You have successfully setup a __Rails__ API with a
            __PostgreSQL__ database!
          </Paragraph>
          <Paragraph>
            _Part 3 (Authenthication using Devise) will be released soon. Please
            check back later._
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
