import React from 'react';

export default function Week(props) {
  let timestamp = props.timestamp;

  return (
    <div>
      <h1>Week Page</h1>
      <h2>Time: {timestamp}</h2>
      <p>
        This is my week page.
      </p>
    </div>
  );
}