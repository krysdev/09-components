import { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (optSelected) => {
    setSelection(optSelected);
  };

  return (
    <div className='flex'>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
      {/* <Dropdown options={options} value={selection} onChange={handleSelect} /> */}
    </div>
  );
}

export default App;
