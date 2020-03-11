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
      title="Part 9: Creating a JWT Singleton Class - Let's Create A Social Network Using Rails And React Native"
      canonical="https://armaizadenwala.com/blog/social-media-app/singleton-classes/"
      secondaryTitle="Armaiz"
      description="How to create a singleton class for JWT logic"
    />
    <Navbar links={['Projects', 'Blog']} />
    <Hero
      emphasized="Let's Create A Social Network Using Rails And React Native - Part 9: Creating a JWT Singleton Class"
      description="Creating a module For JWT logic"
      date="Feburary 14th, 2020"
      extraContent
    />
    <div className="page__content">
      <Container>
        <div className="project__card">
          <Title first>A Quick Recap</Title>
          <Paragraph disableRel>
            We learned [how to implement
            serializers](/blog/social-media-app/serializers/) in the last part.
            To help ease the implementation of JWT and keep the controllers
            skinny, we will create a __singleton class__ that helps encode and
            decode our JSON Web Tokens.
          </Paragraph>
          <Paragraph>
            _Feel free to refer to the [part 9 branch of the GitHub
            repository](https://github.com/ArmaizAdenwala/social-media-blog-api/tree/part9)
            if needed._
          </Paragraph>
          <Title>What Are Singleton Classes?</Title>
          <Paragraph>
            Singleton classes are classes that are instantiated only once. This
            means that there can only be one instance of the class. It is
            encouraged to research if singleton classes are ideal for you. While
            it is argued to be a good way to DRY up your code, it is also argued
            to be an antipattern. For this app, we will use a singleton class.
          </Paragraph>
          <Paragraph>Take a look at this example class:</Paragraph>
          <CodeBlock language="ruby">{`class AccessToken
  def encode
    1
  end
end`}</CodeBlock>
          <Paragraph>
            This is our mock `AccessToken` class. It has the class name, and a
            method called `encode` that returns `1` when called. In order to
            call the method, we need to create an instance of the class and then
            call the encode method.
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :001 > token = AccessToken.new
 => #<AccessToken:0x00007fe5a98d9fc8>
2.6.5 :002 > token.encode
 => 1`}
          </CodeBlock>
          <Paragraph>
            `token = AccessToken.new`: Creates a new instance of the
            `AccessToken` class.
          </Paragraph>
          <Paragraph>
            {
              '`=> #<AccessToken:0x00007fe5a98d9fc8>`: This is the `AccessToken` that was just instantiated. Each time we create a new AccessToken, it will have a new id.'
            }
          </Paragraph>
          <Paragraph>
            {
              '`token.encode`: This calls the `encode` method. This can only be called on an instantiated `AccessToken` otherwise it will return a `NoMethodError`'
            }
          </Paragraph>
          <Paragraph>
            Here is an example of testing the ids for different instances of
            AccessToken:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :003 > token2 = AccessToken.new
 => #<AccessToken:0x00007fe5a83967d8>
2.6.5 :004 > token2.object_id
 => 7...6380
2.6.5 :005 > token.object_id
 => 7...4660`}
          </CodeBlock>
          <Paragraph>
            {
              'We can convert this to a singleton class by wrapping the methods under `class << self`:'
            }
          </Paragraph>
          <CodeBlock language="ruby">
            {`class AccessToken
  class << self
    def encode
      1
    end
  end
end`}
          </CodeBlock>
          <Paragraph>
            Now we don't need to manually instantiate an AccessToken class in
            order to call `encode`:
          </Paragraph>
          <CodeBlock class="ruby">
            {`2.6.5 :001 > AccessToken.encode
 => 1`}
          </CodeBlock>
          <Paragraph>
            With some configuration, the `AccessToken` singleton class will be
            accessible globally so that we can use it in our controllers.
          </Paragraph>
          <Title>Creating The AccessToken Singleton Class</Title>
          <Paragraph>
            First, create the `access_token.rb` file under `lib/`:
          </Paragraph>
          <CodeBlock language="bash">{`$ touch lib/access_token.rb`}</CodeBlock>
          <Paragraph>Input the following class and stub methods:</Paragraph>
          <CodeBlock language="ruby">
            {`class AccessToken
  class << self
    def encode
      1
    end
    def decode
      2
    end
  end
