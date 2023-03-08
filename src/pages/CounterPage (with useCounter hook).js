// import { useEffect, useState } from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';

// The below is extracted to /hooks/use-counter.js
// 
// function useCounter(initialCount) {
//   const [count, setCount] = useState(initialCount);

//   useEffect(() => {
//     console.log(count);
//   }, [count]);

//   const handleIncrement = () => {
//     setCount(count + 1);
//   };

//   // return { count: count, handleIncrement: handleIncrement };
//   return { count, handleIncrement };
// }

function CounterPage({ initialCount }) {
  const { count, handleIncrement } = useCounter(initialCount);

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleIncrement}>increase</Button>
    </div>
  );
}

export default CounterPage;
