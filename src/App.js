import React from 'react';
import Toolbox from './components/ToolBox';
import FormBuilder from './components/FormBuilder';

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Toolbox />
      <FormBuilder />
    </div>
  );
}

export default App;
