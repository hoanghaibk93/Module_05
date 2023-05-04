import {useState} from "react";

export function UpdateName() {
    const [name, setName] = useState("");
    return (
        <>
            <input
            // value={name}
            placeholder="name123"
            onChange={(e)=>{
                setName(e.target.value)
            }}

            />
        </>
    );

}