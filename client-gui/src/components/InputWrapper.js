import { cloneElement, memo } from 'react';
import { useState, useRef, useEffect } from 'react';
import Response from './Response';
import UserInput from './UserInput';

function MyInput(props) {
    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
  
    return (
      <div>
        <input
          type="text"
          ref={inputRef}
          value={props.value}
          onChange={event => props.onChange(event.target.value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              props.onSubmit();
            }
          }}
          disabled={props.disabled}
        />
        {props.response && <p>{props.response}</p>}
      </div>
    );
  }
  
  const MemoizedInput = memo(UserInput);
  
  function InputWrapper(props) {
    const [value, setValue] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [clones, setClones] = useState([]);
  
    function handleChange(newValue) {
      setValue(newValue);
    }
    
    
    function handleSubmit() {
      const resp = <Response className="response" resp={value} inp={value} name={props.name}/>
      setClones(clones.concat(cloneElement(<MemoizedInput name={props.name} value={value} response={resp} disabled={true} />)));
      setValue('');
      setDisabled(false);
    }
  
    return (
      <div>
        {clones}
        <UserInput name={props.name} value={value} onChange={handleChange} onSubmit={handleSubmit} disabled={disabled} />
      </div>
    );
  }

export default InputWrapper