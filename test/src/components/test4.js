import React, {useState} from "react";
function MyForm() {
    const [usename, setUseName] = useState("");
    const handleChange = e => setUseName(e.target.value);
    const submitHandler = e =>{
        e.preventDefault();
        alert("you are submitting ?" + usename);
    };
    let header;
    if (usename) {
        header = <h1>Hello {usename}</h1>;
    } else {
        header = "";
    }
    return (
        <>
            <form>
                {header}
                <input type="test" value={usename} onChange={handleChange}/>
                <input type="submit" />
            </form>
        </>
    );

}
export default MyForm;