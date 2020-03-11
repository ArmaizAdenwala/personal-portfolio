/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import './layout.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faGithub, faLinkedin);

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
