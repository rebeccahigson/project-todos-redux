import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tasksList, removeTask } from "../reducers/taskSlice";
import "./Tasks.css";


export const Notes = () => {
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
    <section className="taskList">
          {tasks.map((task) => (
            <div key={task.id} className="taskItem toDoTask">
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
    </section>
  );
};
