import styled from "styled-components";
import Link from "next/link";
import { StyledPriority } from "../StyledPriority";
import { StyledTaskFlexWrapper } from "../StyledTaskFlexWrapper";
import { StyledDate } from "../StyledDate";
import { StyledMarkCompleted } from "../StyledMarkCompleted";
import { StyledTaskWrapperTop } from "../StyledTaskWrapperTop";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const StyledTask = styled.li`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${(props) =>
    props.isCompleted ? "rgba(71, 70, 70, 0.267)" : "transparent"};
`;

const StyledTaskTitle = styled.h2``; // Можливо треба змінити

export default function Task({ task, toggleIsCompleted, isCompletedView }) {
  const today = new Date();
  const dueDate = new Date(task?.dueDate);
  const pastDueDate = today >= dueDate;

  const handleMarkAsCompleted = (event) => {
    event.preventDefault();

    toggleIsCompleted(task.id);
  };

  return (
    <StyledLink href={`/${task.id}`}>
      <StyledTask isCompleted={task.isCompleted}>
        <StyledTaskWrapperTop>
          <StyledTaskFlexWrapper>
            <StyledPriority $priority={task.priority} />
            <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
              {task.dueDate}
            </StyledDate>
          </StyledTaskFlexWrapper>
          <StyledMarkCompleted
            onClick={handleMarkAsCompleted}
            isCompletedView={isCompletedView}
          />
        </StyledTaskWrapperTop>

        <StyledTaskTitle>{task.title}</StyledTaskTitle>
      </StyledTask>
    </StyledLink>
  );
}
