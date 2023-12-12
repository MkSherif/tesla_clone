import React from 'react';
import './Notfound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <h2 className='pageno'>Page Not Found</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <a href="/">Go to Homepage</a>
    </div>
  );
};

export default NotFound;
