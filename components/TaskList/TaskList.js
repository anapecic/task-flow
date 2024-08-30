import { useEffect, useState } from "react";
import Task from "../Task/Task";
import styled from "styled-components";
// import { useTasks } from "@/lib/tasksContext";

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledTitleCompletedTask = styled.h3`
  text-align: center;
`;

export default function TaskList({ tasks = [], toggleIsCompleted }) {
  const activeTasks = tasks.filter((task) => !task.isCompleted);
  const completedTasks = tasks.filter((task) => task.isCompleted);

  return (
    <>
      <h2>Tasks</h2>
      <StyledList>
        {activeTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleIsCompleted={toggleIsCompleted}
          />
        ))}
      </StyledList>
      <StyledTitleCompletedTask>Completed Tasks</StyledTitleCompletedTask>
      <StyledList>
        {completedTasks.map((task) => (
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
