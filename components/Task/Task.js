import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const StyledTask = styled.li`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
`;

const StyledTaskInfo = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledPriority = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => prioColor(props.$priority)};
`;

const StyledDate = styled.p`
  color: ${(props) => props.$dateColor};
  margin: 0;
  padding: 0;
`;

const StyledTaskTitle = styled.h3``;

function prioColor(priority) {
  if (priority === "High") {
    return "red";
  } else if (priority === "Medium") {
    return "yellow";
  } else if (priority === "Low") {
    return "green";
  }
}

export default function Task({ task }) {
  const today = new Date();
  const dueDate = new Date(task.dueDate);
  const pastDueDate = today >= dueDate;

  return (
    <StyledLink href={`/${task.id}`}>
      <StyledTask>
        <StyledTaskInfo>
          <StyledPriority $priority={task.priority} />
          <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
            {task.dueDate}
          </StyledDate>
        </StyledTaskInfo>
        <StyledTaskTitle>{task.title}</StyledTaskTitle>
      </StyledTask>
    </StyledLink>
  );
}
