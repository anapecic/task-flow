import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

export default function TaskList({ sortedDefaultTasks }) {
  return (
    <StyledList>
      <h2>Tasks</h2>
      {sortedDefaultTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </StyledList>
  );
}
