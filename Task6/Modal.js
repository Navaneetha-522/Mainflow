import React, { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ src, closeModal }) {
  const [zoom, setZoom] = useState(1);
  const [originalSize, setOriginalSize] = useState({ width: 'auto', height: 'auto' });

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setOriginalSize({ width: img.width, height: img.height });
    };
  }, [src]);

  const zoomIn = () => {
    setZoom((prevZoom) => Math.min(prevZoom + 0.2, 3));
  };

  const zoomOut = () => {
    setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1));
  };

  return (
    <div className="modal">
      <span className="close" onClick={closeModal}>&times;</span>
      <div className="modal-controls">
        <button onClick={zoomOut} disabled={zoom <= 1}>-</button>
        <button onClick={zoomIn} disabled={zoom >= 3}>+</button>
      </div>
      <div className="modal-content-wrapper">
        <img
          className="modal-content"
          src={src}
          alt="Selected"
          style={{ 
            width: originalSize.width * zoom, 
            height: originalSize.height * zoom 
          }}
        />
      </div>
    </div>
  );
}

export default Modal;
