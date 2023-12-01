import { Tasks } from "./Tasks"
import { Form } from "./Form"
import { CompletedTasks } from "./CompletedTasks"



export const TaskContainer = () => {
  return (
    <section>
      <h1>Write it down so you won't forget!</h1>
      <Form />
      <div className="wrapper">
        <article className="toDoContainer">
          <Tasks />
        </article>

        <aside className="complete">
          <CompletedTasks />
        </aside>
      </div>
    </section>
  )
}