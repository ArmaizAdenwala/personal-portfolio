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
      title="Part 4: Creating A User - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-creating-a-user/"
      secondaryTitle="Armaiz"
      description="Learn how to create User models using the Rails console"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 4: Creating A User"
      description="Creating a user with an email and a password using the Rails console"
      date="Feburary 8th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the previous article we [setup devise and created the User
            model](/blog/social-network-app-using-rails-and-react-native-auth-setup/).
            You are now ready for the next step: __setting up endpoints for
            authentication__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 4 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part4)
            if needed._
          </Paragraph>
          <Title>Overview</Title>
          <Paragraph>
            We are now going to be setting up the authenthication endpoints for
            our API. By the end of this article, you will have the following two
            endpoints:
          </Paragraph>
          <Paragraph>
            `/users/register`: Takes in `email`, `password` and
            `password_confirmation` as paramaters. If all params are valid, then
            creates a `User` record and returns the `User` in the json response.
          </Paragraph>
          <Paragraph>
            `/users/login`: Takes in an existing `email` and `password` and if
            correct, it will return that user's information.
          </Paragraph>
          <Paragraph>
            _Note: we will never send plain text passwords to this API, even if
            it is over HTTPS. It is not that much more effort to salt and hash a
            password. We won't ever need to know the original password so we
            should not store it anywhere._
          </Paragraph>
          <Title>The User Model</Title>
          <Paragraph>
            Before we create our endpoints, we need to view the User model. Take
            a look at the `app/models/user.rb` file.
          </Paragraph>
          <CodeBlock language="ruby">{`class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
`}</CodeBlock>
          <Paragraph>
            There isn't much to look at other than we have a model called `User`
            and that it has some attributes that devise manages for us
            automatically. _Feel free to remove the comments in this file, we
            won't need them._
          </Paragraph>
          <Paragraph>
            Rails will automatically know that the `User` model refers to the
            `users` table. We will learn more about how to edit these `model`
            files in the future.
          </Paragraph>
          <Title>Creating A User</Title>
          <Paragraph>
            We will first create a User through the Rails console and then turn
            it into an endpoint. Open the console using the `$ rails console` or
            `$ rails c` command.
          </Paragraph>
          <Paragraph>
            Type in `User` and press enter to see if Rails recognizes our User
            model.
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :001 > User
 => User (call 'User.connection' to establish a connection)`}</CodeBlock>
          <Paragraph>
            Now that we verified that we can access the User model, lets create
            a new User record. We have two common methods: `create` and `new`.
            `User.create()` will instantiate a new User model, validate it,
            establish a database connection, then add the record to the
            database. `User.new()` will just instantiate it, then allow us to
            run `User.valid?` to validate it, and finally `User.save` to save
            it.
          </Paragraph>
          <Paragraph>
            For our endpoints, we will be using the `User.new()` method instead
            of `User.create()` because it will make it easier to track errors
            along the way. It also allows us to do some logic before the save
            such as uploading a profile image.
          </Paragraph>
          <Paragraph>
            In the Rails console, run `user = User.new(email: 'a@abc.com')` and
            then `user.valid?`.
          </Paragraph>
          <CodeBlock language="ruby">{`user = User.new(email: 'a@abc.com')
 => #<User id: nil, email: "a@abc.com", created_at: nil, updated_at: nil>
