import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";
import styled from "styled-components";
import { useState } from "react";

const StyledMain = styled.main`
  position: relative;
  padding: 1rem;
`;

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

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledPrio = styled.div`
  border: 1px solid black;
  padding: 0;
  border-radius: 5px;
`;

const StyledP = styled.p`
  margin: 0;
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
      <StyledMain>
        <StyledNav>
          <select
            value={sortMode}
            onChange={(event) => handleSort(event.target.value)}
          >
            <option value="date">Due Date 📅</option>
            <option value="prioAscending">Prio &uarr;</option>
            <option value="prioDescending">Prio &darr;</option>
          </select>
          {sortMode === "date" ? null : (
            <StyledPrio>
              {sortMode === "prioAscending" ? (
                <StyledP>
                  <span onClick={setDefaultSort}>&#10005; </span>Prio &uarr;
                </StyledP>
              ) : null || sortMode === "prioDescending" ? (
                <StyledP>
                  <span onClick={setDefaultSort}>&#10005; </span>Prio &darr;
                </StyledP>
              ) : null}
            </StyledPrio>
          )}
        </StyledNav>
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
      </StyledMain>
    </>
  );
}
