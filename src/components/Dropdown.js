import { useEffect, useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import PillReusableComponent from './PillReusableComponent';

function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handler = (event) => { 
      console.log(event.target);
    };
    // 'true' as a third argument, becasue we want to watch for clicks during the capture phase (capture, target, bubble )
    document.addEventListener('click', handler, true);

    // when the second argument of useEffect is an empty array we can't forget about the clean up function (to remove the event listener)
    // the RETURNED function will be called during the second render (on hold during the first one)
    const cleanUp = () => { 
      document.removeEventListener('click', handler)
    };
    
    return cleanUp

  }, []);

  const handleOptionClick = (value) => {
    // close dropdown
    setIsOpen(false);
    // what option clicked (value is an object)
    console.log(value);
    onChange(value);
  };

  const renderedOptionsList = options.map((option, index) => {
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
        <PillReusableComponent
          className="absolute top-full"
        >
          {renderedOptionsList}
        </PillReusableComponent>
      )}
    </div>
  );
}

export default Dropdown;