2.6.5 :030 > user.valid?
  User Exists? (1.1ms)  SELECT 1 AS one FROM "users" WHERE "users"."email" = $1 LIMIT $2  [["email", "a@abc.com"], ["LIMIT", 1]]
 => false`}</CodeBlock>
          <Paragraph>
            _Note: Rails creates **SQL** queries for us, so instead of a long
            query, we can just run_ `user.valid?` _to check if a user is valid.
            Running these commands return the SQL command that is ran which in
            this case is:_
          </Paragraph>
          <CodeBlock language="sql">
            SELECT 1 AS one FROM "users" WHERE "users"."email" = $1 LIMIT $2
            [["email", "a@abc.com"], ["LIMIT", 1]]
          </CodeBlock>
          <Paragraph>
            _You wouldn't need to memorize this but it is always a good habit to
            familiarize yourself with these queries. There are times where I use
            plain SQL queries instead of using Rails since it is far more
            simpler (A good example would be filtering/searching through
            columns)._
          </Paragraph>
          <Paragraph>
            Notice how `user.valid?` returns `false`. But why is the model
            invalid? Rails has a method for models that lets us see why a
            instantiated model is invalid. Run `user.errors`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :037 > user.errors
 => #<ActiveModel::Errors:0x00007fa0b21c9418 @base=#<User id: nil, email: "a@abc.com", created_at: nil, updated_at: nil>, @messages={:password=>["can't be blank"]}, @details={:password=>[{:error=>:blank}]}>`}
          </CodeBlock>
          <Paragraph>
            We don't need all of this extra information, let's run
            `user.errors.messages`
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :038 > user.errors.messages
 => {:password=>["can't be blank"]}`}</CodeBlock>
          <Paragraph>
            The error is pretty self explanatory, to prevent it, we would have
            needed to ran:
          </Paragraph>
          <CodeBlock language="ruby">
            user = User.new(email: 'a@abc.com', password: '123123')
          </CodeBlock>
          <Paragraph>
            Devise also handles password confirmations for us automatically. All
            we would have to do is add a `password_confirmation` attribute:
          </Paragraph>
          <CodeBlock language="ruby">
            user = User.new(email: 'a@abc.com', password: '123123',
            password_confirmation: '123123')
          </CodeBlock>
          <Paragraph>
            But since our variable `user` is already created, lets practice
            updating an existing model. Rails provides us with a `User.update()`
            method. Lets update `user` with a password and run `valid?`:
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :050 > user.update(password: '123123', password_confirmation: '123123')
   (0.4ms)  BEGIN
  User Exists? (0.4ms)  SELECT 1 AS one FROM "users" WHERE "users"."email" = $1 LIMIT $2  [["email", "a@abc,com"], ["LIMIT", 1]]
  User Create (35.5ms)  INSERT INTO "users" ("email", "encrypted_password", "created_at", "updated_at") VALUES ($1, $2, $3, $4) RETURNING "id"  [["email", "a@abc,com"], ["encrypted_password", "$2a$11$H4TW0KwHFYPy3QKRVn58zuruh4OBZnaGn2YuVimbVoZDbFgbMSEzC"], ["created_at", "2020-02-08 09:12:13.225899"], ["updated_at", "2020-02-08 09:12:13.225899"]]
   (0.9ms)  COMMIT
 => true
2.6.5 :051 > user.valid?
 => true`}</CodeBlock>
          <Paragraph>
            Looks like everything is ok! But wait, `.update` and `.new` both
            return if the user is valid or not as it returns `true` or `false`
            when those methods are ran. Why not just use `user` instead of
            `user.valid?`?
          </Paragraph>
          <Paragraph>
            The problem is that those methods really return the instantiated
            User model. So if you run `if user` or `if User.new(email:
            '123@abc.com')`, it will count as true. Here is an example of where
            it does not work:
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :060 > temp_user = User.new(email: "123@abc.com")
 => #<User id: nil, email: "123@abc.com", created_at: nil, updated_at: nil>
2.6.5 :061 > if temp_user
2.6.5 :062?>   "not valid but returns true"
2.6.5 :063?>   end
 => "not valid but returns true"`}</CodeBlock>
          <Paragraph>
            So now that we verified that our `user` is valid and why
            `User.valid?` is important, lets save it! Run `user.save`:
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :064 > user.save
 => true`}</CodeBlock>
          <Paragraph>Success! We have now created our first user!</Paragraph>
          <Title>Finding the User</Title>
          <Paragraph>
            For this next section, we will cover some ways we can find a user
          </Paragraph>
          {/* <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-network-app-using-rails-and-react-native-creating-auth-endpoints/"
              >
                VIEW PART FOUR: CREATING AUTH ENDPOINTS
              </Link>
            </div>
          </div> */}
        </div>
      </Container>
      <Footer />
    </div>
  </div>
);

export default IndexPage;
