import React, { useState } from 'react';
import ElementList from './components/ElementList';
import FormBuilder from './components/FormBuilder';

function App() {
  const [selectedElement, setSelectedElement] = useState(null);

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-3/4 bg-gray-200">
        <div className="h-full flex flex-col justify-start items-center p-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Create Your Forms</h1>
          <div className="flex-grow w-full">
            <FormBuilder selectedElement={selectedElement} />
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-gray-200">
        <div className="h-full">
          <ElementList setSelectedElement={setSelectedElement} />
        </div>
      </div>
    </div>
  );
}

export default App;
