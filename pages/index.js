import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";
import styled from "styled-components";
import { useState } from "react";

const StyledCreateButton = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  background: grey;
  text-decoration: none;
  color: white;
  font-weight: bold;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default function HomePage({
  currentTasks,
  completedTasks,
  onCreateTask,
  toggleIsCompleted,
}) {
  const [createMode, setCreateMode] = useState(false);

  function handleCancel() {
    setCreateMode(false);
  }
  return (
    <>
      <Header />
      <main>
        <TaskList
          title="Tasks" // Заголовок для поточних завдань
          tasks={currentTasks}
          toggleIsCompleted={toggleIsCompleted}
        />
        <TaskList
          title="Completed Tasks" // Заголовок для завершених завдань
          tasks={completedTasks}
          toggleIsCompleted={toggleIsCompleted} //Hier muss ein Prop übergeben werden, der die Completed Tasks anders rendert als die Current Tasks.
        />

        {createMode ? (
          <CreateTaskForm
            onCreateTask={(taskData) => {
              onCreateTask(taskData);
              setCreateMode(false);
            }}
            onCancel={handleCancel}
          />
        ) : (
          <StyledCreateButton onClick={() => setCreateMode(true)}>
            +
          </StyledCreateButton>
        )}
      </main>
    </>
  );
}
