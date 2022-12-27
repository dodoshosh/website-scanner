import { useEffect, useRef } from "react";

export default function UserInput(props) {

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
  
    return (
      <div>
        <p>{props.name}@user:~$</p>
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