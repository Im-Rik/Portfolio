import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="canvas-loader"></div> {/* Add a CSS class for the spinner */}
    </div>
  );
};

export default Loader;
