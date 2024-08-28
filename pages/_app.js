import { useEffect, useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import sortedByDate from "@/utils/sortedByDate";

export default function App({ Component, pageProps }) {
  const sortedDefaultTasks = sortedByDate(initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);

  function onCreateTask(taskData) {
    console.log(taskData);
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortedByDate([...currentTasks, newTaskObject]);
    setCurrentTasks(updatedTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        currentTasks={currentTasks}
        onCreateTask={onCreateTask}
      />
    </>
  );
}
