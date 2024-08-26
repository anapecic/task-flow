import { uid } from "uid";
import Task from "../Task/Task";

export default function ToDos({ currentTasks }) {
  return (
    <main>
      <h2>Tasks</h2>
      {currentTasks.map((task) => (
        <Task key={uid()} task={task} />
      ))}
    </main>
  );
}
