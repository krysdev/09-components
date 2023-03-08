import { useEffect, useState } from 'react';
import Button from '../components/Button';

function CounterPage({ initialCount }) {
  
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <Button onClick={handleClick}>increase</Button>
      <Button onClick={handleClick}>decrease</Button>
    </div>
  );
}

export default CounterPage;
