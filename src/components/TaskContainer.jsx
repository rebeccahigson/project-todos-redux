import { Form } from "./Form"
import { TaskItem } from "./TaskItem";
import { useSelector } from "react-redux";
import { tasksList, completeTask } from "../reducers/taskSlice";



export const TaskContainer = () => {
  const tasks = useSelector(tasksList);
  

  // Filter uncompleted tasks
  const uncompletedTasks = tasks.filter((task) => !task.isComplete);

   // Count of uncompleted tasks
   const uncompletedTasksCount = uncompletedTasks.length;
   console.log(uncompletedTasksCount);

  // Filter completed tasks
  const completedTaskList = tasks.filter((task) => task.isComplete);


  return (
    <section>
      <h1>Write it down so you won't forget!</h1>
      <p>You have {uncompletedTasksCount} uncompleted tasks</p>

      <Form />

      <div className="wrapper">
        <div className="taskList">

        <article className="toDoContainer">
        {uncompletedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </article>

        <aside className="complete">
        {completedTaskList.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </aside>
        
        </div>
      </div>
    </section>
  )
}