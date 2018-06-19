import React from 'react';

const Tweet = ({ children, username, date, avatar }) => (
  <div>
    <div>{username}</div>
    <div>{date}</div>
    <div>{avatar}</div>
    <div>{children}</div>
  </div>
);

export default Tweet;
