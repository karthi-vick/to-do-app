import './TextBox.css'
import { useState } from "react"
const TextBox=({getName})=>{
const [task,setTask]=useState("")

const changeTask=(e)=>{
setTask(e.target.value)
}
const changeSubmit=(e)=>{
    if(task!="")
        getName(task)
setTask('');
e.preventDefault();
}
return(
    <div className="text">
        <form action="">
        <input type='text' value={task} className='t-text' onChange={changeTask}/>
        <input type="submit" className="btn" value="Submit" onClick={changeSubmit}/>
        </form>
    </div>
)
}
export default TextBox