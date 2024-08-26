import GlobalStyle from "../styles";
import getAllTasks from "@/lib/data";
import { useState } from "react";

export default function App({ Component, pageProps }) {
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
    <>
      <GlobalStyle />
      <Component {...pageProps} currentTasks={currentTasks} />
    </>
  );
}
