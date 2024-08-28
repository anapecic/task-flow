import styled from "styled-components";
import transformDateType from "@/utils/transformDateType";

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

export default function CreateTaskForm({
  onSubmitTask,
  onCancel,
  placeholderObject,
  editMode,
  formTitle,
}) {
  const today = transformDateType(new Date());

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData);
    onCancel();
    onSubmitTask(taskData);
  }

  return (
    <>
      <StyledTaskForm onSubmit={handleSubmit}>
        <h2>{formTitle}</h2>
        <label htmlFor="taskName">Task title</label>
        <input
          type="text"
          id="taskName"
          name="title"
          maxLength="40"
          placeholder={
            editMode ? placeholderObject.title : "go grocery shopping"
          }
          required
        />
        <label htmlFor="taskDescription">Description</label>
        <input
          type="text"
          id="taskDescription"
          name="description"
          maxLength="500"
          placeholder={
            editMode
              ? placeholderObject.description
              : "buy 5 apples and 1 gallon of milk"
          }
        ></input>
        <label htmlFor="dueDate">Due Date</label>
        <input
          type="date"
          id="dueDate"
          name="dueDate"
          defaultValue={editMode ? placeholderObject.dueDate : today}
          required
        />
        <label htmlFor="priority">Priority</label>
        <select
          defaultValue={editMode ? placeholderObject.priority : ""}
          name="priority"
          required
        >
          <option disabled value="">
            --Choose a priority--
          </option>
          <option value="High">🔴 High</option>
          <option value="Medium">🟡 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
        <button type="submit">submit</button>
        <button type="button" onClick={onCancel}>
          cancel
        </button>
      </StyledTaskForm>
    </>
  );
}
