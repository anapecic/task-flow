import styled from "styled-components";
import Link from "next/link";
import { StyledPriority } from "../StyledPriority";
import { StyledTaskFlexWrapper } from "../StyledTaskFlexWrapper";
import { StyledDate } from "../StyledDate";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
`;

const StyledTask = styled.li`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
`;

const StyledTaskTitle = styled.h3``;

export default function Task({ task }) {
  const today = new Date();
  const dueDate = new Date(task?.dueDate);
  const pastDueDate = today >= dueDate;

  return (
    <StyledLink href={`/${task.id}`}>
      <StyledTask>
        <StyledTaskFlexWrapper>
          <StyledPriority $priority={task.priority} />
          <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
            {task.dueDate}
          </StyledDate>
        </StyledTaskFlexWrapper>
        <StyledTaskTitle>{task.title}</StyledTaskTitle>
      </StyledTask>
    </StyledLink>
  );
}
