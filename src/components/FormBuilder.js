// FormBuilder.js
import React, { useState } from 'react';
import FormElement from './FormElement';

const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);
  const [previewContent, setPreviewContent] = useState('');

  const handleDrop = (event) => {
    event.preventDefault();
    const elementType = event.dataTransfer.getData('text/plain');
    setFormElements([...formElements, { type: elementType, content: '', options: ["Option 1", "Option 2", "Option 3"] }]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleChange = (index, content) => {
    const updatedElements = [...formElements];
    updatedElements[index].content = content;
    setFormElements(updatedElements);
  };

  const generatePreviewContent = () => {
    const previewContentArray = formElements.map(element => `${element.type}: ${element.content}`).filter(content => content !== '');
    setPreviewContent(previewContentArray.join('\n'));
  };

  return (
    <div className="w-3/4 p-4">
      <h2 className="text-lg font-bold mb-4">Form Builder</h2>
      <div className="border border-gray-200 h-96 grid grid-cols-2 gap-4 p-4" onDrop={handleDrop} onDragOver={handleDragOver}>
        {formElements.map((element, index) => (
          <div key={index} className="w-full flex flex-col justify-center items-center">
            <label className="font-bold mb-2">{element.type}:</label>
            <div>
              <FormElement type={element.type} content={element.content} options={element.options} onChange={(content) => handleChange(index, content)} style={{ width: '200px', height: '50px' }} />
            </div>
          </div>
        ))}
      </div>
      <button onClick={generatePreviewContent} className="bg-blue-500 text-white px-4 py-2 mt-4 rounded">Generate Preview</button>
      <div className="mt-4">
        <h2 className="text-lg font-bold mb-4">Form Preview</h2>
        <div className="border border-gray-200 p-4">
          {previewContent && <pre>{previewContent}</pre>}
        </div>
      </div>
    </div>
  );
};

export default FormBuilder;
