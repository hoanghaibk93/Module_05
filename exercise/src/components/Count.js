import {useState} from 'react';

export function Counter() {
    const [countOne, setCountOne] = useState(0);
    const [countTwo, setCountTwo] = useState(0);
    return (
        <>
            <div>Count: {countOne}</div>
            <button onClick={() => {
                setCountOne(countOne + 1);
            }}>Add 1
            </button>
            <div>Count: {countTwo}</div>
            <button onClick={() => {
                setCountTwo(countTwo + 2);
            }}>Add 2
            </button>
        </>
    );
}