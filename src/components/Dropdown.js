import { useState } from 'react';

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const renderedOptions = options.map((option, index) => {
    return (
      <div key={option.value}>
        {index}. {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
