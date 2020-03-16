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
      title="JWT (JSON Web Token) Authentication"
      canonical="https://armaizadenwala.com/blog/social-media-app/jwt-authentication/"
      secondaryTitle="Armaiz"
      description="What JWT (JSON Web Token) authentication is and how to use it."
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="JWT Authentication"
      description="What JWT authentication is and how to use it"
      date="Feburary 12th, 2020"
    />
    <div className="page__content">
      <Container>
        <Breadcrumbs
          items={[
            { name: 'HOME', url: '/', hideOnMobile: true },
            { name: 'BLOG', url: '/blog/', hideOnMobile: true },
            { name: 'SOCIAL MEDIA APP', url: '/blog/social-media-app/' },
            {
              name: 'JWT AUTH',
              url: '/blog/social-media-app/jwt-authentication/',
            },
          ]}
        />
        <div className="blog__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            We covered how you can [implement API versioning for your Rails
            API.](/blog/social-media-app/api-versioning/). We will now need to
            __implement JWT authentication for our Rails API__.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 7 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part7)
            if needed._
          </Paragraph>
          <Paragraph>
            This is the 7th installment of my [Developing A Cross-Platform iOS &
            Android Social Media App](/blog/social-media-app/) series.
          </Paragraph>
          <Title>What Is JWT?</Title>
          <Paragraph>
            __JWT__ stands for __JSON Web Token__. It takes a `payload` and a
            `key` to create a `token` that is encrypted using a specified
            algorithim. It can then be decoded to retrieve the original payload.
            What we want to do is save the token on the user's app so that every
            request made sends a JWT token along with it. Before the API does
            anything, it will verify if the token is valid and tells the
            controller which user sent the request.
          </Paragraph>
          <Paragraph>
            {`Here is an example workflow:

1. The mobile app logs in using the \`login\` endpoint.
2. If the credentials are valid, the API returns the user object, and __encode__ a JWT \`access_token\` that will be passed as \`meta data\`.
3. The mobile app saves the \`access_token\` and navigates to the homepage of the app.
4. For every API call, the mobile app will now pass the \`access_token\`
5. When the app recieves an \`access_token\`, it will __decode__ it and retrieve the user's id, set an __instance_variable__ called \`@current_user\` and set it to the \`user\` from the \`payload\` .
          `}
          </Paragraph>
          <Paragraph>
            That may have been a lot of information, so lets look at one step at
            a time. We implemented step 1 in the workflow, so for this section,
            we will take a look at step 2: __encoding a JWT access token__.
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
          <CodeBlock language="bash">
            {`$ bundle install
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
            webtokens. We can access this through
            `Rails.application.secrets.secret_key_base`.
          </Paragraph>
          <Paragraph>
            _Note: Notice the keyword **secrets**. This means that this is
            sensitive data that no one besides you and your developers should
            see, similiar to your PostgreSQL data in `.env`._
          </Paragraph>
          <Paragraph>
            Let's take a look at our `secret_key_base` via the Rails console.
            Run `rails c` and look at your `secret_key_base`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :003 > Rails.application.secrets.secret_key_base
 => "1234...n0tMy4ctu41S3cr3t"`}
          </CodeBlock>
          <Paragraph>
            So it's a long string, what's the point of it? We can use this key
            for encryption and decryption. If an object gets encrypted with this
            key, that same object can be decrypted with this key.
          </Paragraph>
          <Paragraph>
            > Rails generates the secret key from the `config/master.key` file.
            This file should automatically be generated and ignored in in the
            `.gitignore`. Like the `secret_key_base`, this should not be shared
            unless it is to another developer. Let's say that you give a
            database backup to a coworker. In this database, there are encrypted
            variables that were encrypted using your key. In order for the
            coworker to use your backup without issues, they would need to
            replace their `master.key` with your `master.key`.
          </Paragraph>
          <Title>Encrypting With Our Secret Key Base</Title>
          <Paragraph>
            Let's use our secret keybase to encrypt an object, and decrypt it.
            In the Rails console, assign the `secret_key_base` to a variable
            such as `key`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :004 > key = Rails.application.secrets.secret_key_base
 => "1234...n0tMy4ctu41S3cr3t"`}
          </CodeBlock>
          <Paragraph>
            We can now create a hash that we want to encrypt:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :005 > payload = {"user_id": 123}
 => {:user_id=>123}`}
          </CodeBlock>
          <Paragraph>
            We can now use `JWT` to encrypt our payload using `JWT.encode`. The
            encode method can take in two parameters: `payload` and `key`. Run
            the `encode` method in the Rails console and assign it to a variable
            named `encoded_payload`:
          </Paragraph>
          <CodeBlock language="ruby">{`encoded_payload = JWT.encode(payload, key)
 => "eyJ...A4C"`}</CodeBlock>
          <Paragraph>
            _Note: The `encode` method takes more parameters such as expiration
            date and encryption algorithim_
          </Paragraph>
          <Paragraph>
            `encoded_payload` now has an encoded JSON Web Token assigned to it.
            This is the key that we will send to the frontend of our app. The
            frontend will save it and will send it in all future requests in an
            authenthication header instead of passing in login credentials.
          </Paragraph>
          <Paragraph>
            So how does the API decode a JSON Web Token to see who called the
            request? We can use the `decode` method. The decode method takes in
            two parameters: `jwt` (`encoded_payload`) and `key`. Lets decrypt
            our encoded payload:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :027 > JWT.decode(encoded_payload, key)
 => [{"user_id"=>123}, {"alg"=>"HS256"}]`}
          </CodeBlock>
          <Paragraph>
            The `decode` method returns an array for us. The first index being
            the original payload, and the 2nd being the algorithim it used to
            encrypt it. To keep things simple, we won't worry about using
            different algorithim for now.
          </Paragraph>
          <Title>JWT Expiration</Title>
          <Paragraph>
            Lets say someone gets access to a user's JSON Web Token. That person
            can now use that token forever, utill the secret key is changed.
            This is because the JSON Web Token does not validate the password,
            the access token is a password itself in a way. To prevent this, we
            can set an expiration date. Lets set it to be 1 day from right now.
            Ruby provides a very simple helper method: `1.days.from_now`. Let's
            assign that to a variable called `exp` (Short for expiration_date).
          </Paragraph>
          <CodeBlock language="ruby">
            {`exp = 1.days.from_now
 => Thu, 13 Feb 2020 18:33:53 UTC +00:00`}
          </CodeBlock>
          <Paragraph>
            _Keep in mind that is using the `UTC` timezone. Don't worry about
            this now, but in the future we will see why timezones are important
            for our app and whether this should be `UTC` or your local
            timezone._
          </Paragraph>
          <Paragraph>
            `JWT` reserves the `exp` key in the payload to determine the
            expiration date. We can update our `payload` hash with our `exp`
            variable via `payload[:exp] = exp.to_i`. JWT requires the expiration
            date to be an integer so we convert the expiration date into an
            integer via the `to_i` method (Short for to integer). Lets update
            our payload hash:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :038 > payload[:exp] = exp.to_i
 => 1581618833
2.6.5 :039 > payload
 => {:user_id=>123, :exp=>1581618833}`}
          </CodeBlock>
          <Paragraph>
            Now when we pass `payload` to `JWT.encode`, the access token that is
            returned will now expire at the specified date. If an expired token
            is decoded, JWT with raise the following exception:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :039 > JWT.decode(encoded_payload, key)
Traceback (most recent call last):
        1: from (irb):39
JWT::ExpiredSignature (Signature has expired)`}
          </CodeBlock>
          <Paragraph>
            _Note: you can test this now by setting `exp` to be
            `30.seconds.from_now.to_i` or `2.minutes.from_now.to_i` _
          </Paragraph>
          <Title>What's Next?</Title>
          <Paragraph>
            Now that we have learned what `JWT` is, we should now implement it
            to our API endpoints. Before we can do that, we need to setup
            serializers.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/serializers/"
              >
                VIEW PART EIGHT: IMPLEMENTING SERIALIZERS IN OUR RAILS ENDPOINTS
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
