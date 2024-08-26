import getAllTasks from "@/lib/data";
import { uid } from "uid";

export default function ToDos() {
  const defaultTasks = getAllTasks();

  return (
    <main>
      <h2>Tasks</h2>
      {defaultTask.map((task) => (
        <Task key={uid()} />
      ))}
    </main>
  );
}
