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
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-serializers/"
      secondaryTitle="Armaiz"
      description="How to implement serializers for your endpoints in Rails."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 8: Implementing Serializers In Our Endpoints"
      description="Implementing serializers in our Rails endpoints"
      date="Feburary 14th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            In the last article, we covered [how JWT (JSON Web Token)
            works.](/blog/social-network-app-using-rails-and-react-native-jwt-authentication/).
            In order to implement JWT into our endpoints, we need to add it in
            as __meta data__ for our responses. To achieve that, we will need to
            implement serializers for our Rails API__.
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
            Notice how we no longer have `updated_at` or `created_at`. In some
            scenarios, we never use that information so there is no need to
            output it and make the response larger.
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
            allows us to combine multiple responses into one. (Not having to hit
            `/comments` endpoint to get the first 3 comments for each post in
            the `/posts` endpoint).
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
            We will now need to create an initialixer that will configure
            `active_model_serializers` every time the server is ran.
            Initializers are located under `config/initialixers`. Let's create
            one called `active_model_serializers.rb`. You can create the file
            via terminal by using the `touch` command: `$ touch
            config/initializers/active_model_serializers.rb`. Add the following
            lines to your new initializer:
          </Paragraph>
          <CodeBlock language="ruby">
            {`ActiveModel::Serializer.config.adapter = :json_api 
ActiveModelSerializers.config.key_transform = :underscore`}
          </CodeBlock>
          <Paragraph>
            Lets break this down line by line, starting with:
          </Paragraph>
          <CodeBlock language="ruby">
            ActiveModel::Serializer.config.adapter = :json_api
          </CodeBlock>
          <Paragraph>
            `ActiveModel::Serializer`: This is the class that
            `active_model_serializer` gem provides.
          </Paragraph>
          <Paragraph>
            `config`: This is the config class where we can set our
            configurations.
          </Paragraph>
          <Paragraph>
            `adapter`: This is a setting to determine what our adapter is.
            Adapters choose how our responses should be serialized. By default
            it uses the `attributes` serializer.
          </Paragraph>
          <Paragraph>
            `:json_api`: This is the adapter we will use that formats our
            response as JSON.
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
            Sorting, searching, etc. will all be done in the backend Rails API.
            I do this to remove any complexity out of the app and it makes
            updates easier when it comes to anything data related.
          </Paragraph>
          <Paragraph>
            _Part 8 (Implementing JWT in Rails endpoints) will be released soon.
            Please check back later._
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
