import { Form } from "./Form"
import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";
import { tasksList } from "../reducers/taskSlice";


export const TaskContainer = () => {
  const tasks = useSelector(tasksList);
  
  // Filter uncompleted tasks
  const uncompletedTasks = tasks.filter((task) => !task.isComplete);

  // Count of uncompleted tasks
  const uncompletedTasksCount = uncompletedTasks.length;
  console.log(uncompletedTasksCount);

  // Task count message
  const countMessage = () => {
    if (uncompletedTasksCount === 1) {
      return <p className="subheading">You have <b>{uncompletedTasksCount}</b> uncompleted task.</p>
    } else {
      return  <p className="subheading">You have <b>{uncompletedTasksCount}</b> uncompleted tasks.</p>
    }
  };

  // Filter completed tasks
  const completedTaskList = tasks.filter((task) => task.isComplete);


  return (
    <section className="contentWrapper">
      <h1>Write it down so you won't forget!</h1>
      {countMessage()}
      <Form />

      <div className="tasksWrapper">
        <article className="toDoContainer">
          <div className="taskList">
            {uncompletedTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </article>

        <aside className="completeContainer">
          <div className="taskList">
            {completedTaskList.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </aside>
        </div>
      
    </section>
  )
}