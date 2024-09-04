import React from 'react';

const FAQItem = ({ question, answer, codeSnippet }) => {
  return (
    <div className="mb-2">
      <h3 className="text-2xl font-bold mb-4">{question}</h3>
      <p>{answer}</p>
      {codeSnippet && (
        <pre>
          <code>{codeSnippet}</code>
        </pre>
      )}
    </div>
  );
};

export default FAQItem;
