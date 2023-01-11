import UserInput from "./UserInput";
import { StaticList, CommandList, commandHandler } from "./CommandsList"
import React, { useEffect, useState, useRef } from "react";

export default function Response(props) {
    const [toReturn, setToReturn] = useState(null);
    const responseRef = useRef(null);

    useEffect(() => {
        (async () => {
            let key = "help"
            
            let foundCommand = false;
            
            CommandList.forEach(element => {
                if(props.resp.includes(element) || element === props.resp)
                    foundCommand = true
            });
            
            if (props.resp === "")
                key = ""
            else if (!(props.resp in StaticList))
                key = "Unkown command."
            else
                key = props.resp
            
            const returnText = foundCommand ? await commandHandler(props.resp) : StaticList[key];
            console.log(returnText);
            setToReturn(returnText.split("\n").map((item, key) => {
                return <p key={key}>{item}</p>;
            }));
        })();
    }, []);
    
    useEffect (() => {
        if(toReturn) {
            responseRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [toReturn]);

    return (
        <>
            <div className="response-div" ref={responseRef}>
                <pre> 
                {toReturn != null ? toReturn : "Loading..."}
                {/* toReturn.split('\n').map((item, key) => {
                    return <p key={key}>{item}</p>;
                }) */}
                </pre>
            </div>
        </>
    );
}