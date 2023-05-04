import {useState} from 'react';

export function CounterTwo() {
    let [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 2);
    };
    return (
        <>
            <div>Count: {count}</div>
            <button onClick={handleClick}>Add 2</button>
        </>
    );
}

