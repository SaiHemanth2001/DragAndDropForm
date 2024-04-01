import React, { useState } from 'react';
import ElementList from './components/ElementList';
import FormBuilder from './components/FormBuilder';
import Properties from './components/Properties';

function App() {
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleLabelChange = (newLabel) => {
    setSelectedElementId(prevState => ({
      ...prevState,
      label: newLabel
    }));
  };

  const handlePlaceholderChange = (newPlaceholder) => {
    setSelectedElementId(prevState => ({
      ...prevState,
      placeholder: newPlaceholder
    }));
  };

  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-1/4 bg-white">
        <div className="h-full flex flex-col justify-center items-center p-4">
          <ElementList setSelectedElementId={setSelectedElementId} />
        </div>
      </div>
      <div className="w-1/2 bg-gray-200 overflow-y-auto">
        <div className="h-full flex flex-col justify-start items-center p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-black">Create Your Forms</h1>
          <div className="flex-grow w-full">
            <FormBuilder selectedElementId={selectedElementId} onUpdateLabel={handleLabelChange} onUpdatePlaceholder={handlePlaceholderChange} />
          </div>
        </div>
      </div>
      <div className="w-1/4 bg-white overflow-y-auto">
        <Properties selectedElementId={selectedElementId} onUpdateLabel={handleLabelChange} onUpdatePlaceholder={handlePlaceholderChange} />
      </div>
    </div>
  );
}

export default App;
