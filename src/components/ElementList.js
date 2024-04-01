import React, { useState } from 'react';
import { useDrag } from 'react-dnd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faAlignLeft, faList, faCheckSquare, faCircle } from '@fortawesome/free-solid-svg-icons'; 
import { ItemTypes } from './ItemTypes'; 

const Element = ({ name, icon }) => {
  const [, drag] = useDrag({
    type: ItemTypes.ELEMENT,
    item: { name },
  });

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      ref={drag}
      className={`element-button w-full bg-white text-gray-800 font-semibold py-3 px-6 rounded-lg flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ${hovered ? 'hover:bg-gray-100 shadow-md' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <FontAwesomeIcon icon={icon} className="text-blue-500 text-lg" />
      <span className="ml-2">{name}</span>
    </div>
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
    <div className="element-list bg-white p-4 rounded-lg fixed inset-0 w-1/4 h-full overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Form Elements</h2>
      <div className="flex flex-col space-y-4">
        {elements.map((element, index) => (
          <Element key={index} name={element.name} icon={element.icon} />
        ))}
      </div>
    </div>
  );
};

export default ElementList;
