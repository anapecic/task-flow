import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledTitle = styled.h1`
  text-align: ${(props) => (props.isCompletedView ? "center" : "left")};
`;

export default function TaskList({
  title,
  tasks = [],
  toggleIsCompleted,
  isCompletedView = false,
}) {
  return (
    <>
      <StyledTitle isCompletedView={isCompletedView}>{title}</StyledTitle>{" "}
      <StyledList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleIsCompleted={toggleIsCompleted}
            isCompletedView={isCompletedView}
          />
        ))}
      </StyledList>
    </>
  );
}
