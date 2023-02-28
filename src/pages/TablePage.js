import Table from '../components/Table';

function TablePage() {
  const data = [
    { name: 'Orange', colour: 'bg-orange-500', score: 5 },
    { name: 'Apple', colour: 'bg-red-500', score: 3 },
    { name: 'Banana', colour: 'bg-yellow-500', score: 1 },
    { name: 'Lime', colour: 'bg-green-500', score: 4 },
  ];

  return (
    <div>
      <Table data={data} />
    </div>
  );
}

export default TablePage;
