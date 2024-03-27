import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const FormBuilder = () => {
  const [selectedElement, setSelectedElement] = useState(null);
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [optionInput, setOptionInput] = useState('');
  const [formElements, setFormElements] = useState([]);

  const handleAddOption = () => {
    if (optionInput.trim() !== '') {
      setOptions([...options, optionInput.trim()]);
      setOptionInput('');
    }
  };

  const handleAddElement = (element) => {
    setSelectedElement(element);
    setQuestion('');
  };

  const handleAddFormElement = () => {
    let newElement = null;
    switch (selectedElement) {
      case 'Text Input':
        newElement = <input type="text" className="input border border-gray-400 focus:border-blue-500 focus:ring-blue-500" />;
        break;
      case 'Textarea':
        newElement = <textarea className="input border border-gray-400 focus:border-blue-500 focus:ring-blue-500" />;
        break;
      case 'Select':
        newElement = (
          <select className="input border border-gray-400 focus:border-blue-500 focus:ring-blue-500">
            <option value="">Select...</option>
            {options.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
        );
        break;
      case 'Checkbox':
        newElement = (
          <div>
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="checkbox" className="checkbox text-blue-500 focus:ring-blue-500" />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
        break;
      case 'Single Choice':
        newElement = (
          <div>
            {options.map((option, index) => (
              <div key={index} className="flex items-center mb-2">
                <input type="radio" name="singleChoice" className="radio text-blue-500 focus:ring-blue-500" />
                <label>{option}</label>
              </div>
            ))}
          </div>
        );
        break;
      default:
        break;
    }

    const newFormElement = {
      element: newElement,
      elementLabel: `${question}?`,
    };

    setFormElements([...formElements, newFormElement]);
    setQuestion('');
    setOptions([]);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop(item) {
      handleAddElement(item.name);
    },
  });

  return (
    <div ref={drop} className="container mx-auto flex flex-col h-full p-6 bg-gray-100 rounded-lg shadow-md">
      {selectedElement && (
        <div className="mb-8">
          <input
            type="text"
            placeholder="Enter the question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="input border border-gray-400 focus:border-blue-500 focus:ring-blue-500 mb-4"
          />
          {(selectedElement === 'Checkbox' || selectedElement === 'Select' || selectedElement === 'Single Choice') && (
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter option..."
                value={optionInput}
                onChange={(e) => setOptionInput(e.target.value)}
                className="input border border-gray-400 focus:border-blue-500 focus:ring-blue-500 mr-4"
              />
              <button
                className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow"
                onClick={handleAddOption}
              >
                Add Option
              </button>
            </div>
          )}
          <div className="mt-4">
            {options.map((option, index) => (
              <div key={index} className="bg-gray-200 rounded-md p-2 mb-2">{option}</div>
            ))}
          </div>
          <button
            className="btn mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow"
            onClick={handleAddFormElement}
          >
            Add {selectedElement}
          </button>
        </div>
      )}
      <div className="form-elements flex-grow">
        {formElements.map(({ element, elementLabel }, index) => (
          <div key={index} className="bg-white rounded-md shadow-md p-4 mb-4">
            <p className="font-semibold text-gray-700 mb-2">{elementLabel}</p>
            {element}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
