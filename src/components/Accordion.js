import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // SIMPLE VERSION - use the below SETTER logic when the new value doesn't depend on previous/old value
  const handleClick_SIMPLE = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(-1)
      } else {
        setExpandedIndex(index)
      }
  };
  
  // FUNCTIONAL VERSION - use this SETTER logic when it depends on the old value (it prevents stale state in React - a very rare case)
  // 'current' is the most up to date of 'expandedIndex' state passed to the function (this is what 'setExpandedIndex' changes in useState)
  const handleClick = (index) => {
    setExpandedIndex((current) => {
      if (current === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex; // true / false

    // React doesn't print on the screen: true, false, null, undifined
    // AND gives back the first falsy value or the last truthy value
    const content = isExpanded && <div className="border-b p-5">{item.content}</div>; // isExpanded && true

    const icon = <span>{isExpanded ? <GoChevronDown /> : <GoChevronRight />}</span>;

    return (
      <div key={item.id}>
        <div
          className="flex p-3 bg-gray-50 border-b items-center cursor-pointer justify-between"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {content}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
