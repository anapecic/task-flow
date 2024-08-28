import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";
import { useState } from "react";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  function sortedByDate(array) {
    const newArray = array.toSorted((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
    return newArray;
  }
  const sortedDefaultTasks = sortedByDate(initialTasks);
  const [currentTasks, setCurrentTasks] = useState(sortedDefaultTasks);
  const router = useRouter();

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
        handleConfirm={handleConfirm}
      />
    </>
  );
}
