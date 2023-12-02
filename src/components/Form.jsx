import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask } from "../reducers/taskSlice";


export const Form = () => {
const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");

  // Add note
  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      dispatch(addTask({ id: Date.now(), text: newTask }));
      setNewTask("");
    }
  };

  // Add note on "Enter"
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <form>
       <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}/>

        <button 
        className="addButton" 
        onClick={handleAddTask} 
        disabled={newTask.trim() === ""}>
          Add task
        </button>
    </form>
  )
}