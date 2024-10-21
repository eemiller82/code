import React, { useState } from "react";

function ToDoList(params) {

    const [tasks, setTasks] = useState (['Check Inbox', 'Do Wordle', 'Shower']);
    const [newTask, setNewTask] = useState ("");

    function handleInputChange(event){

    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveUp(index){

    }

    function moveDown(index){

    }

    return (
        <div className='to-do-list'>
        <h1 className='text-9xl'>To Do List</h1>
        <div>
            <input 
            className="p-2"
            type="text"
            placeholder="Enter task"
            value={newTask}
            onChange={handleInputChange}></input>
            <button className="add-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={addTask}>Add Task</button>
        </div>
        </div>
    ) 
}

export default ToDoList ;
