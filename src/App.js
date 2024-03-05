import React from 'react';
import FormBuilder from './components/FormBuilder';
import Toolbox from './components/ToolBox';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow flex flex-col md:flex-row">
        <Toolbox className="md:w-1/4 p-4 border-r border-gray-200" />
        <FormBuilder className="md:w-3/4 p-4" />
      </div>
    </div>
  );
}

export default App;
