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
      title="Part 2: PostgreSQL Setup - Let's Create A Social Network App Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-media-app/postgresql-setup/"
      secondaryTitle="Armaiz"
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
            new Rails API](/blog/social-media-app/rails-setup/). You are now
            ready for the next step: __setting up the database__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 2 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part2)
            if needed._
          </Paragraph>
          <Title>Configuring The Database.yml Config</Title>
          <Paragraph>
            Now that we have our API initiated, we need to prepare the database
            for Rails to insert records into.
          </Paragraph>
          <Paragraph>
            Lets checkout the database config file that Rails created for us.
            Open `config/database.yml` in your preferred code editor.
          </Paragraph>
          <Paragraph>
            You'll notice a lot of information in there. We're going to simplify
            it by replacing the entire file with:
          </Paragraph>
          <CodeBlock language="yml">
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
          </CodeBlock>
          <Paragraph>
            {
              "This gives our app the credentials for a __PostgreSQL role__. It will use that role to access the Postgres Database (`production` and `development`) and the test database that is used for __automated tests__. Notice that we pull the credentials from an environment variable via ` <%= ENV['POSTGRES_USER'] %>`. This is crucial when working with git. We don't want credentials uploaded to GitHub so we will have it in an `.env`. This file is simply a list of files to blacklist from being uploaded to a git repo. Github will not upload files listed in a `.env`, keeping our credentials safe."
            }
          </Paragraph>
          <Title>Creating Environment Variables</Title>
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
          <CodeBlock language="ruby">
            {`POSTGRES_USER=''
POSTGRES_PASSWORD=''
POSTGRES_HOST='localhost'
POSTGRES_DB=''
POSTGRES_TEST_DB=''`}
          </CodeBlock>
          <Paragraph>
            You can set the `username`, `password`, `db name`, and `test db
            name` to anything. But here is my sample `.env`:
          </Paragraph>
          <CodeBlock language="ruby">{`POSTGRES_USER='social_media_blog'
POSTGRES_PASSWORD='password123'
POSTGRES_HOST='localhost'
POSTGRES_DB='social_media_blog'
POSTGRES_TEST_DB='social_media_blog_test'`}</CodeBlock>
          <Paragraph>
            Save the file and run `$ rails console` or `$ rails c`. Once the
            console starts, we can verify that the env variables were set by
            entering `ENV['POSTGRES_USER']`:
          </Paragraph>
          <CodeBlock language="ruby">{`~/code/social-media-blog-api$ rails console
Loading development environment (Rails 6.0.2.1)
2.6.5 :001 > ENV['POSTGRES_USER']
 => "social_media_blog"`}</CodeBlock>
          <Paragraph>
            You can exit the console by typing `exit` or using the `ctrl+z`
            command.
          </Paragraph>
          <Paragraph>
            Before we commit these changes, we need to tell git to ignore our
            `.env` file. Open `.gitignore` and append `.env` to the end so that
            it matches below:
          </Paragraph>
          <CodeBlock language="ruby">
            {`...

# Ignore master key for decrypting credentials and more.
/config/master.key

.env`}
          </CodeBlock>
          <Paragraph>
            Run `$ git status` . You should not see `.env` listed in the output.
          </Paragraph>
          <CodeBlock language="bash">{`~/code/social-media-blog-api$ git status
On branch master
Your branch is up to date with 'origin/master'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   .gitignore
	modified:   Gemfile
	modified:   Gemfile.lock
	modified:   config/database.yml

no changes added to commit (use "git add" and/or "git commit -a")`}</CodeBlock>
          <Paragraph>
            This is a good point for us to commit our changes:
          </Paragraph>
          <CodeBlock language="bash">{`$ git add .
$ git commit -m 'setup postgresql config'
$ git push`}</CodeBlock>
          <Title>Setting up PostgreSQL</Title>
          <Paragraph>
            We have one final step: __Creating the postgresql role__.
          </Paragraph>
          <Paragraph>
            If you have not setup __PostgreSQL__ on your machine yet, [refer to
            the official postgresql site on how to install
            it](https://www.postgresql.org/download/)
          </Paragraph>
          <Paragraph>_Note: I am using_ `PostgreSQL 12.1`</Paragraph>
          <Paragraph>
            If you are using MacOSX, you can run `$ brew search postgresql` to
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
            make it a __superuser__ out of convience and simplicity. A role that
            has superuser privileges means that it has full control of
            everything.
          </Paragraph>
          <Paragraph>We can create the role by running:</Paragraph>
          <CodeBlock language="sql">
            CREATE ROLE social_media_blog LOGIN SUPERUSER PASSWORD
            'password123';
          </CodeBlock>
          <Paragraph>
            This will create a role named `social_media_blog` with `password123`
            as the password. _(Be sure this matches with your_ `.env` _file.)_
          </Paragraph>
          <Paragraph>
            If successful, your console should look like this:
          </Paragraph>
          <CodeBlock language="sql">{`postgres=# CREATE ROLE social_media_blog LOGIN SUPERUSER PASSWORD 'password123';
CREATE ROLE`}</CodeBlock>
          <Paragraph>
            You can exit the console by typing `exit` or by using the `ctrl+z`
            command.
          </Paragraph>
          <Title>Creating The Databases</Title>
          <Paragraph>
            Now that Rails can login to a role, lets run a built-in __rake
            task__ that creates the databases for us: `$ rake db:create`
          </Paragraph>
          <Paragraph>You should see a similar response:</Paragraph>
          <CodeBlock language="bash">{`~/code/social-media-blog-api$ rake db:create
Created database 'social_media_blog'
Created database 'social_media_blog_test'`}</CodeBlock>
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
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/auth-setup/"
              >
                VIEW PART THREE: AUTHENTICATION SETUP
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
