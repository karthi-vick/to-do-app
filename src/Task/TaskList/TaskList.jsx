import { useState } from "react";
import {MdDelete} from 'react-icons/Md'
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
            <div className="t-name">{prop.name}</div>
            <div className="t-date">Date: {prop.date}/{prop.month}/{prop.year}</div>
        
            <div className="t-status">Status: {status}</div>
            </div>
            <div className="t-right">
            <input type="checkbox" onClick={changeCheck} />     
            <button className="btndelete" onClick={handleDelete}><MdDelete className="deletebtn"/></button>   
            </div>
        </div>
    )
}
export default TaskList