import { useDispatch, useSelector } from "react-redux";
import { tasksList, removeTask, completeTask } from "../reducers/taskSlice";
import "./Tasks.css";

export const CompletedTasks = ({ task }) => {
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
    <aside className="taskList">
       
            <div key={task.id} className="taskItem completedTask">
              <p className="taskHeader">{task.text}</p>

              <div className="completeContainer">
                <input 
                type="checkbox"
                checked={task.isComplete}
                onChange={() => handleCompleteTask(task.id)}/>
              </div>

              <div className="removeButtonContainer">
                <button
                  className="removeButton"
                  onClick={() => handleRemoveTask(task.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
    </aside>
  )
}
