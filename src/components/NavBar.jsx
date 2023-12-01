import { useSelector } from "react-redux";
import { tasksList, countUncompletedTasks } from "../reducers/taskSlice";

export const NavBar = () => {
  // Fix
  const uncompletedTasksCount = useSelector(countUncompletedTasks);

  return (
    <>
      <nav className="mainNav">
        <div>
          <h3>My tasks</h3>
          <div>
            <p>You have  tasks to complete.</p>
          </div>
        </div>
      </nav>
    </>
  );
};
