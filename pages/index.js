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
  onCreateTask,
  onSetCompleted,
  completedTasks,
  sortMode,
  onSetFilter,
}) {
  const [createMode, setCreateMode] = useState(false);

  function handleCancel() {
    setCreateMode(false);
  }

  return (
    <>
      <Header />
      <main>
        <Filter sortMode={sortMode} onSetFilter={onSetFilter} />
        <TaskList
          tasks={currentTasks}
          onSetCompleted={onSetCompleted}
          listTitle="Tasks"
          completedStyle={false}
        />
        <TaskList
          tasks={completedTasks}
          listTitle="Completed Tasks"
          completedStyle={true}
        />
        {createMode ? (
          <CreateTaskForm
            formTitle="Create new task"
            onSubmitTask={(taskData) => {
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

function Filter({ sortMode, onSetFilter }) {
  return (
    <select onChange={(event) => onSetFilter(event.target.value)}>
      <option value="date">Due Date</option>
      <option value="prioAscending">Prio ⬆️</option>
      <option value="prioDescending">Prio ⬇️</option>
    </select>
  );
}
