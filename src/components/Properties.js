import React, { useEffect, useState } from "react";

const Properties = ({ selectedElementId, onUpdateLabel, onUpdatePlaceholder }) => {
    const [label, setLabel] = useState('');
    const [description, setDescription] = useState('');
    const [placeholder, setPlaceholder] = useState('');
    const [options, setOptions] = useState([]);

    useEffect(() => {
        if (selectedElementId !== null && selectedElementId !== undefined) {
            setLabel(selectedElementId?.label || '');
            setDescription(selectedElementId?.description || '');
            setPlaceholder(selectedElementId?.placeholder || '');
            setOptions(selectedElementId?.options || []);
        }
    }, [selectedElementId]);

    const handleLabelChange = (e) => {
        const newLabel = e.target.value;
        onUpdateLabel(newLabel);
    };

    const handleDescriptionChange = (e) => {
        const newDescription = e.target.value;
        setDescription(newDescription);
    };

    const handlePlaceholderChange = (e) => {
        const newPlaceholder = e.target.value;
        setPlaceholder(newPlaceholder);
        onUpdatePlaceholder(newPlaceholder);
    };

    const handleOptionsChange = (e, index) => {
        const newOptions = [...options];
        newOptions[index] = e.target.value;
        setOptions(newOptions);
    };

    const handleAddOption = () => {
        setOptions([...options, '']);
    };

    return (
        <div className="properties-container h-full bg-white p-4 rounded shadow-md">
            <h2 className="text-lg font-semibold mb-4">Properties</h2>
            {selectedElementId && (
                <div className="property mb-4">
                    <label className="block mb-2">Selected Element ID: {selectedElementId?.id}</label>
                </div>
            )}
            <div className="property mb-4">
                <label className="block text-sm font-medium mb-2">Label:</label>
                <input
                    type="text"
                    value={label}
                    onChange={handleLabelChange}
                    className="input-field w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="property mb-4">
                <label className="block text-sm font-medium mb-2">Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="input-field w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="property mb-4">
                <label className="block text-sm font-medium mb-2">Placeholder:</label>
                <input
                    type="text"
                    value={placeholder}
                    onChange={handlePlaceholderChange}
                    className="input-field w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                />
            </div>
            <div className="property mb-4">
                <label className="block text-sm font-medium mb-2">Options:</label>
                {options.map((option, index) => (
                    <input
                        key={index}
                        type="text"
                        value={option}
                        onChange={(e) => handleOptionsChange(e, index)}
                        className="input-field w-full border rounded px-3 py-2 mb-2 focus:outline-none focus:border-blue-500"
                    />
                ))}
                <button onClick={handleAddOption} className="btn btn-secondary">Add Option</button>
            </div>
        </div>
    );
};

export default Properties;
