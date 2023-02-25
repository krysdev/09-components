import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import PillReusableComponent from './PillReusableComponent';

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
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        key={option.value}
        onClick={() => handleOptionClick(option)}
      >
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
    <div className="w-48 relative">
      <PillReusableComponent
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {content}
        <GoChevronDown />
      </PillReusableComponent>
      {isOpen &&(
        <PillReusableComponent className="absolute top-full">
          {renderedOptions}
        </PillReusableComponent>
      )}
    </div>
  );
}

export default Dropdown;
