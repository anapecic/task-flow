import { useRouter } from "next/router";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

const StyledButton = styled.button`
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: ${(props) => (props.primary ? "red" : "grey")};
  color: white;
  cursor: pointer;
`;

export default function ConfirmDelete({ sortedDefaultTasks, onDelete }) {
  const router = useRouter();
  const { id } = router.query;
  const currentTask = sortedDefaultTasks.find((task) => task.id === id);

  if (!currentTask) {
    return <p>Task not found</p>;
  }

  const handleConfirmDelete = () => {
    if (typeof onDelete === "function") {
      onDelete(id);
      router.push("/");
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <StyledContainer>
      <h1>Are you sure you want to delete this task?</h1>
      <p>{currentTask.title}</p>
      <div>
        <StyledButton primary onClick={handleConfirmDelete}>
          Confirm
        </StyledButton>
        <StyledButton onClick={handleCancel}>Cancel</StyledButton>
      </div>
    </StyledContainer>
  );
}
