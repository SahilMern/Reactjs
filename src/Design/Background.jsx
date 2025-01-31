import React from 'react';
import './Background.css'; // CSS file ko import karenge

const App = () => {
  return (
    <div className="background">
      {/* Left side background design */}
      <div className="left-background"></div>

      {/* Content */}
      <div className="content">
        <h1 className="small-text">Hello there</h1>
        <h2 className="big-text">Sahil Yadav</h2>
        <p className="description">
          Kuch mere baare mein...
        </p>
      </div>
    </div>
  );
};

export default App;