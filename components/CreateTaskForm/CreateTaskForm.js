import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";

const StyledCreateButton = styled.button`
  border: 1px solid black;
  border-radius: 50%;
  background: grey;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  width: 70px;
  height: 70px;
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

const StyledTaskForm = styled.form`
  position: absolute;
  top: 5%;
  left: 5%;
  background: #e0e1dd;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  height: 90%;
  width: 90%;
  border: 1px solid #000;
`;

export default function CreateTaskForm({ onCreateTask }) {
  const [createMode, setCreateMode] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = currentDate.getFullYear();

    const formattedDate = `${year}-${month}-${day}`;
    setToday(formattedDate);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData);
    event.target.reset();
    setCreateMode((s) => (s = false));
    onCreateTask(taskData);
  }

  return (
    <div>
      {createMode ? (
        <StyledTaskForm onSubmit={handleSubmit}>
          <h3>Create a new task</h3>
          <label htmlFor="taskName">Task title</label>
          <input
            type="text"
            id="taskName"
            name="title"
            maxlength="40"
            required
          />
          <label htmlFor="taskDescription">Description</label>
          <input
            type="text"
            id="taskDescription"
            name="description"
            maxlength="500"
          ></input>
          <label htmlFor="dueDate">Due Date</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            defaultValue={today}
            required
          />
          <label htmlFor="priority">Priority</label>
          <select defaultValue="" name="priority" required>
            <option disabled value="">
              --Choose a priority--
            </option>
            <option value="High">🔴 High</option>
            <option value="Medium">🟡 Medium</option>
            <option value="Low">🟢 Low</option>
          </select>
          <input type="submit" />
        </StyledTaskForm>
      ) : null}
      {createMode ? null : (
        <StyledCreateButton onClick={() => setCreateMode((s) => (s = true))}>
          +
        </StyledCreateButton>
      )}
    </div>
  );
}
