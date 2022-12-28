import './App.css';
import UserInput from './components/UserInput'
import Response from './components/Response'
import { useState } from 'react'
import ReactDOM from 'react-dom'
import InputWrapper from './components/InputWrapper';
import OpenScreen from './components/OpenScreen';

function App() {
  let uName = "Joe"

  return (
    <div>
      <OpenScreen />
      <InputWrapper name={uName}/>
    </div>
  );
}

export default App;
