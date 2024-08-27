import { initialTasks } from "@/lib/data";
import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

export default function TaskList() {
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
    <StyledList>
      <h2>Tasks</h2>
      {sortedDefaultTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </StyledList>
  );
}
