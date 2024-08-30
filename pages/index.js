// pages/index.js
import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import { useState } from "react";

export default function HomePage({ sortedDefaultTasks }) {
  const [tasks, setTasks] = useState(sortedDefaultTasks);

  // Функція для перемикання статусу завдання
  const toggleIsCompleted = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <>
      <Header />
      <main>
        <TaskList tasks={tasks} toggleIsCompleted={toggleIsCompleted} />
      </main>
    </>
  );
}
