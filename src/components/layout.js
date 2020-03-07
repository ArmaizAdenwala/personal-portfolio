/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import './layout.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faCheckSquare,
  faCoffee,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCheckSquare, faCoffee, faEnvelope);

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
