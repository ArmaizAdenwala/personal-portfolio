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
      title="Part 7: JWT (JSON Web Token) Authentication - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-network-app-using-rails-and-react-native-api-versioning/"
      secondaryTitle="Armaiz"
      description="How to implement JWT (JSON Web Token) With Devise Ruby Gem"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 7: JWT (JSON Web Token) Authentication"
      description="Implementing JWT with the Devise Ruby Gem"
      date="Feburary 11th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            We covered how you can [implement API versioning for your Rails
            API.](/blog/social-network-app-using-rails-and-react-native-api-versioning/).
            We will now need to __implement JWT authenthication for our Rails
            API__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 7 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part6)
            if needed._
          </Paragraph>
          <Title>What Is JWT?</Title>
          <Paragraph>
            __JWT__ stands for __JSON web token__. It takes a JSON payload, an
            expiration date, and a key to create a token that is encrypted using
            a specified algorithim. It can then be decoded to retrieve the
            original payload. What we want to do is save the token on the user's
            app so that every request made sends a JWT token along with it.
            Before the API does anything, it will verify if the token is valid
            and tells the controller which user sent the request.
          </Paragraph>
          <Paragraph>
            {`Here is an example workflow:

1. The mobile app logs in using the \`login\` endpoint.
2. If the credentials are valid, the API returns the user object, and __encode__ a JWT \`access_token\` that will be passed as \`meta data\`.
3. The mobile app saves the \`access_token\` and navigates to the homepage of the app.
4. For every api call, the mobile app will now pass the \`access_token\`
5. When the app recieves an \`access_token\`, it will __decode__ it and retrieve the user's id and set an __instance_variable__ called \`@current_user\` and set it to the user from the payload.
          `}
          </Paragraph>
          <Paragraph>
            That may have been a lot of information, so lets look at one step at
            a time. We implemented step 1 in the workflow, so we will need to
            take a look at step 2: __encoding a JWT access token__.
          </Paragraph>
          <Title>Installing JSON Web Token</Title>
          <Paragraph>
            Before we can do anything `JWT` related, we need to install the
            `JWT` gem. Update your `Gemfile` and run `$ bundle install`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`source 'https://rubygems.org'
# ...
gem 'jwt'
`}
          </CodeBlock>
          <CodeBlock language="shell">
            {`$ bundle install
The dependency tzinfo-data (>= 0) will be unused by any of the platforms Bundler is installing for. Bundler is installing for ruby but the dependency is only for x86-mingw32, x86-mswin32, x64-mingw32, java. To add those platforms to the bundle, run \`bundle lock --add-platform x86-mingw32 x86-mswin32 x64-mingw32 java\`.
...
Using jwt 2.2.1
...
Bundle complete! 13 Gemfile dependencies, 63 gems now installed.
Use \`bundle info [gemname]\` to see where a bundled gem is installed.`}
          </CodeBlock>
          <Paragraph>
            Now that JWT is installed, lets open up our console via `$ rails c`
            so that we can take a look at how the JWT gem works. Run `JWT` to
            see if anything is returned. _You may need to run `require 'jwt'` or
            `require 'JWT'` if it doesn't work at first._
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :009 > JWT
 => JWT`}
          </CodeBlock>
          <Paragraph>
            Looks like it worked! We now need to understand how the
            `secret_key_base` variable works.
          </Paragraph>
          <Title>How Does secret_key_base Work?</Title>
          <Paragraph>
            Rails provides us with a key that allows us to encrypt our JWT
            webtokens.
          </Paragraph>
          {/* <CodeBlock></CodeBlock> */}
          <Title>What's Next?</Title>
          <Paragraph>
            By now you should have 2 important endpoints: `login` and
            `register`. But these need to be improved so that we won't have to
            pass `login` and `password` to every request. In the next section we
            will be __implementing Json Web Tokens__.
          </Paragraph>
          <Paragraph>
            _Part 7 (Implementing Json Web Tokens) will be released soon. Please
            check back later._
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
