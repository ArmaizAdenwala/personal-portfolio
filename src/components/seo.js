/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description,
  lang,
  meta,
  title,
  secondaryTitle,
  canonical,
  image,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const socialTitle = `${title} | ${secondaryTitle || site.siteMetadata.title}`;
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${secondaryTitle || site.siteMetadata.title}`}
      meta={[
        {
          name: `viewport`,
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ].concat(meta)}
    >
      {canonical && <link rel="canonical" key={canonical} href={canonical} />}
      {canonical && <meta property="og:url" content={canonical} />}
      {image && <meta property="og:image" content={image} />}
      {image && <meta name="twitter:image:src" content={image} />}
      <meta charset="UTF-8" />
      <meta name="author" content="Armaiz Adenwala" />
      <meta name="description" content={metaDescription} />
      <meta name="twitter:card" content={'summary'} />
      <meta name="twitter:creator" content={'Armaiz Adenwala'} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <link rel="shortcut icon" href="/favicon.png" />
    </Helmet>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: `Software Engineer based in Sacramento, CA.`,
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;
