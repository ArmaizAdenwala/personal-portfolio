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
      title="Part 10: Implementing JWT In Auth Endpoints - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-media-app/jwt-endpoints/"
      secondaryTitle="Armaiz"
      description="How to implement JWT in login and register endpoints"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 10: Implementing JWT In Auth Endpoints"
      description="Implementing JWT in login and register endpoints"
      date="Feburary 19th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the last section we [created an AccessToken singleton
            class](/blog/social-media-app/singleton-classes/) to help DRY up our
            code. In this section we will be utilizing that AccessToken class.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 10 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part10)
            if needed._
          </Paragraph>
          <Title>Overview</Title>
          <Paragraph>
            The problem we are presented with is that we do not want to pass
            login information in every request. The only time a username and
            password should be passed in would be for the `login` and `register`
            endpoints. To solve this, we will pass in a JSON Web token in every
            request that isn't login/register. If no user is found, or the JWT
            is invalid/expired, the endpoint will return a `401`.
          </Paragraph>
          <Title>Returning An AccessToken</Title>
          <Paragraph>
            We will first need to provide the user with an `access_token` when
            they login. Here is our current `login` method:
          </Paragraph>
          <CodeBlock language="ruby">
            {`def login
  email = params[:user][:email]
  password = params[:user][:password]
  user = User.find_by(email: email)
  is_valid = user && user.valid_password?(password)
  unless is_valid
    render json: {
      status: 'error',
      message: 'Invalid credentials'
    }, status: 400 and return
  end

  return render json: user,
    meta: {access_token: '123'},
    status: 200
end`}
          </CodeBlock>
          <Paragraph>
            We still are hardcoding the `access_token`. Fix that by updating the
            render with:
          </Paragraph>
          <CodeBlock language="ruby">
            {`payload = {user_id: user.id}
access_token = AccessToken.encode(payload)
return render json: user,
  meta: {access_token: access_token},
  status: 200`}
          </CodeBlock>
          <Paragraph>
            {
              "`payload = {user_id: user.id}`: creates a variable named `payload` that contains the user's id from the `user` object declared above"
            }
          </Paragraph>
          <Paragraph>
            `access_token = AccessToken.encode(payload)`: We use our
            `AccessToken` singleton class to encode our `payload` and assign it
            to `access_token`.
          </Paragraph>
          <Paragraph>
            {
              '`meta: {access_token: access_token},`: replaces our hardcoded `access_token` with the correct access token.'
            }
          </Paragraph>
          <Paragraph>
            Now, when we hit the `login` endpoint with `curl`, we get the
            `access_token` (save it for later):
          </Paragraph>
          <CodeBlock language="json">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "a@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   307    0   256  100    51   1363    271 --:--:-- --:--:-- --:--:--  1368
{
   "user" : {
      "id" : "7545d290-962f-45bb-891d-f7e43b4fbf68",
      "email" : "a@abc.com"
   },
   "meta" : {
      "access_token" : "eyz1...5dX"
   }
}`}
          </CodeBlock>
          <Title>Setting Up The Application Controller</Title>
          <Paragraph>
            Don't forget that our `UserController` inherits
            `ApplicationController`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class V1::UsersController < ApplicationController
  ...
end`}
          </CodeBlock>
          <Paragraph>
            This means that we can handle the `access_token` logic in our
            `ApplicationController` by validating the `Authorization` header.
          </Paragraph>
          <Paragraph>
            An `Authorization` header can be passed in to our request so that
            APIs will know who is making the request. For JWT, these are usually
            in the format of `Bearer JSON_WEB_TOKEN`. We can append an
            `Authorization` header to our request by adding `-H "Authorization:
            Bearer eyz1...5dX"` to our `curl` command.
          </Paragraph>
          <Paragraph>
            Rails can now access this by using
            `request.headers['Authorization']`. Lets take a look at how we can
            verify the auth header. Create the following private method in your
            `app/controllers/application_controller.rb`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class ApplicationController < ActionController::API
  private
  def authenticate_request
    auth_header = request.headers['Authorization']
    regex = /^Bearer /
    auth_header = auth_header.gsub(regex, '') if auth_header
    @current_user = AccessToken.get_user_from_token(auth_header)
    render json: { error: 'Not Authorized' }, status: 401 unless @current_user
  end
