import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const FormBuilder = ({ selectedElementId, onUpdateLabel, onUpdatePlaceHolder }) => {
  const [droppedElements, setDroppedElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    if (selectedElementId !== null) {
      setSelectedId(selectedElementId.id);
    } else {
      setSelectedId(null);
    }
  }, [selectedElementId]);

  useEffect(() => {
    if (selectedId !== null && selectedElementId) {
      const updatedElements = droppedElements.map(element => {
        if (element.id === selectedId) {
          return { ...element, label: selectedElementId.label, placeholder: selectedElementId.placeholder };
        }
        return element;
      });
      setDroppedElements(updatedElements);
    }
  }, [selectedElementId, droppedElements, selectedId]);

  const handleDrop = (item) => {
    const newElement = {
      id: Math.random().toString(36).substr(2, 9),
      type: item.name,
      value: '',
      placeholder: !(item.name === 'Select' || item.name === 'Single Choice' || item.name === 'Checkbox') ? `Enter ${item.name}` : '', 
      options: item.name === 'Select' || item.name === 'Single Choice' || item.name === 'Checkbox' ? ['Option 1', 'Option 2', 'Option 3'] : [],
      label: item.name
    };
    setDroppedElements([...droppedElements, newElement]);
  };
  
  const handleInputChange = (id, value) => {
    const updatedElements = droppedElements.map(element => {
      if (element.id === id) {
        return { ...element, value };
      }
      return element;
    });
    setDroppedElements(updatedElements);
  };

  const handleOptionChange = (id, index, value) => {
    const updatedElements = droppedElements.map(element => {
      if (element.id === id && (element.type === 'Select' || element.type === 'Single Choice' || element.type === 'Checkbox')) {
        const updatedOptions = [...element.options];
        updatedOptions[index] = value;
        return { ...element, options: updatedOptions };
      }
      return element;
    });
    setDroppedElements(updatedElements);
  };

  const [, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: (item) => handleDrop(item),
  });

  const handleSelectElement = (id) => {
    setSelectedId(id);
  };

  return (
    <div className="form-builder-container flex justify-center items-center h-full">
      <div className="drop-area w-full h-full bg-white p-4 border border-blue-300 rounded" ref={drop}>
        {droppedElements.map((element, index) => (
          <div key={element.id} className={`flex flex-col mb-4 ${selectedId === element.id ? 'bg-red-100' : ''}`} onClick={() => handleSelectElement(element.id)}>
            <h3 className="text-xl mb-2">{element.label}</h3> 
            {element.type === 'Text Input' && (
              <input
                type="text"
                placeholder={element.placeholder} 
                value={element.value}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
                className="border border-blue-500 rounded p-2"
              />
            )}
            {element.type === 'Textarea' && (
              <textarea
                placeholder={element.placeholder} 
                value={element.value}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
                className="border border-blue-500 rounded p-2"
              />
            )}
            {element.type === 'Select' && (
              <select
                placeholder={element.placeholder} 
                value={element.value}
                onChange={(e) => handleInputChange(element.id, e.target.value)}
                className="border border-blue-500 rounded p-2"
              >
                {element.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            )}
            {(element.type === 'Single Choice' || element.type === 'Checkbox') && (
              <div>
                {element.options.map((option, idx) => (
                  <div key={idx} className="flex items-center mb-2">
                    {element.type === 'Single Choice' && (
                      <input
                        type="radio"
                        name={`radio-${element.id}`}
                        value={option}
                        onChange={(e) => handleInputChange(element.id, e.target.value)}
                        className="mr-2"
                      />
                    )}
                    {element.type === 'Checkbox' && (
                      <input
                        type="checkbox"
                        value={option}
                        onChange={(e) => handleOptionChange(element.id, idx, e.target.value)}
                        className="mr-2"
                      />
                    )}
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FormBuilder;
