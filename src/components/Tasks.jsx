import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksList, removeTask, completeTask } from "../reducers/taskSlice";
import "./Tasks.css";


export const Tasks = () => {
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

  // Filter uncompleted tasks
  const uncompletedTasks = tasks.filter((task) => !task.isComplete);

  // Count of uncompleted tasks
  const uncompletedTasksCount = uncompletedTasks.length;
  console.log(uncompletedTasksCount);

  return (
    <section className="taskList">
      <p>You have {uncompletedTasksCount} uncompleted tasks</p>
          {uncompletedTasks.map((task) => (
            <div key={task.id} className="taskItem toDoTask">
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
    </section>
  );
};
