import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../reducers/taskSlice";
import "./Tasks.css";

export const Form = () => {
    const dispatch = useDispatch();
    const [newTask, setNewTask] = useState("");
    //const tasks = useSelector(taskList);

    // Add task
    const handleAddTask = () => {
        if (newTask.trim() !== "") {
            dispatch(addTask({id: Date.now(), text: newTask, complete: false}));
            setNewTask("");
        }
    };

    // Add task on "enter"
    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleAddTask();
        }
    };

  return (
    <article className="wrapper">
        <h1>Write it down so you won't forget!</h1>
        <input 
        type="text"
        placeholder="What do you need to do?"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown} 
        />
        <button 
        className="addButton"
        onClick={handleAddTask}
        >
            Add task
        </button>
    </article>
  )
}
