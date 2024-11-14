import React, { useState, useEffect } from "react";

function ToDoList(params) {

    const [tasks, setTasks] = useState(![]?persistedData:[]);
    const [newTask, setNewTask] = useState("");
    const persistedData = localStorage.getItem("task-list");

    useEffect(() => {
        if(persistedData) {
            setTasks(JSON.parse(persistedData));
            [...tasks]
            console.log("after", persistedData);
            console.log("after tasks!!!", tasks);
        }}, []);
    
    useEffect (() => {
        localStorage.setItem("task-list", JSON.stringify(tasks));
        console.log('stringified tasklist', tasks);
        }, [tasks]);

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask() {
        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("");}
    }

    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);}
    }

    function moveDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);}
    }

return(
        <div className="to-do-list border-2 border-indigo-700">
            <h1 className="text-8xl m-3">To Do List</h1>
            <p className="text-indigo-700">"Action is the foundational key to all success." -Pablo Picasso</p>

            <div>
                
                <input
                    className="p-2 m-2"
                    type="text"
                    placeholder="Record task here"
                    value={newTask}
                    onChange={handleInputChange}></input>

                <button className="m-2 add-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" 
                onClick={addTask}>Enter</button>

            </div>

            <ol>
                {tasks.map ((task, index) => 
                    <li key={index}>

                        <span className="text">{task}</span>

                        <button className="delete-button m-2 add-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={()=>deleteTask(index)}>Delete</button>

                        <button className="move-button m-2 add-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={()=>moveUp(index)}>⬆️</button>

                        <button className="move-button m-2 add-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={()=>moveDown(index)}>⬇️</button>

                    </li>
                )}
            </ol>

        </div>
    )
}
export default ToDoList;