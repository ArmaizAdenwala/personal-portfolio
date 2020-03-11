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
      title="Part 3: Authentication Setup - Let's Create A Social Network App Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-media-app/auth-setup/"
      secondaryTitle="Armaiz"
      description="Learn how to setup authentication using devise and Rails"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 3: Authentication"
      description="Setting up authentication using devise"
      date="Feburary 7th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the previous article we [setup the PostgreSQL
            database](/blog/social-media-app/postgresql-setup/). You are now
            ready for the next step: __setting up the authentication__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 3 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part3)
            if needed._
          </Paragraph>
          <Title>Overview</Title>
          <Paragraph>
            We are now going to be setting up the authenthication for our api.
            Our goal for part 3 is to implement authentication and prepare for
            creating our first endpoints.
          </Paragraph>
          <Paragraph>
            So how do we achieve this? There is a ruby gem called `devise`. It
            handles everything auth related on a Ruby on Rails app, but it is
            not designed to be api only. Don't worry, we can still use it on our
            api with some adjustments. For simplicity, we will only be using
            devise to handle our `User` model and provide some helper methods
            for us.
          </Paragraph>
          <Paragraph>
            Devise is packed with features so if at any point you want to tinker
            around with it, you already have it installed.
          </Paragraph>
          <Title>Installing Devise</Title>
          <Paragraph>
            First we will need to install the following libraries:
          </Paragraph>
          <Paragraph>
            `devise` : will be used to handle our User model
          </Paragraph>
          <Paragraph>
            `bcrypt`: used by devise to keep passwords salted, hashed
          </Paragraph>
          <Paragraph>
            Add these lines to your `Gemfile` and run `bundle install`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`gem 'devise'
gem 'bcrypt', '~> 3.1.7'`}
          </CodeBlock>
          <Paragraph>
            Once all the gems are installed, we need to install `devise`. Keep
            in mind that devise will create a bunch of views for the frontend,
            we won't be using them. Run:
          </Paragraph>
          <CodeBlock language="bash">$ rails generate devise:install</CodeBlock>
          <Title>Creating The Migration</Title>
          <Paragraph>
            Once devise is installed, we can generate the User model. Run this
            command so that devise can create the model and migrations for us:
          </Paragraph>
          <CodeBlock language="bash">$ rails generate devise User</CodeBlock>
          <Paragraph>
            The next step would be to migrate our database. Let's look at the
            migration it created under `db/migrate/`:
          </Paragraph>
          <CodeBlock language="ruby">{`...
class DeviseCreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users  do |t|
      #...
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      #...
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at
      #...
      t.datetime :remember_created_at
      #...
      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    #...
  end
end`}</CodeBlock>
          <Paragraph>Let's walk through some of the lines:</Paragraph>
          <Paragraph>
            `class DeviseCreateUsers`: This is the name of the migration and it
            is self documenting in that we can tell this migration creates users
            for us
          </Paragraph>
          <Paragraph>
            `create_table :users do |t|`: This tells us that the migration will
            create the table `users` in our PostgreSQL database
          </Paragraph>
          <Paragraph>
            `t.string :email, null: false, default: ""`: This adds a column of
            the `string` type called `email`. It cannot be null due to `null:
            false` and will default to `""` due to `default: ""`
          </Paragraph>
          <Paragraph>
            `t.string :encrypted_password, null: false, default: ""`: Similar to
            above, this created an `encrypted_password` column. __This does not
            save the password in plain text__. Devise will only put encrypted
            passwords in this column.
          </Paragraph>
          <Paragraph>
            We will handle password resets on our own, so these two are not
            necessary, we can comment these out:
          </Paragraph>
          <CodeBlock language="ruby">
            {`t.string :reset_password_token
t.datetime :reset_password_sent_at`}
          </CodeBlock>
          <Paragraph>
            This migration also adds __indexes__ for `email` and
            `reset_password_token` as seen below:
          </Paragraph>
          <CodeBlock language="ruby">
            {`add_index :users, :email, unique: true
add_index :users, :reset_password_token, unique: true`}
          </CodeBlock>
          <Paragraph>
            You can remove the `reset_password_token` index but we will need the
            `email` index. This is because indexes make searching through a
            database much faster. If we ever want to find a user using the
            email, we won't have to search through each record until the right
            record is found. Instead it looks through an index that lists the
            emails and the user it belongs to.
          </Paragraph>
          <Title>Using UUIDs</Title>
          <Paragraph>
            We still have one more thing left before we can run the migration:
            __implementing uuids__ to replace our ids. Instead of having our ids
            be `1`, `2`, `3`, `...`, our ids would look like:
            `8818f855-e567-4684-b63e-1f1a0952b70c`.
          </Paragraph>
          <Paragraph>
            Why is this important? UUIDs are __globably unique__ and make it far
            easier to __merge datasets__. Overall, it is ideal for __scalable
            applications__, such as the one we are building. Your project may
            not be the next big social media app, but converting to UUID in the
            future would be far more of a pain than setting it up now.
          </Paragraph>
          <Paragraph>
            > Keep in mind that there are some cons such as it being harder to
            debug an incremeting id vs a UUID. There is also the __performance
            cost__. UUIDs would be __4 times__ the storage size of an
            incremeting id. PostgreSQL has native support for UUIDs but it still
            has a performance impact. At such a small scale, you won't notice
            the slow performance, but imagine when it is scaled up to a popular
            production app. For this series, we will stick with UUID, but don't
            default to UUID without looking at the pros and cons for your next
            app.
          </Paragraph>
          <Paragraph>
            Luckily, UUID is very simple to enable in our migrations. To do this
            we would need to take a look at these lines:
          </Paragraph>
          <CodeBlock language="ruby">{`def change
  create_table :users  do |t|`}</CodeBlock>
          <Paragraph>
            We would need to use the `pgcrypto` extension so we enable it using
            `enable_extension 'pgcrypto'` and changing the id column to uuids by
            adding `id: :uuid`. As a result the lines above should be updated
            to:
          </Paragraph>
          <CodeBlock language="ruby">{`def change 
  enable_extension 'pgcrypto'
  create_table :users, id: :uuid  do |t|`}</CodeBlock>
          <Paragraph>
            Once this is complete, we can run `$ rake db:migrate` to run our
            migrations.
          </Paragraph>
          <Title>If The Migration Fails</Title>
          <Paragraph>
            If you accidentally ran the migrations, you can rollback the
            migrations using `$ rake db:rollback`. Keep in mind that you should
            almost never do this unless the migration hasn't been commited yet.
            This is because changing an existing migration that others have
            already applied to the database would cause issues. __You especially
            do not want to do this when a migration is applied to production.__
            We will cover the proper approach in the future.
          </Paragraph>
          <Paragraph>
            Rolling back and applying migrations may not always work. There are
            commands you can run as a last resort, but only as a last resort.
            These should not be the go-to solution since this can cause issues
            if you aren't careful. Migrations may fail or not be applied when
            deploying to production or when other developers pickup your code.
          </Paragraph>
          <Paragraph>
            One option is running `$ rake db:reset` to reset the entire
            database. Of course, don't do this on production as it will reset
            your database completely. Only use this as a last resort. _(After a
            reset, you should import your most recent database backup if you
            have one)_
          </Paragraph>
          <Paragraph>
            In other cases you may need to manually delete the automatically
            generated `schema.rb` file by running `$ rm db/schema.rb`.
            Sometimes, Rails thinks the migration is applied already and doesn't
            update the schema.rb file.
          </Paragraph>
          <Paragraph>
            Of course, these issues could be usually avoided all together by
            never editing a migration after you migrate and commit.
          </Paragraph>
          <Paragraph>
            In the next part, we will check out the model that devise created!
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/creating-a-user/"
              >
                VIEW PART FOUR: CREATING A USER
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
