import React from 'react';
import DraggableElement from './DraggableElement';

const Toolbox = () => {
  return (
    <div className="w-full md:w-1/4 p-4 border-r border-gray-200">
      <h2 className="text-lg font-bold mb-4">Toolbox</h2>
      <div className="flex flex-wrap gap-4">
        <DraggableElement type="text" className="w-full md:w-auto p-2 bg-gray-100 cursor-pointer">
          Text Field
        </DraggableElement>
        <DraggableElement type="textarea" className="w-full md:w-auto p-2 bg-gray-100 cursor-pointer">
          Textarea
        </DraggableElement>
        <DraggableElement type="radio" className="w-full md:w-auto p-2 bg-gray-100 cursor-pointer">
          Radio Button
        </DraggableElement>
        {/* Add more draggable elements for other form fields here */}
      </div>
    </div>
  );
};

export default Toolbox;
