// This file is used to sort data rendered by Table.js (so the data flow is: TablePage > SortableTable > Table)

// As an input for this component, so it can sort, we have:
// - an array of objects ('data' hardcoded in TablePage)
// - a function to extract a value we want to sort by -> { sortByValue }
// - sorting order (ascending or descending)

import { useState } from 'react';
import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';

const getIcons = (columnLabel, sortByColumn, sortingOrder) => {
  // no sorting applied
  if (columnLabel !== sortByColumn) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  // no sorting applied
  if (sortingOrder === null) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  }
  // ascending
  else if (sortingOrder === 'asc') {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  }
  // descending
  else if (sortingOrder === 'desc') {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
};

function SortableTable(props) {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

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

  const updatedConfig = config.map((tableColumn) => {
    if (!tableColumn.sortByValue) {
      // if the column doesn't have to be sortable, then return it
      return tableColumn;
    }
    // else, return the whole object plus a function to display a sortable header
    return {
      ...tableColumn,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-900"
          onClick={() => {
            handleClick(tableColumn.label);
          }}
        >
          <div className="flex items-center">
            {getIcons(tableColumn.label, sortBy, sortOrder)}
            {tableColumn.label}
          </div>
        </th>
      ),
    };
  });

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

  // {...props} --> data={data} config={config}
  // config={updatedConfig} is after {...props}, so config={config} will be overwritten if
  // the updated config object is returned from the mapping function
  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
