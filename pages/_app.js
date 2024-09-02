import { useState } from "react";
import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { uid } from "uid";
import sortByFilter from "@/utils/sortedByFilter";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const [sortMode, setSortMode] = useState("date");
  const sortedDefaultTasks = sortByFilter(sortMode, initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);

  function onCreateTask(taskData) {
    console.log(taskData);
    const newTaskObject = { ...taskData, id: uid() };
    const updatedTasks = sortByFilter(sortMode, [
      ...currentTasks,
      newTaskObject,
    ]);
    setCurrentTasks(updatedTasks);
  }
  const router = useRouter();

  function handleDelete(event, id) {
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
        handleDelete={handleDelete}
        onCreateTask={onCreateTask}
      />
    </>
  );
}
