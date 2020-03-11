import React from 'react';
import {PrismAsyncLight as Prism} from 'react-syntax-highlighter';

const CodeBlock = ({ children, language, useHighlight }) => {
  return (
    <Prism language={language} useInlineStyles={false}>
      {children}
    </Prism>
  );
};

export default CodeBlock;
