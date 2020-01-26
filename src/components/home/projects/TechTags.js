import React from 'react';
import './TechTags.scss';

const _renderTag = tag => <span className="tech-tags__tag">{tag}</span>;
const TechTags = ({ tags }) => (
  <div className="tech-tags">{tags.map(tag => _renderTag(tag))}</div>
);

export default TechTags;
