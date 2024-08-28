import styled from "styled-components";
import Link from "next/link";
import { StyledPriority } from "../StyledPriority";
import { StyledTaskFlexWrapper } from "../StyledTaskFlexWrapper";
import { StyledDate } from "../StyledDate";

const StyledLink = styled(Link)`
  text-decoration: ${(props) => props.$lineThrough};
  text-decoration-thickness: 3px;
  color: #000000;
`;

const StyledTask = styled.li`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
  ${(props) => props.$completedFilter}
`;

const StyledFlexSpaceBetween = styled(StyledTaskFlexWrapper)`
  justify-content: space-between;
`;

const StyledCheckMark = styled.div`
  width: 20px;
  height: 20px;
  background: #e0e1dd;
  border-radius: 50%;
  border: 2px solid grey;
  ${(props) => props.$filledCheckMark}
`;

const StyledTaskTitle = styled.h3``;

export default function Task({ task, onSetCompleted, completedStyle }) {
  const today = new Date();
  const dueDate = new Date(task?.dueDate);
  const pastDueDate = today >= dueDate;
  const handleCheckMarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onSetCompleted(task.id);
  };
  return (
    <StyledLink
      href={`/${task.id}`}
      $lineThrough={completedStyle ? "line-through" : "none"}
    >
      <StyledTask
        $completedFilter={
          completedStyle ? "filter: brightness(50%); background: #e0e1dd" : ""
        }
      >
        <StyledFlexSpaceBetween>
          <StyledTaskFlexWrapper>
            <StyledPriority $priority={task.priority} />
            <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
              {task.dueDate}
            </StyledDate>
          </StyledTaskFlexWrapper>
          <StyledCheckMark
            onClick={handleCheckMarkClick}
            $filledCheckMark={
              completedStyle ? "background: grey; border: 3px solid grey" : ""
            }
          ></StyledCheckMark>
        </StyledFlexSpaceBetween>
        <StyledTaskTitle>{task.title}</StyledTaskTitle>
      </StyledTask>
    </StyledLink>
  );
}
