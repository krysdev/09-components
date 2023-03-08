import { useReducer } from 'react';
import Button from '../components/Button';
import PillReusableComponent from '../components/PillReusableComponent';

const reducer = (state, action) => {
  //
};

function CounterPage({ initialCount }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const handleClickPlus = () => {
    // setCount(count + 1);
  };
  const handleClickMinus = () => {
    // setCount(count - 1);
  };

  const handleChange = (e) => {
    // Convert string from the input field to a number - parseInt.
    // But when parseInt gets an empty string (''), so when you delete everything from the field, then it gives back 'NaN'
    // therefore NaN || 0 -> gives 0
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
  };

  return (
    <PillReusableComponent className="m-3">
      <h1>Count: {state.count}</h1>
      <div className="flex flex-row">
        <Button onClick={handleClickPlus}>increase</Button>
        <Button onClick={handleClickMinus}>decrease</Button>
      </div>

      <form onSubmit={onSubmit}>
        <label></label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          // if valueToAdd is 0 then put an empty string instead
          value={state.valueToAdd || ''}
          onChange={handleChange}
        />
        <Button>Add this</Button>
      </form>
    </PillReusableComponent>
  );
}

export default CounterPage;
