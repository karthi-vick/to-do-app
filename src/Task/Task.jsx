
import TaskList from "./TaskList/TaskList"
const Task=(prop)=>{
return(
<div className="task-container">
    {prop.dataList.map((data,index)=><TaskList key={index} id={data.id} name={data.taskName} date={data.date.getDate()} month={data.date.getMonth()} year={data.date.getFullYear()} toDelete={prop.toDelete} />)}
</div>

)
}
export default Task