end`}
          </CodeBlock>
          <Paragraph>
            After saving the file, we will need to __autoload__ everything under
            `lib/`. In Ruby you would need to `require` every module, but Rails
            does this automatically for everything under `app/`. Fortunately
            Rails gives us the option to configure which directories get
            autoloaded through the `config.autoload_paths` option in
            `config/application.rb`. Add the `config.autoload_paths` line to
            your application config:
          </Paragraph>
          <CodeBlock language="ruby">{`...
module SocialMediaBlogApi
  class Application < Rails::Application
    config.load_defaults 6.0
    ...
    config.autoload_paths += Dir["#{config.root}/lib/**/"]
    ...
    config.api_only = true
  end
end
`}</CodeBlock>
          <Paragraph>
            `config.autoload_paths +=`: This is telling Rails we want to append
            more directories to our autoloaded paths.
          </Paragraph>
          <Paragraph>
            `Dir[...]`: This is Ruby's `Dir` class that will output an array of
            directories of whatever is passed to it.
          </Paragraph>
          <Paragraph>
            {`\`Dir["#{config.root}/lib/**/"]\`: This returns an array of directories under \`/lib/\`. If this was  ran in the Rails console, you will get \`["lib/tasks", "lib/access_token.rb"]\``}
          </Paragraph>
          <Paragraph>
            Now Rails will autoload our `lib` modules whenever we restart the
            server or console. (You may need to restart the console every time
            you change a module in `lib`)
          </Paragraph>
          <Paragraph>
            Before we continue to work on the `AccessToken` class, we should
            test it out using the rails console:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :001 > AccessToken
 => AccessToken
2.6.5 :002 > AccessToken.encode
 => 1
2.6.5 :003 > AccessToken.decode
 => 2`}
          </CodeBlock>
          <Paragraph>
            Awesome, it works! We can finally start the `encode` method.
          </Paragraph>
          <Title>Creating The Encode And Decode Methods</Title>
          <Paragraph disableRel>
            In part 7, we [encoded a payload using
            JWT](/blog/social-media-app/jwt-authentication/). We can reuse that
            code in this class. For reference, here is the code we used:
          </Paragraph>
          <CodeBlock language="ruby">
            {`payload = {"user_id": 123}
exp = 1.days.from_now
payload[:exp] = exp.to_i
key = Rails.application.secrets.secret_key_base
encoded_payload = JWT.encode(payload, key)
decoded_jwt = JWT.decode(encoded_payload, key)`}
          </CodeBlock>
          <Paragraph>
            For the `encode` method, we will only focus on the first 5 lines. We
            need to take `payload` as a parameter and return the response from
            `JWT.encode`:
          </Paragraph>
          <CodeBlock language="ruby">
            {`class AccessToken
  class << self
    def encode(payload)
      exp = 1.days.from_now
      payload[:exp] = exp.to_i
      key = Rails.application.secrets.secret_key_base
      JWT.encode(payload, key)
    end

    def decode
      2
    end
  end
end`}
          </CodeBlock>
          <Paragraph>We can also complete the decode method:</Paragraph>
          <CodeBlock language="ruby">
            {`class AccessToken
  class << self
    def encode(payload)
      exp = 1.days.from_now
      payload[:exp] = exp.to_i
      key = Rails.application.secrets.secret_key_base
      JWT.encode(payload, key)
    end

    def decode(token)
      key = Rails.application.secrets.secret_key_base
      JWT.decode(token, key)
    end
  end
