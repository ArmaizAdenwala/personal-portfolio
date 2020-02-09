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
      title="Part 5: Creating Auth Endpoints - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-creating-auth-endpoints/"
      secondaryTitle="Armaiz"
      description="Learn how to create authentication endpoints in Ruby on Rails"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 5: Creating Auth Endpoints"
      description="Creating authentication endpoints for our User models"
      date="Feburary 9th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the previous article we [created a User record using the Rails
            console](/blog/social-network-app-using-rails-and-react-native-creating-a-user/).
            You are now ready for the next step: __setting up endpoints for
            authentication__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 5 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part5)
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
            `password_confirmation` as parameters. If all params are valid, then
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
            should not store it anywhere. But for testing these endpoints, it
            doesn't matter much._
          </Paragraph>
          <Title>What is a Rails Controller?</Title>
          <Paragraph>
            In simple terms, a controller is a Ruby file with methods that
            recieve parameters and outputs a response. In orther words, it
            connects the frontend to the database. We can route urls such as
            `https://localhost:3000/users/register` to methods in a controller
            such as the `register` method. We will cover more on this soon.
          </Paragraph>
          <Title>Creating A Controller</Title>
          <Paragraph>
            Rails provides us a command to create a controller automatically.
            Lets run `$ rails generate controller users`
          </Paragraph>
          <CodeBlock
            useHighlight
            language="shell"
          >{`$ rails generate controller users
      create  app/controllers/users_controller.rb
      invoke  test_unit
      create    test/controllers/users_controller_test.rb`}</CodeBlock>
          <Paragraph>
            This created a __User Controller__ and a __User Controller Test__.
            _Note: We will cover tests soon_
          </Paragraph>
          <Paragraph>
            Open the `app/controllers/users_controller.rb` file:
          </Paragraph>
          <CodeBlock language="ruby">{`class UsersController < ApplicationController
end`}</CodeBlock>
          <Paragraph>
            From this file we can see that we have a `UsersController` that
            inherits the `ApplicationController` from
            `app/controllers/application_controller.rb`. We will cover the
            purpose of `ApplicationController` in a future post.
          </Paragraph>
          <Paragraph>
            Right now, the Users Controller is a blank canvas, lets add a
            register method stub:
          </Paragraph>
          <CodeBlock language="ruby">{`class ApplicationController < ActionController::API
  def register
  end
end`}</CodeBlock>
          <Title>Strong Parameters</Title>
          <Paragraph>
            A user can pass any amount of parameters to an endpoint. In a
            perfect world, we can just have `User.new(params)` which will assign
            the parameters to the respective attributes. But what if we had an
            `admin` attribute and a user adds `admin=true` to the request
            params? The user could assign any attribute they want in that
            scenario. To prevent unwanted parameters to be passed to
            `User.new()`, we will be using __strong parameters__.
          </Paragraph>
          <Paragraph>
            The controller has a variable called `params` that refers to the
            parameters passed to it. We have two important variables that we can
            use with the `params` variable: `require` and `permit`. Here is what
            they do:
          </Paragraph>
          <Paragraph>
            `require`: Throws an error if this key doesn't exist in the `params`
          </Paragraph>
          <Paragraph>
            `permit`: These are optional keys, it won't throw an error if it
            doesn't exist but it also will filter out anything that isn't listed
            in here.
          </Paragraph>
          <Paragraph>
            The only attributes we want to pass to `User.new()` are `email`,
            `password`, and `password_confirmation`. So lets create a private
            method called `user_params` to setup our strong parameters:
          </Paragraph>
          <CodeBlock language="ruby">{`class ApplicationController < ActionController::API
  def register
  end

  private
  
  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :password_confirmation,
    )
  end
end
`}</CodeBlock>
          <Paragraph>
            The `user_params` method can now be called instead of `params`. We
            now can be confident that when we call
            `User.new(user_params[:user])` the only attributes that will be
            assigned are `email`, `password` and `password_confirmation`.
          </Paragraph>
          <Paragraph>
            Lets take a look at example payloads that can be passed to a request
            and what the user_params would be. Here is an example JSON payload:
          </Paragraph>
          <CodeBlock language="json">
            {`{
  "user": {
    "email": "123@abc.com",
    "password": "123456",
    "password_confirmation": "123456",
    "admin": true
  }
}`}
          </CodeBlock>
          <Paragraph>Here is what `user_params` would return:</Paragraph>
          <CodeBlock language="json">
            {`{
  "user": {
    "email": "123@abc.com",
    "password": "123456",
    "password_confirmation": "123456"
  }
}`}
          </CodeBlock>
          <Paragraph>
            Notice how the admin attribute is removed. Lets look at this
            example:
          </Paragraph>
          <CodeBlock language="json">
            {`{
  "email": "123@abc.com",
  "password": "123456",
  "password_confirmation": "123456"
}`}
          </CodeBlock>
          <Paragraph>
            All of the attributes are there but it is not nested under a `user`
            key. So this means that `require` would raise an exception since
            `user` does not exist in `params`.
          </Paragraph>
          <Title>Creating The Register Endpoint</Title>
          <Paragraph>
            Now that we have our `user_params` method, we can now finish our
            register endpoint. Lets update the `register` method:
          </Paragraph>
          <CodeBlock language="ruby">{`def register
  user = User.new(user_params)
end`}</CodeBlock>
          <Paragraph>
            Now we need to save the new user. We need to handle a success and
            error state:
          </Paragraph>
          <CodeBlock language="ruby">{`def register
  user = User.new(user_params)
  if user.valid? && @user.save
    # render success state
  end
  # render error state
end`}</CodeBlock>
          <Paragraph>
            In order for a success state to be rendered, the method will attempt
            to save the user after it verifies that it is valid. If the user is
            invalid or if the save faiils, it will render an error state.
          </Paragraph>
          <Paragraph>
            We need to replace the render comments with actual renders. If
            registration is successful, we will return the user.
          </Paragraph>
          <CodeBlock language="ruby">
            {`def register
  @user = User.create(user_params)
  if @user.valid? && @user.save
    render json: @user,
      status: 201
    return
  end
  # render error state
end`}
          </CodeBlock>
          <Paragraph>
            This line does a lot for us, so lets disect this line:
          </Paragraph>
          <Paragraph>
            `render`: this method tells the endpoint what we are going to render
            as the response
          </Paragraph>
          <Paragraph>
            `json: user,`: this sets the response to be a __JSON__ and
            automatically converts the user model into __JSON__. *In a future
            part, we will go over __serializers__ which will let us customize
            the user response.*
          </Paragraph>
          <Paragraph>
            `status: 201`: 201 is a HTTP status for a successful creation. [You
            can view more HTTP statuses here](https://httpstatuses.com/).
          </Paragraph>
          <Paragraph>
            `return`: Since the `render` method does not stop the next lines of
            code from being executed, we need to use `return` so that we dont
            end up with a double render error.
          </Paragraph>
          <Paragraph>
            If the user is invalid or the save fails, `User.errors` will provide
            error info. Updare your register method to render a response when an
            error exists:
          </Paragraph>
          <CodeBlock language="ruby">
            {`def register
  @user = User.create(user_params)
  if @user.valid? && @user.save
    render json: @user,
      status: 201
    return
  end
  render json: @user.errors,
    status: 400
end`}
          </CodeBlock>
          <Paragraph>
            We used a `400` status response because invalid params falls under
            the general `bad request` category. We don't need a return as it is
            already at the end of the method and no code will be executed after
            this render. Your completed `users_controller.rb` should now look
            like:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class ApplicationController < ActionController::API
  def register
    @user = User.create(user_params)
    if @user.valid? && @user.save
      render json: @user,
        status: 201
      return
    end
    render json: @user.errors,
      status: 401
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :password,
      :password_confirmation,
    )
  end
