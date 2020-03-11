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
      title="Part 8: Implementing Serializers - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-media-app/serializers/"
      secondaryTitle="Armaiz"
      description="How to implement serializers for your endpoints in Rails."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 8: Implementing Serializers In Our Endpoints"
      description="Implementing serializers in our Rails endpoints"
      date="Feburary 19th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the last article, we covered [how JWT (JSON Web Token)
            works](/blog/social-media-app/jwt-authentication/). In order to
            implement JWT into our endpoints, we need to add it in as __meta
            data__ for our responses. To achieve that, we will need to implement
            serializers for our Rails API__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 8 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part8)
            if needed._
          </Paragraph>
          <Title>What Are Serializers?</Title>
          <Paragraph>
            Before we setup serializers, we should take a look at what a
            serializer does and why we need it to implement JWT. Serializers
            formats our data prior to outputting the response. It keeps our
            response clean, and allows us to add meta data for access tokens
            (JWT). Here is our current successful `/login` response:
          </Paragraph>
          <CodeBlock language="json">
            {`{
   "updated_at" : "2020-02-10T18:09:33.148Z",
   "created_at" : "2020-02-10T18:09:33.148Z",
   "email" : "v1concern@abc.com",
   "id" : "50cc4c1f-aa26-4a99-a1e3-e345f5ba58ee"
}`}
          </CodeBlock>
          <Paragraph>
            If we implement a `user` serializer, we can have it automatically
            format that response to this:
          </Paragraph>
          <CodeBlock language="json">
            {`{
   "user" : {
      "id" : "50cc4c1f-aa26-4a99-a1e3-e345f5ba58ee",
      "email" : "v1concern@abc.com"
   },
   "meta" : {
      "access_token" : "123"
   }
}`}
          </CodeBlock>
          <Paragraph>
            Our user data is now under a `user` attribute. Notice how we no
            longer have `updated_at` or `created_at`. In some scenarios, we
            never use that information so there is no need to output it and make
            the response larger.
          </Paragraph>
          <Paragraph>
            We also have the `meta` attribute which allows us to append the
            `access_token` to our response. The frontend can then extract that
            `access_token` in a clean way. Here is an example of how you could
            extract data from the response above using javascript:
          </Paragraph>
          <CodeBlock language="javascript">
            {`const {user, meta} = response;
const {access_token} = meta;`}
          </CodeBlock>
          <Paragraph>
            Serializers are much more powerful than selecting which attributes
            to output. We can also output relations, such as the first 3
            comments for a post. Using serializers keeps our responses small and
            allows us to combine multiple responses into one. For example, not
            having to hit `/comments` endpoint to get the first 3 comments for
            each post in the `/posts` endpoint.
          </Paragraph>
          <Title>Setting Up Serializers</Title>
          <Paragraph>
            We would need to first setup serializers. Add `gem
            'active_model_serializers'` to your `Gemfile` and run `$ bundle
            install`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`...
gem 'jwt'
gem 'active_model_serializers'
...`}
          </CodeBlock>
          <Paragraph>
            We will now need to create an initializer that will configure
            `active_model_serializers` every time the server is ran.
            Initializers are located under `config/initializers`. Lets create
            one called `active_model_serializers.rb`. You can create the file
            via terminal by using the `touch` command: `$ touch
            config/initializers/active_model_serializers.rb`. Add the following
            lines to your new initializer:
          </Paragraph>
          <CodeBlock language="ruby">
            {`ActiveModel::Serializer.config.adapter = :json 
ActiveModelSerializers.config.key_transform = :underscore`}
          </CodeBlock>
          <Paragraph>
            Lets break this down line by line, starting with:
          </Paragraph>
          <CodeBlock language="ruby">
            ActiveModel::Serializer.config.adapter = :json
          </CodeBlock>
          <Paragraph>
            `ActiveModel::Serializer`: This is the class that
            `active_model_serializer` gem provides.
          </Paragraph>
          <Paragraph>
            `config`: This is the config class that we can use to set our
            configurations.
          </Paragraph>
          <Paragraph>
            `adapter`: This is a setting to determine what our adapter is.
            Adapters choose how our responses should be serialized. By default
            it uses the `attributes` serializer.
          </Paragraph>
          <Paragraph>
            `:json`: This is the adapter we will use that formats our response
            as JSON.
          </Paragraph>
          <CodeBlock language="ruby">
            ActiveModelSerializers.config.key_transform = :underscore
          </CodeBlock>
          <Paragraph>
            `key_transform`: This setting allows us to configure our json keys
            to be `CamelCase`, `lowerCamelCase`, `underscore_case`
            (`snake_case`), `dashed-case,` or `unaltered`.
          </Paragraph>
          <Paragraph>
            `:underscore`: we will be using underscore for our keys. This is
            becuase the Ruby language uses underscores and it would make it
            easier if data being sent, manipulated, and recieved had consistent
            key names. Even though our frontend is in Javascript, which uses
            camelCase, we won't be doing any manipulation on our frontend.
            Sorting, searching, and etc will all be done in the backend Rails
            API. I do this to remove any complexity out of the app and make
            updates easier when it comes to anything data related.
          </Paragraph>
          <Title>Creating Our First Serializers</Title>
          <Paragraph>Create a `serializers` directory:</Paragraph>
          <CodeBlock language="bash">{`$ mkdir app/serializers`}</CodeBlock>
          <Paragraph>Create a `v1` directory:</Paragraph>
          <CodeBlock language="bash">{`$ mkdir app/serializers/v1`}</CodeBlock>
          <Paragraph>
            Create a `user_serializer.rb` file under `app/serializers/v1/`:
          </Paragraph>
          <CodeBlock language="bash">{`$ touch app/serializers/v1/user_serializer.rb`}</CodeBlock>
          <Paragraph>Add the following to the file:</Paragraph>
          <CodeBlock language="ruby">{`class V1::UserSerializer < ActiveModel::Serializer
  attributes (
    :id,
    :email
  )
end `}</CodeBlock>
          <Paragraph>
            `V1::UserSerializer`: Similar to controllers, this declares a class
            named `UserSerializer` under `v1`. This tells us that this
            serializer will be used by controllers under `v1`.
          </Paragraph>
          <Paragraph>
            `ActiveModel::Serializer`: The class will inherit the
            `ActiveModel::Serializer` class.
          </Paragraph>
          <Paragraph>
            `attributes`: These are the attributes that will be used in the
            serialization.
          </Paragraph>
          <Paragraph>
            `:id`, `:email`: These would be the only two columns we care about
            right now. We won't need `created_at` or `updated_at` for this
            endpoint.
          </Paragraph>
          <Paragraph>
            Now that our serializer is setup, we can test it out by calling the
            `login` endpoint. The controller will automatically look for the
            `UserSerializer` under `v1`. There is a way to manually set the
            serializer that you want to use, for example a different user
            serializer, but we will cover that in the future.
          </Paragraph>
          <Title>Testing The Serializer</Title>
          <Paragraph>
            We can now test the serializer. Call the login endpoint:
          </Paragraph>
          <CodeBlock language="json">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "a@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   125    0    74  100    51    241    166 --:--:-- --:--:-- --:--:--   242
{
   "user" : {
      "id" : "7545d290-962f-45bb-891d-f7e43b4fbf68",
      "email" : "a@abc.com"
   }
}`}
          </CodeBlock>
          <Paragraph>
            Sweet! Our API now only returns the attributes that were specified
            in our serializer.
          </Paragraph>
          <Title>Adding Meta Data</Title>
          <Paragraph>
            Serializers give us the option to add meta data. This would be the
            extra data appended to our response. In this case we want to return
            our JWT access token. Since we have not worked on generating a token
            in the controller yet, we will just hardcode a string.
          </Paragraph>
          <Paragraph>
            Take a look at the render method of your login endpoint in your
            `app/controllers/v1/user_controller.rb` file:
          </Paragraph>
          <CodeBlock language="ruby">
            {`return render json: user,
      status: 200`}
          </CodeBlock>
          <Paragraph>
            We have the option of passing a hash as a value for the `meta` key.
            Create a hash with a mock `access_token` and set it to the `meta`
            key:
          </Paragraph>
          <CodeBlock language="ruby">
            {`return render json: user,
      meta: {access_token: '123'},
      status: 200`}
          </CodeBlock>
          <Paragraph>Now we can test the login endpoint again:</Paragraph>
          <CodeBlock language="json">
            {`$ curl -H "Content-Type: application/json" -X POST -d '{"user":{"email": "a@abc.com","password":"123456"}}' http://localhost:3000/v1/users/login | json_pp
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   155    0   104  100    51    735    360 --:--:-- --:--:-- --:--:--   737
{
   "user" : {
      "id" : "7545d290-962f-45bb-891d-f7e43b4fbf68",
      "email" : "a@abc.com"
   },
   "meta" : {
      "access_token" : "123"
   }
}`}
          </CodeBlock>
          <Paragraph>
            Our meta deta is now stored under the `meta` key in our JSON
            response. We are now ready to create our JWT module in the next
            section.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/singleton-classes/"
              >
                VIEW PART NINE: SINGLETON CLASSES
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
