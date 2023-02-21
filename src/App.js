import Dropdown from './components/Dropdown';

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' },
];


function App() {
  return <Dropdown options={options} />;
}

export default App;
