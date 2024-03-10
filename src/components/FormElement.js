// FormElement.js
import React from 'react';

const FormElement = ({ type, content, onChange, ...rest }) => {
  switch (type) {
    case 'text':
      return <input type="text" value={content} onChange={(e) => onChange(e.target.value)} {...rest} />;
    case 'textarea':
      return <textarea value={content} onChange={(e) => onChange(e.target.value)} {...rest}></textarea>;
    case 'radio':
      return (
        <div>
          {["Option 1", "Option 2", "Option 3"].map((option, index) => (
            <div key={index}>
              <label>
                <input
                  type="radio"
                  value={option}
                  checked={content === option}
                  onChange={(e) => onChange(e.target.value)}
                />
                {option}
              </label>
            </div>
          ))}
        </div>
      );
    case 'rating':
      const ratingStars = [...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < parseInt(content) ? "text-yellow-500 cursor-pointer" : "text-gray-300 cursor-pointer"}
          onClick={() => onChange(i + 1)}
        >
          ★
        </span>
      ));
      return <div>{ratingStars}</div>;
    case 'time':
      return <input type="time" value={content} onChange={(e) => onChange(e.target.value)} {...rest} />;
    default:
      return null;
  }
};

export default FormElement;
