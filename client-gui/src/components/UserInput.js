import { useEffect, useRef } from "react";

export default function UserInput(props) {

    const enterRef = useRef(null);

  useEffect(() => {
    enterRef.current.addEventListener('keypress', handleKey);

    return () => {
        enterRef.current.removeEventListener('keypress', handleKey);
    };
  }, []);

  const handleKey = (e) => {
    if (e.key === 'Enter') {
        props.setInput(e.target.value)
    }
  }

    return (
        <div className="user-input-div">
            <p>{props.name}@user:~$</p>
            <input type="text" ref={enterRef}/>
        </div>
    );
}