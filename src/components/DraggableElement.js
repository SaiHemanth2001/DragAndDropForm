import React from 'react';

const DraggableElement = ({ type, children }) => {
  const handleDragStart = (event) => {
    event.dataTransfer.setData('text/plain', type);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="p-2 bg-gray-100 cursor-pointer"
    >
      {children}
    </div>
  );
};

export default DraggableElement;
