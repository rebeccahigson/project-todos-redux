
import { useDispatch, useSelector } from "react-redux";
import { tasksList, removeTask, completeTask } from "../reducers/taskSlice";
import "./Tasks.css";


export const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksList);

  // Remove task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  // Complete task
  const handleCompleteTask = (id) => {
    dispatch(completeTask(id));
  };


  return (
    <>
      <div key={task.id} className={`taskItem ${task.isComplete !== true ? "toDoTask" : "completedTask"}`}
      >
      <p className="taskHeader">{task.text}</p>

      <div className="checkContainer">
        <input 
        type="checkbox"
        name="completeTask"
        checked={task.isComplete}
        onChange={() => handleCompleteTask(task.id)}/>

        <label>
          Complete
        </label>
      </div>

      <div className="removeButtonContainer">
        <button
        className="removeButton"
        onClick={() => handleRemoveTask(task.id)}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
