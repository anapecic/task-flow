import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

export default function TaskList({ currentTasks }) {
  return (
    <>
      <h2>Tasks</h2>
      <StyledList>
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </StyledList>
    </>
  );
}
