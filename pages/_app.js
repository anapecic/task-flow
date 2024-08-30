import GlobalStyle from "../styles";
import { initialTasks } from "@/lib/data";

export default function App({ Component, pageProps }) {
  const sortedDefaultTasks = sortedByDate(initialTasks);

  function sortedByDate(array) {
    const newArray = array.toSorted((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
    return newArray;
  }

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} sortedDefaultTasks={sortedDefaultTasks} />
    </>
  );
}
