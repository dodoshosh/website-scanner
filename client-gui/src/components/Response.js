import UserInput from "./UserInput";
import { StaticList, CommandList, commandHandler } from "./CommandsList"
import React from "react";

export default function Response(props) {
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

    const toReturn = foundCommand ? commandHandler(props.resp) : StaticList[key];
    return (
        <React.Fragment>
            <div>
                <pre>
                {toReturn.split('\n').map((item, key) => {
                    return <p key={key}>{item}</p>;
                })}
                </pre>
            </div>
            
        </React.Fragment>
    );
}