import React from 'react';

const FormElement = ({ type }) => {
  let element = null;
  let elementName = null;

  switch (type) {
    case 'text':
      element = <input type="text" className="border rounded p-2 mb-2 w-full" />;
      elementName = "Text Field";
      break;
    case 'textarea':
      element = <textarea className="border rounded p-2 mb-2 w-full" />;
      elementName = "Textarea";
      break;
    case 'radio':
      element = (
        <div>
          <label className="block mb-2">
            <input type="radio" name="radioGroup" value="option1" />
            Option 1
          </label>
          <label className="block">
            <input type="radio" name="radioGroup" value="option2" />
            Option 2
          </label>
        </div>
      );
      elementName = "Radio Button";
      break;
    default:
      element = null;
  }

  return (
    <div className="mb-4">
      <p className="text-sm font-bold">{elementName}</p>
      {element}
    </div>
  );
};

export default FormElement;
