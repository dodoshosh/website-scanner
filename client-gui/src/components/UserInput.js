import { useEffect, useRef } from "react";

export default function UserInput(props) {

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.scrollIntoView({ behavior: 'smooth' });
    }, []);
  
    return (
      <div>
        <div className="user-input-div">
        <h4>{props.name}@user:~$</h4>
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
        </div>
        {props.response && <p>{props.response}</p>}
      </div>
    );
}