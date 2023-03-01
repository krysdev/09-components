import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', colour: 'bg-orange-500', score: 5 },
    { name: 'Apple', colour: 'bg-red-500', score: 3 },
    { name: 'Banana', colour: 'bg-yellow-500', score: 1 },
    { name: 'Lime', colour: 'bg-green-500', score: 4 },
  ];

  //  each object in the 'config' array is a column in the table
  // { label-> column header, render-> cell content }
  const config = [
    {
      label: 'Name',
      render: (dataObjct) => dataObjct.name,
    },
    {
      label: 'Color',
      render: (dataObjct) => <div className={`p-3 m-2 ${dataObjct.colour}`} />,
    },
    {
      label: 'Score',
      render: (dataObjct) => dataObjct.score,
    },
  ];

  return (
    <div>
      <Table data={data} config={config} />
    </div>
  );
}

export default TablePage;
