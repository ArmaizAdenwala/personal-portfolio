import React from 'react';
import './layout.css';

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
export default Layout;
