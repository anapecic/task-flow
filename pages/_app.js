import { useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import { useRouter } from "next/router";
import sortByFilter from "@/utils/sortByFilter";

export default function App({ Component, pageProps }) {
  const [sortMode, setSortMode] = useState("date");
  const sortedDefaultTasks = sortByFilter(sortMode, initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  const [completedTasks, setCompletedTasks] = useState([]);
  const router = useRouter();

  function onCreateTask(taskData) {
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortByFilter([...currentTasks, newTaskObject]);
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
    const sortedNewTasks = sortByFilter(sortMode, newTaskArray);
    setCurrentTasks(sortedNewTasks);
  }

  function handleSetCompleted(id) {
    let newTask = currentTasks.find((task) => task.id === id);
    if (newTask) {
      setCompletedTasks([...completedTasks, newTask]);
      handleConfirmDelete(id);
    } else if (!newTask) {
      newTask = completedTasks.find((task) => task.id === id);
      const newCurrentTasks = sortByFilter("date", [...currentTasks, newTask]);
      setCurrentTasks(newCurrentTasks);
      setCompletedTasks(completedTasks.filter((task) => task.id !== id));
    }
  }

  function handleSetFilter(filter) {
    setSortMode(filter);
    setCurrentTasks(sortByFilter(filter, currentTasks));
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
        sortMode={sortMode}
        onSetFilter={handleSetFilter}
      />
    </>
  );
}
