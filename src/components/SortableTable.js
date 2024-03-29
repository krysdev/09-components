// This file is used to sort data rendered by Table.js (so the data flow is: TablePage > SortableTable > Table)

// As an input for this component, so it can sort, we have:
// - an array of objects ('data' hardcoded in TablePage)
// - a function to extract a value we want to sort by -> { sortByValue }
// - sorting order (ascending or descending)

import Table from './Table';
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from '../hooks/use-sort';

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
  const { config, data } = props;

  const { sortBy, sortOrder, sortedData, handleClick } = useSort(data, config);

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

  // {...props} --> data={data} config={config}
  // config={updatedConfig} is after {...props}, so config={config} will be overwritten if
  // the updated config object is returned from the mapping function
  return <Table {...props} config={updatedConfig} data={sortedData} />;
}

export default SortableTable;
