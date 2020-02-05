import React from 'react';

const Title = ({ children, first }) => {
  if (first) {
    return (
      <h3
        className="
      tg__title-5--s
      tg__title-4--m
      tg__title-4--l
      tg__t--center--s
      tg__c--primary
      tg__w--700
      m-v--8
    "
      >
        {children}
      </h3>
    );
  }
  return (
    <h3
      className="
      tg__title-5--s
      tg__title-4--m
      tg__title-4--l
      tg__t--center--s
      tg__c--primary
      tg__w--700
      m-v--8
      m-t--64
    "
    >
      {children}
    </h3>
  );
};

export default Title;
