import { useDispatch, useSelector } from "react-redux";
import { removeTask, completeTask } from "../reducers/taskSlice";

export const TaskItem = ({ task }) => {
  const tasks = useSelector((state) => state.tasks.items);
  const dispatch = useDispatch();

  
  
  // Remove task
  const handleRemoveTask = (taskId) => {
    dispatch(removeTask(taskId));
  };

   // Toggle complete task
   const handleToggleComplete = (taskId) => {
    dispatch(completeTask(taskId));
  };

  


  return (
    <article>
      {tasks.map((task) => (  
        <div key={task.id} className="note toDo-Note">
          {task.text}
          <input type="checkbox"
          checked={task.complete}
          onChange={() => handleToggleComplete(task.id)}
          />

          <footer className="note-footer">
            <button onClick={() => handleRemoveTask(task.id)}>
              Remove
            </button>
          </footer>
        </div>
      ))
      }
    </article>
  )
}
