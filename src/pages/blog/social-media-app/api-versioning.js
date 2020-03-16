import React from 'react';
import {
  Hero,
  Navbar,
  Footer,
  Container,
  Breadcrumbs,
} from '../../../components/general';
import { Title, Paragraph, CodeBlock } from '../../../components/content';
import '../../../styles/main.scss';
import '../Blog.scss';
import SEO from '../../../components/seo';
import { Link } from 'gatsby';

const IndexPage = () => (
  <div>
    <SEO
      title="Rails API Versioning"
      canonical="https://armaizadenwala.com/blog/social-media-app/api-versioning/"
      secondaryTitle="Armaiz"
      description="How to implement API versioning for your Rails API"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="API Versioning"
      description="Implementing API versioning on our Rails API"
      date="Feburary 10th, 2020"
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/', hideOnMobile: true },
            { name: 'SOCIAL MEDIA APP', url: '/blog/social-media-app/' },
            {
              name: 'API VERSIONING',
              url: '/blog/social-media-app/api-versioning/',
            },
          ]}
        />
        <div className="blog__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the previous article we [created a login and register
            endpoint.](/blog/social-media-app/creating-auth-endpoints/). We can
            now __implement API versioning for our Rails API__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 6 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part6)
            if needed._
          </Paragraph>
          <Paragraph>
            This is the 6th installment of my [Developing A Cross-Platform iOS &
            Android Social Media App](/blog/social-media-app/) series.
          </Paragraph>
          <Title>What Is API Versioning And Why Do We Need It?</Title>
          <Paragraph>
            Our current API currently has the endpoints `/users/login` and
            `/users/register`. Imagine we are in a scenario where we have an
            active userbase and we are updating our mobile app from `1.2.3` to
            `2.0.0`. This is signifies some form of a major change. In `2.0.0`
            users are now asked to enter their `name` on the registration
            screen, in addition to an `email` and a `password`. In this
            scenario, our `1.2.3` mobile app's registration field only has an
            `email` and `password` field. How can we release `2.0.0` without
            breaking `1.2.3`?
          </Paragraph>
          <Paragraph>
            The cleanest approach is API versioning. That means `1.2.3` will
            point to the `/v1/` version of the api and `2.0.0` will point to the
            `/v2/` version of the api.
          </Paragraph>
          <Paragraph>
            So if a user tries registering using `1.2.3`, the app would point to
            `/v1/users/register` and `2.0.0` would point to
            `/v2/users/register`. This will prevent potential bugs and conflicts
            when deploying a critical change.
          </Paragraph>
          <Paragraph>
            _Note: Some would argue this is overkill for a small project with no
            userbase. It's easy to implement, keeps urls clean, and is a good
            habit for a developer in the industy. If you do it right the first
            time, so you won't have to worry about it in the future._
          </Paragraph>
          <Title>Versioning The Controller</Title>
          <Paragraph>
            The first step is to move the controller into a directory called
            `v1`. This means that `app/controllers/users_controller.rb` becomes
            `app/controllers/v1/users_controller.rb`. You can create the
            directory and move the file any way you'd like but here is how you
            can do it in the terminal:
          </Paragraph>
          <CodeBlock language="bash">
            {`$ mkdir app/controllers/v1
$ mv app/controllers/users_controller.rb app/controllers/v1/users_controller.rb`}
          </CodeBlock>
          <Paragraph>
            `mkdir`: makes the directory in the path provided
          </Paragraph>
          <Paragraph>
            `mv`: moves the file provided to the new path. In this case moving
            from the `controllers` folder to the `controllers/v1` folder.
          </Paragraph>
          <Paragraph>
            > `mv` can also be used to rename files: `mv file.rb new_name.rb`
          </Paragraph>
          <Paragraph>
            We need to update our users controller, so we need to update this
            line:
          </Paragraph>
          <CodeBlock language="ruby">{`class UsersController < ApplicationController`}</CodeBlock>
          <Paragraph>
            When Rails sees `UsersController`, it will look for the
            `users_controller.rb` file in `controllers/`. We need to tell Rails
            that this controller is now in a subdirectory in the `controllers/`
            folder. All we would have to do it preprend `UsersController` with
            `V1::` as such:
          </Paragraph>
          <CodeBlock language="ruby">{`class V1::UsersController < ApplicationController`}</CodeBlock>
          <Paragraph>
            _Note: `ApplicationController`'s path is still
            `controllers/application_controller.rb` so we do not prepend `V1::`
            to `ApplicationController`._
          </Paragraph>
          <Title>Updating The Routes</Title>
          <Paragraph>
            Our last step is to update the `config/routes.rb` file. Here is how
            it looks now:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  post 'users/register', to: 'users#register'
  post 'users/login', to: 'users#login'
