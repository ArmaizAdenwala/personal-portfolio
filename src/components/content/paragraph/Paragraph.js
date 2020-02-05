import React from 'react';
import Markdown from 'markdown-to-jsx';

const Paragraph = ({ children }) => (
  <p
    className="
      tg__title-7--s
      tg__title-6--m
      tg__title-6--l
      tg__lh--1-5--s
      tg__lh--1-75--m
      tg__lh--1-75--l
      m-v--8
      m-t--24"
  >
    <Markdown
      options={{
        overrides: {
          strong: {
            props: {
              className: 'tg__c--primary tg__w--500',
            },
          },
        },
      }}
    >
      {children}
    </Markdown>
  </p>
);

export default Paragraph;
