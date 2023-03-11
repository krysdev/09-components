import { useReducer } from 'react';
import Button from '../components/Button';
import PillReusableComponent from '../components/PillReusableComponent';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const ON_CHANGE = 'on-change'; // SET_VALUE_TO_ADD
const ON_SUBMIT = 'on-submit'; // ADD_VALUE_TO_COUNT

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    case ON_CHANGE:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    default:
      // You can throw an error to diagnose what case is missing etc.
      // throw new Error('unexpected action type: ' + action.type);

      // or ignore why it reached 'default' with this reducer
      return state;
  }
};

function CounterPage({ initialCount }) {
  //
  //
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
  //
  //
  const handleClickPlus = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const handleClickMinus = () => {
    dispatch({ type: DECREMENT_COUNT });
  };

  const handleChange = (e) => {
    // Convert string from the input field to a number - parseInt.
    // But when parseInt gets an empty string (''), so when you delete everything from the field, then it gives back 'NaN'
    // therefore NaN || 0 -> gives 0
    const value = parseInt(e.target.value) || 0;

    dispatch({ type: ON_CHANGE, payload: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({ type: ON_SUBMIT });
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
