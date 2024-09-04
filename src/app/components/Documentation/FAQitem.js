import React from 'react';

const FAQItem = ({ question, answer }) => {
  return (
    <div className="mb-2">
      <h3 className="text-2xl font-semibold mb-4">{question}</h3>
      <p>{answer}</p>
    </div>
  );
};

export default FAQItem;
