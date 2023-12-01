import { Notes } from "./Notes"
import { Form } from "./Form"
import { CompletedContainer } from "./CompletedContainer"



export const TaskContainer = () => {
  return (
    <section>
      <h1>Write it down so you won't forget!</h1>
      <Form />
      <div className="wrapper">
        <article className="toDoContainer">
          <Notes />
        </article>

        <aside className="complete">
          <CompletedContainer />
        </aside>
      </div>
    </section>
  )
}