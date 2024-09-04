import React from 'react';

const GetStarted = ({ subtitle, body }) => {
  return (
    <div className="mb-4">
      <h3 className="text-2xl font-semibold text-[#ffffff] mb-4">{subtitle}</h3>
      <p className="text-[#ffffff">{body}</p>
    </div>
  );
};

export default GetStarted;
