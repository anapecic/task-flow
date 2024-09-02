import { useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import sortedByDate from "@/utils/sortedByDate";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const sortedDefaultTasks = sortedByDate(initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  const [completedTasks, setCompletedTasks] = useState(
    sortedByDate(sortedDefaultTasks.filter((task) => task.isCompleted))
  );

  console.log("Привіт1", currentTasks);
  console.log("Привіт2", completedTasks);

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
    setCurrentTasks((prevCurrentTasks) => {
      const taskToToggle = prevCurrentTasks.find((task) => task.id === id);

      if (taskToToggle) {
        const updatedTask = {
          ...taskToToggle,
          isCompleted: !taskToToggle.isCompleted,
        };

        const newCurrentTasks = updatedTask.isCompleted
          ? prevCurrentTasks.filter((task) => task.id !== id)
          : [...prevCurrentTasks, updatedTask];

        setCompletedTasks((prevCompletedTasks) => {
          const newCompletedTasks = updatedTask.isCompleted
            ? sortedByDate([...prevCompletedTasks, updatedTask])
            : prevCompletedTasks.filter((task) => task.id !== id);

          return newCompletedTasks;
        });

        return sortedByDate(newCurrentTasks);
      }

      return prevCurrentTasks;
    });
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
      />
    </>
  );
}
