import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

export default function TaskList({
  tasks,
  onSetCompleted,
  listTitle,
  completedStyle,
}) {
  return (
    <>
      <h1>{listTitle}</h1>
      <StyledList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onSetCompleted={onSetCompleted}
            completedStyle={completedStyle}
          />
        ))}
      </StyledList>
    </>
  );
}
