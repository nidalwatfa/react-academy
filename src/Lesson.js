import React from 'react';

function Lesson({ title, content }) {
  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Lesson;
