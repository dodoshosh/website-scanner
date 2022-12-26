import './App.css';
import UserInput from './components/UserInput'
import Response from './components/Response'
import { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {

  const [input, setInput] = useState("")
  let uName = "Joe"

  return (
    <div>
      <UserInput className="user-input" name={uName} inp={input} setInput={setInput}/>
      <Response className="response" resp={input} inp={input} setInput={setInput} name={uName} />
    </div>
  );
}

export default App;
