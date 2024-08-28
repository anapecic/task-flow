import styled from "styled-components";

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

export default function CreateTaskForm({ onCreateTask, onCancel }) {
  const today = new Date().toISOString().split("T")[0];

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData);
    onCancel();
    onCreateTask(taskData);
  }

  return (
    <div>
      <StyledTaskForm onSubmit={handleSubmit}>
        <h2>Create a new task</h2>
        <label htmlFor="taskName">Task title</label>
        <input
          type="text"
          id="taskName"
          name="title"
          maxlength="40"
          placeholder="go grocery shopping"
          required
        />
        <label htmlFor="taskDescription">Description</label>
        <input
          type="text"
          id="taskDescription"
          name="description"
          maxlength="500"
          placeholder="buy 10 apples and 2 gallons of milk"
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
        <button type="submit">submit</button>
        <button onClick={onCancel}>cancel</button>
      </StyledTaskForm>
    </div>
  );
}