end
`}
          </CodeBlock>
          <Title>Creating Our Route</Title>
          <Paragraph>
            We have one final step for our register endpoint to be ready:
            __configuring the routes file__. Open `config/routes.rb`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  devise_for :users
end
`}
          </CodeBlock>
          <Paragraph>
            We will be creating our own API-only auth routes, so delete
            `devise_for :users`. For the registration route, we want to use
            `/user/register`. Since the user will be sending data and expecting
            a user to be created, we will use a `POST` request.
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  post 'users/register', to: 'users#register'
end
`}
          </CodeBlock>
          <Paragraph>Here is a breakdown of what is going on:</Paragraph>
          <Paragraph>
            `post`: This tells us what HTTP request method needs to be made.
            `post` is usually for creating data, `get` is for retrieving data,
            and `delete` for deleting data. [Mozilla has documentation on HTTP
            request
            methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).
          </Paragraph>
          <Paragraph>
            `'users/register',`: this tells Rails what the url should be. So
            this line would create the route:
            `http://localhost:3000/users/register`
          </Paragraph>
          <Paragraph>
            `to:`: This tells Rails that when a user sends a request to the
            `users/register` url, call the method after `to:`
          </Paragraph>
          <Paragraph>
            `'users#register'`: This is the controller and action that the
            endpoint would direct to. So `users` would look for
            `users_controller` and `register` looks for the `register` method
            inside `users_controller`
          </Paragraph>
          <Paragraph>
            _Note: there is a much cleaner approach for basic CRUD endpoints, we
            will cover this in the future_
          </Paragraph>
          <Paragraph>
            Once you save the file, verify that the route has been created by
            running `$ rake routes`
          </Paragraph>
          <CodeBlock useHighlight language="shell">
            {`$ rake routes
        Prefix Verb   URI Pattern                Controller#Action
users_register POST   /users/register(.:format)  users#register`}
          </CodeBlock>
          <Paragraph>
            You'll see a lot more routes, but this is the only one we care
            about. If you see this, you're ready to test the endpoint!
          </Paragraph>
          <Title>Testing The Register Endpoint</Title>
          <Paragraph>
            For this tutorial, we will use `curl` to hit our endpoints. But it
            is highly suggested to take a look at a [REST client such as
            Insominia](https://insomnia.rest/)
          </Paragraph>
          <CodeBlock language="shell">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "abc@abc.com","password":"123456","password_confirmation": "123456"}}' http://localhost:3000/users/register
{"id":"666b9e2b-da4a-4dbb-8fcc-aecc760c2f6f","email":"abc@abc.com","created_at":"2020-02-09T17:19:33.376Z","updated_at":"2020-02-09T17:19:33.376Z"}%`}
          </CodeBlock>
          <Paragraph>
            A little hard to read, but you can pipe the JSON response and pretty
            print it using `json_pp` by appending `| json_pp` to the end of it:
          </Paragraph>
          <CodeBlock language="shell">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "abc2@abc.com","password":"123456","password_confirmation": "123456"}}' http://localhost:3000/users/register | json_pp
% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   236    0   148  100    88    743    442 --:--:-- --:--:-- --:--:--   747
{
   "id" : "4edc9a20-1e61-4a82-bb97-ee6647ff8212",
   "updated_at" : "2020-02-09T17:24:53.319Z",
   "created_at" : "2020-02-09T17:24:53.319Z",
   "email" : "abc2@abc.com"
}`}
          </CodeBlock>
          <Paragraph>
            Awesome! Our endpoint works and we can create new users. You can
            verify this in the Rails console:
          </Paragraph>
          <CodeBlock language="ruby">{`$ rails c
Loading development environment (Rails 6.0.2.1)
2.6.5 :001 > User.find_by(email: "abc2@abc.com")
  User Load (0.9ms)  SELECT "users".* FROM "users" WHERE "users"."email" = $1 LIMIT $2  [["email", "abc2@abc.com"], ["LIMIT", 1]]
 => #<User id: "4edc9a20-1e61-4a82-bb97-ee6647ff8212", email: "abc2@abc.com", created_at: "2020-02-09 17:24:53", updated_at: "2020-02-09 17:24:53">`}</CodeBlock>
          <Paragraph>
            We have one more endpoint left: __the login endpoint__.
          </Paragraph>
          <Title>Creating The Login Endpoint</Title>
          <Paragraph>
            For the login endpoint, we will take `email` and `password` as
            parameters and return the user if the credentials are correct. We
            will make this action return a JWT token in the future, but this is
            suffice for now.
          </Paragraph>
          <Paragraph>
            Remember that we can find a user using the `find_by` command:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :001 > user = User.find_by(email: "abc2@abc.com")
  User Load (0.9ms)  SELECT "users".* FROM "users" WHERE "users"."email" = $1 LIMIT $2  [["email", "abc2@abc.com"], ["LIMIT", 1]]
 => #<User id: "4edc9a20-1e61-4a82-bb97-ee6647ff8212", email: "abc2@abc.com", created_at: "2020-02-09 17:24:53", updated_at: "2020-02-09 17:24:53">`}
          </CodeBlock>
          <Paragraph>
            We can also validate the password using `valid_password?`
          </Paragraph>
          <CodeBlock language="ruby">{`2.6.5 :005 > user.valid_password?("123456")
 => true`}</CodeBlock>
          <Title>What's Next?</Title>
          <Paragraph>
            These methods will help us find records in the database, not only
            for Users, but for future models as well. We will implement the
            `register` and `login` endpoints in the next part.
          </Paragraph>
          <Paragraph>
            _Part 5 (Creating Register And Login Rails Endpoints) will be
            released soon. Please check back later._
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
