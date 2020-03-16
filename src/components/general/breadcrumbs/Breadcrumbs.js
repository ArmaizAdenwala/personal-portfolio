import React from 'react';
import { Link } from 'gatsby';

const renderBreadcrumbs = items =>
  items.map((item, index) => (
    <span key={index} className={item.hideOnMobile && 'display--none--s'}>
      <Link className="tg__button tg__td--none" to={item.url}>
        {item.name}
      </Link>
      {index < items.length - 1 && ' > '}
    </span>
  ));

const Breadcrumbs = ({ items }) => (
  <div className="m-v--16">{renderBreadcrumbs(items)}</div>
);

export default Breadcrumbs;
