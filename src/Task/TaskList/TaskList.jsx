import { useState } from "react";
import {MdDelete} from 'react-icons/md'

import "./TaskList.css"
const TaskList=(prop)=>{
const [status,setStatus]=useState("Un Done")
const changeCheck=(e)=>{
if(e.target.checked){
    setStatus("Done")
}
else
    setStatus("Un Done")
}
const handleDelete=()=>{
    prop.toDelete(prop.id)
}
    return(
        <div className="taskList">
            <div className="t-left">
            <div className="t-name">{prop.name.charAt(0).toUpperCase()+prop.name.slice(1)}</div>
            <div className="t-date">Date: {prop.date}/{prop.month}/{prop.year}</div>
            <div className="t-status">Status: {status}</div>
            </div>
            <div className="t-right">
            <div>
            <input type="checkbox" onClick={changeCheck} /></div>
            <button className="btndelete" onClick={handleDelete}><MdDelete className="deletebtn"/></button>   
            </div>
        </div>
    )
}
export default TaskList