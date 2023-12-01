import { useSelector } from "react-redux";
import { countTask } from "../reducers/taskSlice";
import "./Tasks.css";

export const NavBar = () => {
    //const taskCount = useSelector(countTask);


  return (
    <>
    <nav>
        <div>
            <h3>My tasks</h3>
            <div>
                <p>You have x tasks to complete. </p>
            </div>
        </div>
    </nav>
    </>
  )
};
