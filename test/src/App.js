import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import {UpdateName} from "./components/UpdateName";

export function App() {
  return (
    <div className="App">
     {/*<Test3/>*/}
     {/*<Selector/>*/}
     {/*<MyForm/>*/}
    {/*<Submit/>*/}
    {/*  <Form11/>*/}
    {/*<FileUploadPage/>*/}
        <h1>Welcome to React Router!</h1>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </div>
  );
    function Home() {
        return (
            <>
                <main>
                    <h2>Welcome to the homepage!</h2>
                </main>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </>
        );
    }

    function About() {
        return (
            <>
                {/*<main>*/}
                {/*    <h2>Who are we?</h2>*/}
                {/*    <p>*/}
                {/*        React Router is a lightweight, fully-featured routing library for the React JavaScript library*/}
                {/*    </p>*/}
                {/*</main>*/}
                {/*<nav>*/}
                {/*    <Link to="/">Home</Link>*/}
                {/*</nav>*/}
                <UpdateName/>
            </>
        );
    }
}

export default App;
