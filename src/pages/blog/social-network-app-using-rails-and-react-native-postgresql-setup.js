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
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-postgresql-setup"
      secondaryTitle="Armaiz"
      image={SocialImage}
      description=""
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 2: PostgreSQL Setup"
      description=""
      date="Feburary 6th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>Introduction</Title>
          <Paragraph>
            Lets checkout the database config file that the rails api created
            for us. Open `config/database.yml`.
          </Paragraph>
          <Paragraph>
            You'll notice a lot of information in there, replace the entire file
            with:
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
              "What this does is tell rails that we have a postgresql user that will create 3 postgresql databases for us: development, test, and production. Notice that we pull the credentials from an environment variable via ` <%= ENV['POSTGRES_USER'] %>`. This is crucial when working with git. We don't want credentials uploaded to github so we will have it in an `.env`. We will tell git to not upload this file so that our credentials are kept safe."
            }
          </Paragraph>
          <Paragraph>
            {
              "In order to setup the .env, we need to install the `dontenv-rails` gem by adding `gem 'dotenv-rails'` to `Gemfile`. Once that is done, we can run `$ bundle install` to install it."
            }
          </Paragraph>
          <Paragraph>
            Once the command has been ran, lets create a .env in the root of the
            project. You can create it in your editor or by running `$ touch
            .env` in your terminal.
          </Paragraph>
          <Paragraph>Open that file and add the following line:</Paragraph>
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
            .env file. Open `.gitignore` and append `.env` to the end so that it
            looks like:
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
            We have one final step: Creating the postgresql role.
          </Paragraph>
          <Paragraph>
            If you have not setup postgresql, here is a good resource:
            https://www.postgresql.org/download/
          </Paragraph>
          <Paragraph>Note: I am using PostgreSQL version: 12.1</Paragraph>
          <Paragraph>
            If you are using a mac, you can run `$ brew search postgresql` too
            see the available version names. For now, postgresql 12 falls under
            `postgresql` meaning you can just run `brew install postgresql`
          </Paragraph>
          <Paragraph>
            In the future, you may need to run `brew install postgresql@12`
            instead.These will be the files that would be pushed under a commit.
          </Paragraph>
          <Paragraph>
            You can now access the postgresql console. If you installed it via
            homebrew on mac, you should be able to access it via `$ psql
            postgres`
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
            `password123` as the password. Be sure this matches with your .env
            file.
          </Paragraph>
          <Paragraph>
            If successful, your console should look like this:
          </Paragraph>
          <pre>{`postgres=# CREATE ROLE social_media_blog LOGIN SUPERUSER PASSWORD 'password123';
CREATE ROLE`}</pre>
          <Paragraph>
            You can exit the console by typing `exit` or using the `ctrl+z`
            command.
          </Paragraph>
          <Paragraph>
            Now that rails can login to a role, lets run a builtin rake task
            that creates the databases for us: `$ rake db:create`
          </Paragraph>
          <Paragraph>You should see a similar response:</Paragraph>
          <pre>{`~/code/social-media-blog-api$ rake db:create
Created database 'social_media_blog'
Created database 'social_media_blog_test'`}</pre>
          <Paragraph>
            One last step is to verify that running `rails server` does not
            return any error.
          </Paragraph>
          <Paragraph>
            Viola! You have successfully setup a rails api with a Postgres
            database!
          </Paragraph>
          <Paragraph>
            _Part 3 (Authenthication using Devise Setup) will be released soon.
            Please check back later._
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
