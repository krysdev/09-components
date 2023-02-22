import { useState } from 'react';

function Dropdown({ options, selection, onSelect }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    // close dropdown
    setIsOpen(false);
    // what option clicked (value is an object)
    console.log(value);
    onSelect(value);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {index} - {option.label}
      </div>
    );
  });

  let content = 'Select...';
  if (selection) {
    content = selection.label;
  }

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
