import React, { useState } from 'react';
import FormElement from './FormElement';

const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const elementType = event.dataTransfer.getData('text/plain');
    setFormElements([...formElements, { type: elementType }]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="w-full md:w-3/4 p-4">
      <h2 className="text-lg font-bold mb-4">Form Builder</h2>
      <div className="border border-gray-200 p-4 h-auto md:h-64 flex justify-center items-center" onDrop={handleDrop} onDragOver={handleDragOver}>
        <form className="w-full">
          {formElements.map((element, index) => (
            <FormElement key={index} type={element.type} />
          ))}
        </form>
      </div>
    </div>
  );
};

export default FormBuilder;
