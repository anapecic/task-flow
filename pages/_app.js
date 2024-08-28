import { useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import sortedByDate from "@/utils/sortedByDate";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const sortedDefaultTasks = sortedByDate(initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useRouter();

  function onCreateTask(taskData) {
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortedByDate([...currentTasks, newTaskObject]);
    setCurrentTasks(updatedTasks);
  }

  function handleConfirmDelete(id) {
    setCurrentTasks(currentTasks.filter((task) => task.id !== id));
    router.push("/");
  }

  function handleEditTask(taskData, id) {
    const newTaskArray = currentTasks.map((task) =>
      task.id === id
        ? {
            ...task,
            title: taskData.title,
            priority: taskData.priority,
            dueDate: taskData.dueDate,
            description: taskData.description,
          }
        : task
    );
    const sortedNewTasks = sortedByDate(newTaskArray);
    setCurrentTasks(sortedNewTasks);
  }

  function handleSetCompleted(id) {
    const newTask = currentTasks.find((task) => task.id === id);
    setCompletedTasks([...completedTasks, newTask]);
    handleConfirmDelete(id);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTasks={currentTasks}
        onCreateTask={onCreateTask}
        handleConfirmDelete={handleConfirmDelete}
        handleEditTask={handleEditTask}
        onSetCompleted={handleSetCompleted}
        completedTasks={completedTasks}
      />
    </>
  );
}
