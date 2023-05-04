import React, {useState} from "react";

export function Submit() {
    const [state, setState] = useState({
        username: "",
        age: null
    });
    const submitHandler = e => {
        e.preventDefault();
        alert("You are submitting " + state.username);
    };
    const handleChange = e => (
        setState({...state, [e.target.name]: e.target.value})
    );
    return (
        <form onSubmit={submitHandler}>
            <h1>
                Hello {state.username} {state.age}
            </h1>
            <p>Enter your name:</p>
            <input type="test" name="username" onChange={handleChange}/>
            <p>Enter your age:</p>
            <input type="text" name="age" onChange={handleChange}/>
            <input type="submit"/>
        </form>
    );


}