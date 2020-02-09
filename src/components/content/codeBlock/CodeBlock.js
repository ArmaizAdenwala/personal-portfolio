import React from 'react';
import SyntaxHighlighter, { Prism } from 'react-syntax-highlighter';

const CodeBlock = ({ children, language, useHighlight }) => {
  if (useHighlight) {
    return (
      <SyntaxHighlighter language={language} useInlineStyles={false}>
        {children}
      </SyntaxHighlighter>
    );
  }
  return (
    <Prism language={language} useInlineStyles={false}>
      {children}
    </Prism>
  );
};

export default CodeBlock;
