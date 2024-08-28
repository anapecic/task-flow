import { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin: 10px;
  position: relative;
`;

const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
`;

const ConfirmationBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const ConfirmButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
`;

const CancelButton = styled.button`
  background-color: white;
  color: black;
  border: none;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
`;

const TaskDeleted = ({ currentTask, handleDeleteTask }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  function toggleDelete() {
    setDeleteMode(!deleteMode);
  }

  function onConfirmDelete() {
    handleDeleteTask(currentTask.id);
    setDeleteMode(!deleteMode);
  }

  return (
    <Card>
      <DeleteButton onClick={toggleDelete}>Delete</DeleteButton>

      {deleteMode ? (
        <ConfirmationBox>
          <p>Are you sure you want to delete this task?</p>
          <ConfirmButton onClick={() => onConfirmDelete()}>
            Yes, delete
          </ConfirmButton>
          <CancelButton onClick={toggleDelete}>Cancel</CancelButton>
        </ConfirmationBox>
      ) : null}
    </Card>
  );
};

export default TaskDeleted;
