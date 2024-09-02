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
  sortMode,
  handleSort,
  setDefaultSort,
}) {
  const [createMode, setCreateMode] = useState(false);

  function handleCancel() {
    setCreateMode(false);
  }

  return (
    <>
      <Header />
      <main>
        <nav>
          <select
            value={sortMode}
            onChange={(event) => handleSort(event.target.value)}
          >
            <option value="date">Due Date 📅</option>
            <option value="prioAscending">Prio &uarr;</option>
            <option value="prioDescending">Prio &darr;</option>
          </select>
          <div>
            {sortMode === "prioAscending" ? (
              <p>
                <span onClick={setDefaultSort}>❌ </span>Prio &uarr;
              </p>
            ) : null || sortMode === "prioDescending" ? (
              <p>
                <span onClick={setDefaultSort}>❌ </span>Prio &darr;
              </p>
            ) : null}
          </div>
        </nav>
        <TaskList currentTasks={currentTasks} />
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
