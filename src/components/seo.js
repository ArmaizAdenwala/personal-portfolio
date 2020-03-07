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
  ldJson,
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
  const metaImage =
    'https://armaizadenwala.com' + (image || '/armaiz-developer-full.png');
  if (ldJson) {
    ldJson.image = metaImage;
  }
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
      <meta charset="UTF-8" />
      <meta name="author" content="Armaiz Adenwala" />
      <meta name="description" content={metaDescription} />
      <meta name="twitter:card" content={'summary_large_image'} />
      <meta name="twitter:creator" content={'Armaiz Adenwala'} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image:src" content={metaImage} />
      <meta name="twitter:image" content={metaImage} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <meta property="og:image" content={metaImage} />
      {canonical && <meta property="og:url" content={canonical} />}
      <link rel="shortcut icon" href="/favicon.png" />

      {ldJson && (
        <script type="application/ld+json">{JSON.stringify(ldJson)}</script>
      )}
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
