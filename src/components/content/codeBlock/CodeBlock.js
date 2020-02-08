import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const CodeBlock = ({ children, language }) => (
  <SyntaxHighlighter language={language} useInlineStyles={false}>
    {children}
  </SyntaxHighlighter>
);

export default CodeBlock;
