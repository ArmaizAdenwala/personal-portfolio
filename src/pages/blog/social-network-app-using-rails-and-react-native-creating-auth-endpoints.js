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
            should not store it anywhere. But for testing these endpoints, it
            doesn't matter much._
          </Paragraph>
          <Title>What is a Rails Controller?</Title>
          <Paragraph>
            In simple terms, a controller is a Ruby file with methods that
            recieve paramaters and outputs a response. In orther words, it
            connects the frontend to the database. We can route urls such as
            `https://localhost:3000/users/register` to methods in a controller
            such as the `register` method. We will cover more on this soon.
          </Paragraph>
          <Title>Creating A Controller</Title>
          <Paragraph>
            Rails provides us a command to create a controller automatically.
            Lets run `$ rails generate controller users`
          </Paragraph>
          <CodeBlock language="console">{`$ rails generate controller users
      create  app/controllers/users_controller.rb
      invoke  test_unit
      create    test/controllers/users_controller_test.rb`}</CodeBlock>
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
