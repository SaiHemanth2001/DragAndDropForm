import React from 'react';
import FormBuilder from './components/FormBuilder';
import Toolbox from './components/ToolBox';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Toolbox />
      <FormBuilder />
    </div>
  );
}

export default App;
