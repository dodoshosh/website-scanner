import './App.css';
import UserInput from './components/UserInput'
import Response from './components/Response'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import InputWrapper from './components/InputWrapper';

function App() {

  const [input, setInput] = useState("")
  const [enterPressed, setEnterPressed] = useState(false)
  let uName = "Joe"

  const UserInp = <UserInput className="user-input" name={uName} inp={input} setInput={setInput} setEnterPressed={setEnterPressed}/>
  const ResponseE = <Response className="response" resp={input} inp={input} setInput={setInput} name={uName} />


  return (
    <div>
      {/* {UserInp} */}
      {/* <UserInput className="user-input" name={uName} inp={input} setInput={setInput}/> */}
      {/* {ResponseE} */}
      {/* <Response className="response" resp={input} inp={input} setInput={setInput} name={uName} /> */}
      {/* {  CloneIf(enterPressed, UserInp, ResponseE) } */}
      <InputWrapper name={uName}/>
    </div>
  );
}

function CloneIf (enterPressed, UserInp, ResponseE) {
  return enterPressed ? [UserInp, ResponseE] : console.log(false)
}

export default App;
