import { useState } from 'react';

function useSort(data, config) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const handleClick = (label) => {
    // by clicking we cycle through: no sort > asc > desc > no sort > ...

    // reseting the sort order when clicked on another header
    if (sortBy && label !== sortBy) {
      setSortOrder('asc');
      setSortBy(label);
      return;
    }

    // otherwise...
    if (sortOrder === null) {
      setSortOrder('asc');
      setSortBy(label);
    } else if (sortOrder === 'asc') {
      setSortOrder('desc');
      setSortBy(label);
    } else if (sortOrder === 'desc') {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // data passed to Table.js with no modification if no sorting applied
  // (sortOrder && sortBy are null, so the rest of the below 'IF' code will not run)
  let sortedData = data;

  // Only sort data if sortOrder && sortBy exist (are not null)
  if (sortOrder && sortBy) {
    // Find in the 'config' the correct sortByValue function and use it for sorting (config.sortByValue)
    const { sortByValue } = config.find(
      (tableCol) => tableCol.label === sortBy
    );

    // Make a copy of the 'data' prop --> [...data] - never modify state or props directly ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! ! !
    sortedData = [...data].sort((a, b) => {
      //
      const valueA = sortByValue(a);
      const valueB = sortByValue(b);

      // if sort returns:
      //  1 it is ascending: puts a before b
      // -1 it is descending: puts b before a
      //  0 no change
      const howToSort = sortOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        // compare strings
        return valueA.localeCompare(valueB) * howToSort;
      } else {
        // compare numbers
        return (valueA - valueB) * howToSort;
      }
    });
  }

  return {
    sortBy,
    sortOrder,
    sortedData,
    handleClick,
  };
}

export default useSort;