end
`}
          </CodeBlock>
          <Paragraph>`private`: Declares a private method.</Paragraph>
          <Paragraph>
            `def authenticate_request`: The name of our method, we will call
            this method soon.
          </Paragraph>
          <Paragraph>
            `auth_header = request.headers['Authorization']`: Pulls the
            `Authorization` header from the headers (`request.headers`) and
            assigns it to `auth_header`.
          </Paragraph>
          <Paragraph>
            `regex = /^Bearer /`: Remember that the `Authorization` header is in
            this format: `Bearer AUTH_TOKEN`. We only need the token itself, so
            we will remove the `Bearer ` from the string using __regex__. In
            Ruby, we can declare regex between `/.../`. The caret (`^`)
            signifies that it will match the string if it starts with whatever
            comes after the `^`. In this case `^Bearer ` will match anything
            that starts with `Bearer `. For example `/^abc/` will match `abcd`
            but not `acd` or `aabc`. _(Do not forget the space in `/^Bearer
            /`!)_
          </Paragraph>
          <Paragraph>
            `auth_header = auth_header.gsub(regex, '')`: `gsub` allows us to
            substitute all occurrences of a pattern provided _(our `regex`
            variable)_ and substitutes it with a second string _(`''` is
            equivalent to removing the occurrences)_. We then assign the new
            string to `auth_header`. This essentially removes `Bearer ` from our
            token.
          </Paragraph>
          <Paragraph>
            `if auth_header`: Adding an `if` or `unless` statement to the end of
            a line is a shorthand for wrapping that line with an `if` or
            `unless` block. So `...auth_header.gsub(...)` will only run if
            `auth_header` is not `nil` or `''`.
          </Paragraph>
          <Paragraph>
            `@current_user =`: This creates an __instance variable__ which means
            that we can use this variable in any method within the class. For
            example, if we want to return all of the user's posts, we can just
            write `@current_user.posts` in an endpoint.
          </Paragraph>
          <Paragraph>
            `AccessToken.get_user_from_token(auth_header)`: This called our
            singleton class to return the user from the token passed in.
          </Paragraph>
          <Paragraph>
            {
              "`render json: { error: 'Not Authorized' }, status: 401`: This is the error message if the authorization fails. We will use a `401` HTTP status."
            }
          </Paragraph>
          <Paragraph>
            `unless @current_user`: An error response will be returned unless
            `@current_user` exists.
          </Paragraph>
          <Paragraph>
            So when does this method run? Rails provides us with a
            `before_action` option that lets us specify what actions should be
            ran before each API call. In this case we want to use our
            `authenticate_request` method:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class ApplicationController < ActionController::API
  before_action :authenticate_request

  private
  def authenticate_request
    ...
  end
end
`}
          </CodeBlock>
          <Paragraph>
            We are almost done. The issue we have is that the API will return
            `Not Authorized` for our `login` and `register` endpoints since it
            requires an access token. There is no way for a user to have their
            `access_token` without those endpoints. Rails provides us with a
            `skip_before_action` option for controllers. Add it for the `login`
            and `register` endpoints in `user_controller.rb`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class V1::UsersController < ApplicationController
    skip_before_action :authenticate_request, only: [:login, :register]
  ...
end`}
          </CodeBlock>
          <Paragraph>
            `skip_before_action`: This takes in the actions as a parameter and
            does not run those before our endpoints.
          </Paragraph>
          <Paragraph>
            `:authenticate_request`: The method we want to skip
          </Paragraph>
          <Paragraph>
            `only: [:login, :register]`: The `only` parameter lets us set which
            specific endpoints that we do not want to implement `JWT` auth.
          </Paragraph>
          <Title>Testing Our JWT Auth</Title>
          <Paragraph>
            Create a test endpoint in the `user_controller`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class V1::UsersController < ApplicationController
  skip_before_action :authenticate_request, only: [:login, :register]
  ...
  def test
    render json: @current_user, status: 200
  end
  ...
end`}
          </CodeBlock>
          <Paragraph>
            This endpoint is very simple, it just returns the `@current_user`
            instance variable from our JWT auth method. Update the `routes.rb`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  concern :base_api do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
    get 'users/test', to: 'users#test'
  end

  namespace :v1 do
    concerns :base_api
  end
end`}
          </CodeBlock>
          <Paragraph>
            Restart your server using `ctrl+c` and `$ rails c`. We can hit the
            `/v1/test` endpoint using `curl`. If you do not have your
            `access_token`, hit the `login` endpoint again and copy it.
          </Paragraph>
          <CodeBlock language="json">
            {`curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "a@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   307    0   256  100    51   1041    207 --:--:-- --:--:-- --:--:--  1044
{
   "meta" : {
      "access_token" : "eY23...fD2"
   },
   "user" : {
      "id" : "7545d290-962f-45bb-891d-f7e43b4fbf68",
      "email" : "a@abc.com"
   }
}`}
          </CodeBlock>
          <Paragraph>
            Pass the access_token as an `Authorization` header via `-H
            "Authorization: Bearer eY23...fD2"`, change `POST` to `GET`, and
            change the endpoint to `test`:
          </Paragraph>
          <CodeBlock language="json">
            {`curl -H "Content-Type: application/json" -H "Authorization: Bearer eY23...fD2" -X GET http://localhost:3000/v1/users/test | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   130    0    79  100    51   5923   3824 --:--:-- --:--:-- --:--:--  6076
{
   "user" : {
      "email" : "ab2c@gmail.com",
      "id" : "0e6e9b1c-22f5-41a7-91bb-3da9808c7b3e"
   }
}`}
          </CodeBlock>
          <Paragraph>
            If everything works, you're finally done! At this point we should
            have a very solid foundation for a Rails API. This is a good
            stopping point for us to introduce tests, which we will cover in the
            next section.
          </Paragraph>
          <Paragraph>
            _Part 11 (Creating Rails Tests) will be released soon. Please check
            back later._
          </Paragraph>
          {/* <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/creating-auth-endpoints/"
              >
                VIEW PART 11: IMPLEMENTING JWT IN AUTH ENDPOINTS
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
