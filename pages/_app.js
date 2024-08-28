import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import sortedByDate from "@/utils/sortedByDate";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const sortedDefaultTasks = sortedByDate(initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  const router = useRouter();

  function onCreateTask(taskData) {
    console.log(taskData);
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortedByDate([...currentTasks, newTaskObject]);
    setCurrentTasks(updatedTasks);
  }

  function handleConfirm(event, id) {
    event.preventDefault();
    setCurrentTasks(currentTasks.filter((task) => task.id !== id));
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTasks={currentTasks}
        onCreateTask={onCreateTask}
        handleConfirm={handleConfirm}
      />
    </>
  );
}
