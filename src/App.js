import React, { useState } from 'react';
import ElementList from './components/ElementList';
import FormBuilder from './components/FormBuilder';

function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <div className="w-full lg:w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <ElementList setSelectedElement={setSelectedElement} />
      </div>
      <div className="w-full lg:w-3/4 p-4 bg-gray-200">
        <h1 className="text-4xl font-bold mb-4 text-center">Create Your Forms</h1>
        <FormBuilder selectedElement={selectedElement} />
      </div>
    </div>
  );
}

export default App;
