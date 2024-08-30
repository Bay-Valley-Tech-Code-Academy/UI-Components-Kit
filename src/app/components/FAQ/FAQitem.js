import React from 'react';

const FAQItem = ({ question, answer, codeSnippet }) => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-bold mb-6">{question}</h3>
      <p className="mb-4">{answer}</p>
      {codeSnippet && (
        <pre className="bg-gray-800 p-4 rounded text-white mt-6 mb-6">
          <code>{codeSnippet}</code>
        </pre>
      )}
    </div>
  );
};

export default FAQItem;
