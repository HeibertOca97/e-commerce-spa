import { useState } from 'react';

export const useCounter = (value = 1) => {
    const [count, setCount] = useState(value);

    const increment = () => {
        setCount((prevState) => prevState + 1);
    }

    const decrement = () => {
        count > 1 && setCount((prevState) => prevState - 1);
    }

    const reset = () => {
        setCount(1);
    }

    return { 
        increment, 
        decrement, 
        reset,
        count
    };
}
