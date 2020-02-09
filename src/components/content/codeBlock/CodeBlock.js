import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

const CodeBlock = ({ children, language }) => (
  <SyntaxHighlighter language={language} useInlineStyles={false}>
    {children}
  </SyntaxHighlighter>
);

export default CodeBlock;
