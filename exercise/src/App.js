
import './App.css';
import {CounterOne} from "./components/countOne";
import {CounterTwo} from "./components/countTwo";
import {Counter} from "./components/Count";
import {Register} from "./components/register/Register";
import {ContactForm} from "./components/form/contactForm";
import {MedicalForm} from "./components/form/medicalForm";

function App() {
  return (
    <div className="App">
     {/*<CounterOne/>*/}
     {/*<CounterTwo/>*/}
     {/*   <Counter/>*/}
     {/*<Register/>*/}
     {/*<ContactForm/>*/}
        <MedicalForm/>
    </div>
  );
}

export default App;
