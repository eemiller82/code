import React, { useState } from "react";

function ToDoList(params) {

    const [tasks, setTasks] = useState (['Check Inbox', 'Do Wordle', 'Take a shower']);
    const [newTask, setNewTask] = useState ("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){
        if (newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks [index]];
            setTasks(updatedTasks);
        }
    }

    function moveDown(index){
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks [index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <div className='to-do-list'>
        <h1 className='text-9xl' m-3>To Do List</h1>
        <div className="border-y-4 border-indigo-500 ...">
        <div>
            <input 
                className="p-4 m-4"
                type="text"
                placeholder="Enter task"
                value={newTask}
                onChange={handleInputChange}></input>
            <button className="add-btn m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={addTask}>Add Task</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-button add-btn m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={()=>deleteTask(index)}>
                    Delete Task 
                </button>

                <button className="move-button add-btn m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={()=>moveUp(index)}>
                    ⬆️ 
                </button>

                <button className="move-button add-btn m-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={()=>moveDown(index)}>
                    ⬇️
                </button>
            </li>
            )}
        </ol>
        </div>
        </div>
    ) 
}

export default ToDoList ;