end`}
          </CodeBlock>
          <Title>Testing The Encode And Decode Methods</Title>
          <Paragraph>
            Start a new console using `$ rails c` and try calling the
            `AccessToken` methods:
          </Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :001 > payload = {user_id: 123}
 => {:user_id=>123}
2.6.5 :002 > token = AccessToken.encode(payload)
 => "e32...dds3"
2.6.5 :003 > AccessToken.decode(token)
 => [{"user_id"=>123, "exp"=>1582179883}, {"alg"=>"HS256"}]`}
          </CodeBlock>
          <Paragraph>
            Looks like these methods work, but we should create a method that
            returns a user using a token. Here is how the method would look:
          </Paragraph>
          <CodeBlock language="ruby">
            {`def get_user_from_token(token)
  begin
    response = self.decode(token)
  rescue JWT::VerificationError
    return nil
  end
  payload = response[0]
  user_id = payload['user_id']
  User.find_by(id: user_id)
end`}
          </CodeBlock>
          <Paragraph>
            `def get_user_from_token(token)`: This is a self-documenting method
            name for fetching the user from a token passed in.
          </Paragraph>
          <Paragraph>
            `begin...rescue...end`: This will capture exceptions for us. `rescue
            JWT::VerificationError` catches all `VerificationError` exceptions
            from `JWT.decode`. Since `AccessToken.decode` does not catch
            exceptions, it goes up into the `get_user_from_token` method. Within
            `rescue` we return `nil` so that the method returns nothing since a
            user could not be found without a token.
          </Paragraph>
          <Paragraph>
            `response = self.decode(token)`: This assigns the response from the
            `decode` method to `response`. Methods can call other methods within
            the same class using `self`.
          </Paragraph>
          <Paragraph>
            `payload = response[0]`: The `decode` method returns an array that
            contains the `payload` hash and the `algorithim` hash. We would only
            need the first one, which has the `user_id` in it.
          </Paragraph>
          <Paragraph>
            `user_id = payload['user_id']`: since this is a hash, we can
            directly pull the `user_id` from the hash using the `user_id` key.
          </Paragraph>
          <Paragraph>
            `User.find_by(id: user_id)`: This will hit the `users` table in the
            database to fetch the user that has the id that is equal to
            `user_id`.
          </Paragraph>
          <Paragraph>We can test this out in the Rails console:</Paragraph>
          <CodeBlock language="ruby">
            {`2.6.5 :001 > user_id = User.first.id
  User Load (0.4ms)  SELECT "users".* FROM "users" ORDER BY "users"."id" ASC LIMIT $1  [["LIMIT", 1]]
 => "0e6e9b1c-22f5-41a7-91bb-3da9808c7b3e"
2.6.5 :002 > payload = {user_id: user_id}
 => {:user_id=>"0e6e9b1c-22f5-41a7-91bb-3da9808c7b3e"}
2.6.5 :003 > token = AccessToken.encode(payload)
 => "e32...dds3"
2.6.5 :004 > AccessToken.get_user_from_token(token)
  User Load (0.4ms)  SELECT "users".* FROM "users" WHERE "users"."id" = $1 LIMIT $2  [["id", "0e6e9b1c-22f5-41a7-91bb-3da9808c7b3e"], ["LIMIT", 1]]
 => #<User id: "0e6e9b1c-22f5-41a7-91bb-3da9808c7b3e", email: "ab2c@gmail.com", created_at: "2020-02-09 03:07:54", updated_at: "2020-02-09 03:07:54">`}
          </CodeBlock>
          <Paragraph>
            If everything goes well, `AccessToken.get_user_from_token(token)`
            should return a `User`. This will clean up a lot of our code in our
            controllers in the next section.
          </Paragraph>
          <div className="m-t--64 tg__t--center">
            <div className="button">
              <Link
                className="button__text"
                to="/blog/social-media-app/jwt-endpoints/"
              >
                VIEW PART TEN: IMPLEMENTING JWT IN AUTH ENDPOINTS
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
