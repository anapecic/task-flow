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

const TaskDeleted = ({ task, onDeleteList }) => {
  const [deleteMode, setDeleteMode] = useState(false);

  const handleDeleteClick = () => {
    console.log("Натиснуто кнопку видалення для завдання:", task.id);
    setDeleteMode(true);
  };

  const handleConfirmDelete = () => {
    onDeleteList(task.id); // Виклик функції для видалення завдання
    setDeleteMode(false); // Сховати підтвердження
  };

  const handleCancelDelete = () => setDeleteMode(false); // Сховати підтвердження без видалення

  return (
    <Card>
      <p>{task.title}</p>
      <DeleteButton onClick={handleDeleteClick}>Delete</DeleteButton>

      {isConfirmingDelete && (
        <ConfirmationBox>
          <p>Are you sure you want to delete this task?</p>
          <ConfirmButton onClick={handleConfirmDelete}>
            Yes, Delete
          </ConfirmButton>
          <CancelButton onClick={handleCancelDelete}>Cancel</CancelButton>
        </ConfirmationBox>
      )}
    </Card>
  );
};

export default TaskDeleted;