end
`}
          </CodeBlock>
          <Paragraph>
            We need to tell Rails that we are now versioning our endpoints. This
            is fairly simple to implement using `namespace`:
          </Paragraph>
          <CodeBlock language="ruby">{`Rails.application.routes.draw do
  namespace :v1 do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
  end
end
`}</CodeBlock>
          <Paragraph>
            `namespace`: Tells rails that we are going to provide it with a
            prefix (`:v1`) to be applied to everything nested inside it.
          </Paragraph>
          <Paragraph>
            `:v1`: tells Rails to look for `V1::UsersController`
          </Paragraph>
          <Paragraph>
            `do`: everything nested under this namespace will be prepended with
            `/v1/`
          </Paragraph>
          <Paragraph>
            We can now run `rake routes` to see our new routes:
          </Paragraph>
          <CodeBlock language="ruby">
            {`$ rake routes
           Prefix Verb   URI Pattern                   Controller#Action
v1_users_register POST   /v1/users/register(.:format)  v1/users#register
   v1_users_login POST   /v1/users/login(.:format)     v1/users#login`}
          </CodeBlock>
          <Paragraph>
            Awesome, our routes are now updated to be prepended with `v1/`.
            Let's restart are server using `ctrl + c` and by running `rails s`.
            Once the server is up, lets test our new routes:
          </Paragraph>
          <CodeBlock language="bash">{`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "v1@abc.com","password":"123456","password_confirmation": "123456"}}' http://localhost:3000/v1/users/register | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   232    0   146  100    86    211    124 --:--:-- --:--:-- --:--:--   211
{
   "email" : "v1@abc.com",
   "id" : "2907763c-6180-48b1-84ba-231372a445d2",
   "created_at" : "2020-02-10T17:06:32.468Z",
   "updated_at" : "2020-02-10T17:06:32.468Z"
}`}</CodeBlock>
          <CodeBlock language="bash">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "v1@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   198    0   146  100    52   1092    389 --:--:-- --:--:-- --:--:--  1097
{
   "email" : "v1@abc.com",
   "updated_at" : "2020-02-10T17:06:32.468Z",
   "created_at" : "2020-02-10T17:06:32.468Z",
   "id" : "2907763c-6180-48b1-84ba-231372a445d2"
}
`}
          </CodeBlock>
          <Paragraph>
            _Note: Be sure to update the urls to include `v1/`_
          </Paragraph>
          <Title>Using Routing Concerns</Title>
          <Paragraph>
            We still can prepare our `routes.rb` file to be cleaner in the
            future. We want to focus our code to be __DRY__ (Don't Repeat
            Yourself). A __routing concern__ allows us to define some routes
            within that concern and use those routes anywhere in the file. In
            this case we want a routing concern for our `login` and `register`
            routes and call that concern in the `v1` namespace.
          </Paragraph>
          <Paragraph>
            We need to add a concern to our `routes.rb` file:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  concern :base_api do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
  end

  namespace :v1 do
    # ...
  end
end`}
          </CodeBlock>

          <Paragraph>
            `concern`: tells Rails that we are declaring a concern
          </Paragraph>
          <Paragraph>
            `:base_api`: This is what you want the concern to be named as. A
            good self-doccumenting name would be `:base_api` but it could be
            anything like `:report_endpoints`
          </Paragraph>
          <Paragraph>
            `do`: tells Rails that everything nested between the `do` and `end`
            should be outputted anywhere this concern is called.
          </Paragraph>
          <Paragraph>
            `post 'users/register'`: this line was just copied and pasted from
            `namespace :v1 do`. We don't need to adjust it.
          </Paragraph>
          <Paragraph>
            We can now delete everything nested within `namespace :v1 do` and
            call the concern:
          </Paragraph>
          <CodeBlock language="ruby">
            {`namespace :v1 do
  concerns :base_api
end`}
          </CodeBlock>
          <Paragraph>
            `concerns`: tells Rails we want to use a concern
          </Paragraph>
          <Paragraph>
            `:base_api`: tells Rails which concern we want to use
          </Paragraph>
          <Paragraph>
            _Note: Since the concern is under the `:v1` namespace, it will
            already know to look for `v1/` controllers._
          </Paragraph>
          <Paragraph>
            Before we test it, here is an example of why concerns are useful.
            Here is an example without API verisoning that has a `v2` namespace
            with a new endpoint:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  namespace :v1 do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
  end

  namespace :v2 do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
    get 'users/new-custom-endpoint', to: 'users#new_custom_endpoint'
  end
