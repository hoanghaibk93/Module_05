import {useState} from 'react';

export function CounterOne() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={handleClick}>Add 1</button>
        </>
    );
}