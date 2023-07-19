import './App.css'
import Task from './Task/Task'
import TextBox from './textBox/textBox'
import { useState } from 'react'

function App() {
const [dataList,setDataList]=useState([]);

const getName=(task)=>{
const dataAppend={
    id:dataList.length+1,
    taskName:task,
    date:new Date()
}
setDataList([...dataList,dataAppend])
}
const toDelete=(id)=>{
    setDataList(dataList.filter((todo)=>todo.id!=id))
}
    return (

        <div className='wrapper'> 
            <h2>To-Do List</h2>
            <TextBox getName={getName} />
            <Task dataList={dataList}  toDelete={toDelete} />
        </div>
    )
}

export default App