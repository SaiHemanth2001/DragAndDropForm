import React from 'react';

const FormElement = ({ type }) => {
  let element = null;

  switch (type) {
    case 'text':
      element = <input type="text" className="border rounded p-2 mb-2" />;
      break;
    case 'textarea':
      element = <textarea className="border rounded p-2 mb-2" />;
      break;
    case 'radio':
      element = (
        <div>
          <label className="mr-2">
            <input type="radio" name="radio" value="option1" />
            Option 1
          </label>
          <label>
            <input type="radio" name="radio" value="option2" />
            Option 2
          </label>
        </div>
      );
      break;
    // Add more cases for other form elements as needed
    default:
      element = null;
  }

  return <div>{element}</div>;
};

export default FormElement;
