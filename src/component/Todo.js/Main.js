import React, { useState } from 'react'
import './Main.css'
import '../../index.css'

const Main = ({task}) => {
    console.log(task)
    const taskinitialData = {
      id: null,
      name: '',
      task: '',
      todo: false,
      inProgress: false,
      done: false
    }
    const [taskData, setTaskData] = useState(taskinitialData)

    const getId = (todoData) => {        
        setTaskData({...taskData, ...todoData})
    }    
    console.log("Checking Empty State value", taskData)
return (
    <>
        <div className="heading">
            <h2>Todo project</h2>
        </div>
        <div className="container">
            <div className="todo comon">
                <h4>Todo</h4>
                <div>
                    {task.map(data => {
                        return(
                            <span key={data.id}>
                            {
                                data.todo && <div onClick={() => getId(data)} className='inside' >
                                    <p>name: {data.name} </p>
                                    <p>task: {data.task} </p>
                                </div> 
                            }                            
                            </span>
                        )
                    })}
                </div>
            </div>
            <div className="in_progress comon">
                <h4>InProgree</h4>
                {task.map(data => {
                    return(
                        <span key={data.id}>
                        {
                            data.inProgress && <div className='inside' >
                                <p>name: {data.name} </p>
                                <p>task: {data.task} </p>
                            </div> 
                        }
                        </span>
                    )
                })}
            </div>
            <div className="done comon">
                <h4>Done</h4>
            </div>
        </div>
    </>
  )
}

export default Main