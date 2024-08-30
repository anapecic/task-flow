import { useState, useEffect } from "react";
import { useTasks } from "@/lib/tasksContext";
import styled from "styled-components";
import Link from "next/link";
import { StyledPriority } from "../StyledPriority";
import { StyledTaskWrapper } from "../StyledTaskWrapper";
import { StyledTaskFlexWrapper } from "../StyledTaskFlexWrapper";
import { StyledDate } from "../StyledDate";
import { StyledMarkCompleted } from "../StyledMarkCompleted";

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

const StyledTaskTitle = styled.h3``;

export default function Task({ task }) {
  const today = new Date();
  const dueDate = new Date(task?.dueDate);
  const pastDueDate = today >= dueDate;
  const { tasks, updateTask } = useTasks();

  const [isCompleted, setIsCompleted] = useState(task.isCompleted);

  useEffect(() => {
    const updatedTask = tasks.find((t) => t.id === task.id);
    if (updatedTask) {
      setIsCompleted(updatedTask.isCompleted);
    }
  }, [tasks, task.id]);

  const handleMarkAsCompleted = (e) => {
    e.preventDefault();
    updateTask(task.id);
    setIsCompleted(!isCompleted);
  };

  return (
    <StyledLink href={`/${task.id}`}>
      <StyledTask isCompleted={isCompleted}>
        <StyledTaskWrapper>
          <StyledTaskFlexWrapper>
            <StyledPriority $priority={task.priority} />
            <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
              {task.dueDate}
            </StyledDate>
          </StyledTaskFlexWrapper>
          <StyledMarkCompleted
            checked={isCompleted}
            onClick={handleMarkAsCompleted}
          />
        </StyledTaskWrapper>
        <StyledTaskTitle>{task.title}</StyledTaskTitle>
      </StyledTask>
    </StyledLink>
  );
}
