import React from 'react';

const getStarted = ({ subtitle, body, codeSnippet }) => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-semibold text-[#ffffff] mb-4">{subtitle}</h3>
      <p className="text-[#ffffff">{body}</p>
      {codeSnippet && (
        <pre className="bg-gray-800 p-4 rounded text-white mt-6 mb-6">
          <code>{codeSnippet}</code>
        </pre>
      )}
    </div>
  );
};

export default getStarted;
