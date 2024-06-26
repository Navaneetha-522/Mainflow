import React from 'react';
import './Image.css';

function Image({ src, openModal }) {
  return (
    <div className="image" onClick={() => openModal(src)}>
      <img src={src} alt="Gallery" />
    </div>
  );
}

export default Image;
