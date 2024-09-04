import React from 'react';

const GetStarteditem = ({ subtitle, body }) => {
  return (
    <div className="mb-2">
      <h3 className="text-2xl font-semibold mb-4">{subtitle}</h3>
      <p>{body}</p>
    </div>
  );
};

export default GetStarteditem;
