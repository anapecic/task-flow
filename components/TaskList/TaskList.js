import Task from "../Task/Task";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledTitleCompleted = styled.h2`
  text-align: center;
`;

export default function TaskList({ title, tasks = [], toggleIsCompleted }) {
  return (
    <>
      <h1>{title}</h1> {/* Заголовок для поточного списку завдань */}
      <StyledList>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleIsCompleted={toggleIsCompleted}
          />
        ))}
      </StyledList>
    </>
  );
}
