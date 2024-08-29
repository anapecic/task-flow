import { useState } from "react";
import styled from "styled-components";

const StyledTaskForm = styled.form`
  background: #e0e1dd;
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
`;

const StyledError = styled.p`
  color: red;
`;

export default function UpdateTaskForm({ task, onUpdateTask, onCancel }) {
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updatedTaskData = Object.fromEntries(formData);

    const newErrors = {};
    if (!updatedTaskData.title) newErrors.title = "Title is required";
    if (!updatedTaskData.dueDate) newErrors.dueDate = "Due date is required";
    if (!updatedTaskData.priority) newErrors.priority = "Priority is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onUpdateTask({ ...task, ...updatedTaskData });
  }

  return (
    <StyledTaskForm onSubmit={handleSubmit}>
      <h2>Update task</h2>
      <label htmlFor="taskName">Task title</label>
      <input
        type="text"
        id="taskName"
        name="title"
        maxLength="40"
        defaultValue={task.title}
        required
      />

      <label htmlFor="taskDescription">Description</label>
      <textarea
        id="taskDescription"
        name="description"
        maxLength="500"
        defaultValue={task.description}
      />

      <label htmlFor="dueDate">Due Date</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        defaultValue={task.dueDate}
        required
      />

      <label htmlFor="priority">Priority</label>
      <select name="priority" defaultValue={task.priority} required>
        <option disabled value="">
          --Choose a priority--
        </option>
        <option value="High">🔴 High</option>
        <option value="Medium">🟡 Medium</option>
        <option value="Low">🟢 Low</option>
      </select>

      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </StyledTaskForm>
  );
}
