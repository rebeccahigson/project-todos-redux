import { useDispatch, useSelector } from "react-redux";
import { tasksList, removeTask } from "../reducers/taskSlice";
import "./Tasks.css";

export const CompletedContainer = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(tasksList);

  // Remove task
  const handleRemoveTask = (id) => {
    dispatch(removeTask(id));
  };

  // Complete task
  const handleCompleteTask = () => {

  };
  
  return (
    <aside>
        {tasks.map((task) => (
            <div key={task.id} className="taskItem completedTask">
              <p className="taskHeader">{task.text}</p>

              <div className="completeContainer">
                <input type="checkbox"/>
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
