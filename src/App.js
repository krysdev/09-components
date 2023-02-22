import { useState } from 'react';
import Dropdown from './components/Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelection = (optSelected) => {
    setSelection(optSelected);
  };

  return <Dropdown options={options} selection={selection} />;
}

export default App;
