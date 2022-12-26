import UserInput from "./UserInput";
import { CList } from "./CommandsList"

export default function Response(props) {
    let key = "help"
    
    if (props.resp === "")
        key = ""
    else if (!(props.resp in CList))
        key = "Unkown command."
    else
        key = props.resp

    return (
        <>
            <p>{CList[key]}</p>
            {/* <UserInput className="user-input" name={props.name} inp={props.inp} setInput={props.setInput} /> */}
            {/* <Response className="response" resp={props.resp} inp={props.inp} setInput={props.setInput} name={props.name} /> */}
        </>
    );
}