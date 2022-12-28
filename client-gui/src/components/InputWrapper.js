import { cloneElement, memo } from 'react';
import { useState, useRef, useEffect } from 'react';
import Response from './Response';
import UserInput from './UserInput';
  
  const MemoizedInput = memo(UserInput);
  
  function InputWrapper(props) {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [clones, setClones] = useState([]);
    const [lastInputs, setLastInputs] = useState([]);
    const [index, setIndex] = useState(-1);
  
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
        if (index !== 0) {
          setIndex(index - 1);
        }
        setValue(lastInputs[index]);
      }

      if (event.key === 'ArrowDown') {
        if (index !== lastInputs.length) {
          setIndex(index + 1);
          setValue(lastInputs[index]);
        }
        else {
          setValue('');
        }
      }
    }
    
    function handleSubmit() {
      const resp = <Response className="response" resp={value} inp={value} name={props.name}/>
      setClones(clones.concat(cloneElement(<MemoizedInput name={props.name} value={value} response={resp} disabled={true} />)));
      
      if (value !== '\n' && value !== '\t' && value !== ' ' && value !== lastInputs[lastInputs.length - 1] && value !== '') {
        setLastInputs(lastInputs.concat(value));
        setIndex(index + 1);
      }
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