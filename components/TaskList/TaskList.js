import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const StyledListHeading = styled.h1`
  margin: 0 auto;
`;

const StyledTasks = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function TaskList({ currentTasks }) {
  return (
    <StyledTasks>
      <StyledListHeading>Tasks</StyledListHeading>
      <StyledList>
        {currentTasks.length ? null : (
          <p>No tasks here yet, start by adding some!</p>
        )}
        {currentTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </StyledList>
    </StyledTasks>
  );
}
