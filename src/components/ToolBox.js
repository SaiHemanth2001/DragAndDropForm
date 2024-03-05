import React from 'react';
import DraggableElement from './DraggableElement';

const Toolbox = () => {
  return (
    <div className="w-1/4 p-4 border-r border-gray-200">
      <h2 className="text-lg font-bold mb-4">Toolbox</h2>
      <div className="flex flex-col gap-4">
        <DraggableElement type="text">Text Field</DraggableElement>
        <DraggableElement type="textarea">Textarea</DraggableElement>
        <DraggableElement type="radio">Radio Button</DraggableElement>
        {/* Add more draggable elements for other form fields here */}
      </div>
    </div>
  );
};

export default Toolbox;
