import { useState } from "react";
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
            <div className="t-name">{prop.name}</div>
            <div className="t-date">{prop.date}/{prop.month}/{prop.year}</div>
            <label htmlFor="status">status: </label>
            <div className="t-status">{status}</div>
            <input type="checkbox" onClick={changeCheck} />     
            <input type="button" value="delete" onClick={handleDelete}/>   
        </div>
    )
}
export default TaskList