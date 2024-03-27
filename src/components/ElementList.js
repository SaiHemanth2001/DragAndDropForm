import React from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faAlignLeft, faList, faCheckSquare, faCircle } from '@fortawesome/free-solid-svg-icons'; 
import { ItemTypes } from './ItemTypes'; 

const Element = ({ name, icon }) => {
  const [, drag] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { name },
  });

  return (
    <button
      ref={drag}
      className="element-button block w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
    >
      <FontAwesomeIcon icon={icon} className="text-blue-500 text-lg" />
      <span className="ml-2">{name}</span>
    </button>
  );
};

const ElementList = ({ setSelectedElement }) => {
  const elements = [
    { name: 'Text Input', icon: faFont },
    { name: 'Textarea', icon: faAlignLeft },
    { name: 'Select', icon: faList },
    { name: 'Checkbox', icon: faCheckSquare },
    { name: 'Single Choice', icon: faCircle },
  ];

  return (
    <div className="element-list bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
      <ul className="space-y-4">
        {elements.map((element, index) => (
          <li key={index} className="element-item">
            <Element name={element.name} icon={element.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ElementList;
