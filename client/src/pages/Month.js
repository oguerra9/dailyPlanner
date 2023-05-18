import React from 'react';

export default function Month(props) {
  let timestamp = props.timestamp;
  console.log(timestamp);

  return (
    <div>
      <h1>Month Page</h1>
      <h2>Time: {timestamp}</h2>
      <p>
        This is my month page.
      </p>
    </div>
  );
}