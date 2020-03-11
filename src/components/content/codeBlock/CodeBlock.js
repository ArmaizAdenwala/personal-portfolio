import React from 'react';
// import { PrismAsyncLight as Prism } from 'react-syntax-highlighter';
import { PrismLight as Prism } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import java from 'react-syntax-highlighter/dist/esm/languages/prism/java';
import ruby from 'react-syntax-highlighter/dist/esm/languages/prism/ruby';
import makefile from 'react-syntax-highlighter/dist/esm/languages/prism/makefile';
import cpp from 'react-syntax-highlighter/dist/esm/languages/prism/cpp';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';

Prism.registerLanguage('jsx', jsx);
Prism.registerLanguage('python', python);
Prism.registerLanguage('bash', bash);
Prism.registerLanguage('javascript', javascript);
Prism.registerLanguage('java', java);
Prism.registerLanguage('ruby', ruby);
Prism.registerLanguage('makefile', makefile);
Prism.registerLanguage('cpp', cpp);
Prism.registerLanguage('json', json);

const CodeBlock = ({ children, language }) => {
  return (
    <Prism language={language} useInlineStyles={false}>
      {children}
    </Prism>
  );
};

export default CodeBlock;
