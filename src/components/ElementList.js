import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faAlignLeft, faList, faCheckSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

const ElementList = ({ setSelectedElement }) => {
  const elements = [
    { name: 'Text Input', icon: faFont },
    { name: 'Textarea', icon: faAlignLeft },
    { name: 'Select', icon: faList },
    { name: 'Checkbox', icon: faCheckSquare },
    { name: 'Single Choice', icon: faCircle },
  ];

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
      <ul className="space-y-2">
        {elements.map((element, index) => (
          <li key={index}>
            <button
              className="block w-full bg-white hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-sm flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => setSelectedElement(element.name)}
            >
              <FontAwesomeIcon icon={element.icon} className="text-blue-500" />
              <span>{element.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElementList;
