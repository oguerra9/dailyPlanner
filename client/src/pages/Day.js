import React from 'react';
import Date from '../utils/dateMethods';

export default function Day(props) {
  let timestamp = props.timestamp;

  let currDate = new Date(timestamp);
  let currDay = currDate.getDay();

  return (
    <div>
      <h1>Day Page</h1>
      <h2>Time: {currDay}</h2>
      <p>
        This is my day page.
      </p>
    </div>
  );
}