end`}
          </CodeBlock>
          <Paragraph>
            Here is an example of the `routes.rb` file above with API
            verisoning:
          </Paragraph>
          <CodeBlock language="ruby">
            {`Rails.application.routes.draw do
  concern :base_api do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
  end

  namespace :v1 do
    concerns :base_api
  end

  namespace :v2 do
    concerns :base_api
    get 'users/new-custom-endpoint', to: 'users#new_custom_endpoint'
  end
end`}
          </CodeBlock>
          <Paragraph>
            When you compare the two, you can see that that the 2nd example is
            more readable. Imaging if we had 3 api versions with dozens of
            endpoints. It helps self-document the code because at one glance we
            know exactly what endpoints exist through all api versions. The code
            within the controllers may differ, but knowing if there is a `[POST]
            /comments/` endpoint in `v2` and not `v1` is important.
          </Paragraph>
          <Paragraph>
            Don't forget that you shouldn't have the `v2` namespace above as
            that was just an example. Your `config/routes.rb` should look like:
          </Paragraph>
          <CodeBlock language="ruby">{`Rails.application.routes.draw do
  concern :base_api do
    post 'users/register', to: 'users#register'
    post 'users/login', to: 'users#login'
  end

  namespace :v1 do
    concerns :base_api
  end
end
`}</CodeBlock>
          <Title>Testing The Refactored Code</Title>
          <Paragraph>First, lets run `rake routes` again.</Paragraph>
          <CodeBlock language="ruby">
            {`$ rake routes
           Prefix Verb   URI Pattern                  Controller#Action
v1_users_register POST   /v1/users/register(.:format) v1/users#register
   v1_users_login POST   /v1/users/login(.:format)    v1/users#login`}
          </CodeBlock>
          <Paragraph>
            Since `/v1/` is being prepended, lets restart our server again with
            `ctrl + c` and `rails s` and run our `curl` commands again.
          </Paragraph>
          <CodeBlock language="bash">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "v1concern@abc.com","password":"123456","password_confirmation": "123456"}}' http://localhost:3000/v1/users/register | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   246    0   153  100    93    101     61  0:00:01  0:00:01 --:--:--   101
{
   "updated_at" : "2020-02-10T18:09:33.148Z",
   "id" : "50cc4c1f-aa26-4a99-a1e3-e345f5ba58ee",
   "created_at" : "2020-02-10T18:09:33.148Z",
   "email" : "v1concern@abc.com"
}`}
          </CodeBlock>
          <CodeBlock language="bash">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "v1concern@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   212    0   153  100    59    998    385 --:--:-- --:--:-- --:--:--  1000
{
   "email" : "v1concern@abc.com",
   "updated_at" : "2020-02-10T18:09:33.148Z",
   "id" : "50cc4c1f-aa26-4a99-a1e3-e345f5ba58ee",
   "created_at" : "2020-02-10T18:09:33.148Z"
}`}
          </CodeBlock>
          <Paragraph>
            If everything works, you've successfully implementing API
            versioning!
          </Paragraph>
          <Title>What's Next?</Title>
          <Paragraph>
            By now you should have 2 important endpoints: `login` and
            `register`. But these need to be improved so that we won't have to
            pass `login` and `password` to every request. In the next section we
            will be __implementing Json Web Tokens__.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/jwt-authentication/"
              >
                VIEW PART SEVEN: JWT AUTHENTICATION
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
