import getAllTasks from "@/lib/data";
import { uid } from "uid";
import Task from "../Task/Task";
import { useState } from "react";

export default function ToDos() {
  const defaultTasks = getAllTasks();
  const sortedDefaultTasks = sortedByDate(defaultTasks);
  function sortedByDate(array) {
    const newArray = array.toSorted((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
    return newArray;
  }
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);

  return (
    <main>
      <h2>Tasks</h2>
      {currentTasks.map((task) => (
        <Task key={uid()} task={task} />
      ))}
    </main>
  );
}
