// Counter.js
import { useSelector } from 'react-redux';

const Counter = () => {
  const count = useSelector((state) => state.count);

  return <h1>Count: {count}</h1>;
};

export default Counter;
