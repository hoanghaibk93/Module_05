import React, {useState} from 'react'

export function Form2() {
    const [state, setState] = useState({
        mycar: 'Volvo'
    })
    return (
        <form>
            <select value={state.mycar}>
                <option value="Ford">Ford123</option>
                <option value="Volvo">Volvo12</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    );
}