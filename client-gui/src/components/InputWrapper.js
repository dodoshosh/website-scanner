import { cloneElement, memo } from 'react';
import { useState, useRef, useEffect } from 'react';
import Response from './Response';
import UserInput from './UserInput';
  
  const MemoizedInput = memo(UserInput);
  
  function InputWrapper(props) {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [clones, setClones] = useState([]);
    const [lastInput, setLastInput] = useState("");
  
    function handleChange(newValue) {
      setValue(newValue);
    }

  
    function handleChange(newValue) {
      setValue(newValue);
    }

    function handleKeyDown(event) {
      if (event.key === 'Enter') {
        handleSubmit();
      }

      if (event.key === 'ArrowUp') {
        setValue(lastInput);
      }

      if (event.key === 'ArrowDown') {
        setValue('');
      }
    }
    
    function handleSubmit() {
      const resp = <Response className="response" resp={value} inp={value} name={props.name}/>
      setClones(clones.concat(cloneElement(<MemoizedInput name={props.name} value={value} response={resp} disabled={true} />)));
      
      if (value !== '\n' && value !== '\t' && value !== ' ' && value !== undefined && value !== '') 
        setLastInput(value);

      setValue('');
      setDisabled(false);
    }
  
    return (
      <div>
        {clones}
        <UserInput 
          name={props.name} 
          value={value} 
          onChange={handleChange} 
          onSubmit={handleSubmit} 
          onKeyDown={handleKeyDown}
          tabIndex="0"
          disabled={disabled}
         />
      </div>
    );
  }

export default InputWrapper