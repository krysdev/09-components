import { useState } from 'react';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (value) => {
    // close dropdown
    setIsOpen(false);
    // what option clicked (value is an object)
    console.log(value);
    onChange(value);
  };

  const renderedOptions = options.map((option, index) => {
    return (
      <div key={option.value} onClick={() => handleOptionClick(option)}>
        {index} - {option.label}
      </div>
    );
  });

  // let content = 'Select...';
  // if (value) {
  //   content = value.label;
  // }

  // if 'value' is null, the '?' will cause to the expresion to return 'undiefined'
  // so: undiefined || 'string' --> string   ('OR' returns the first truthy value [or the last falsy value])
  let content = value?.label || 'Select...';

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>{content}</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
