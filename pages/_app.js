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

  function onCreateTask(taskData) {
    console.log(taskData);
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortedByDate([...currentTasks, newTaskObject]);
    setCurrentTasks(updatedTasks);
  }
  const router = useRouter();

  function handleConfirm(event, id) {
    event.preventDefault();
    setCurrentTasks(currentTasks.filter((task) => task.id !== id));
    router.push("/");
  }

  function toggleIsCompleted(id) {
    const newTask = currentTasks.find((task) => task.id === id);

    if (newTask) {
      const filteredCurrentTasks = currentTasks.filter(
        (task) => task.id !== id
      );
      setCurrentTasks(filteredCurrentTasks);
      setCompletedTasks([...completedTasks, newTask]);
    } else if (!newTask) {
      const newCompletedTask = completedTasks.find((task) => task.id === id);
      const filteredCompletedTasks = completedTasks.filter(
        (task) => task.id !== id
      );
      setCompletedTasks(filteredCompletedTasks);
      const sortedCurrentTasks = sortedByDate([
        ...currentTasks,
        newCompletedTask,
      ]);
      setCurrentTasks(sortedCurrentTasks);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTasks={currentTasks}
        completedTasks={completedTasks}
        handleConfirm={handleConfirm}
        onCreateTask={onCreateTask}
        toggleIsCompleted={toggleIsCompleted}
        isCompletedView={false}
      />
    </>
  );
}
