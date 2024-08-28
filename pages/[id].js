import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";

const StyledDetailsPage = styled.section`
  border: 1px solid #000000;
  padding: 1rem;
  margin: 0.5rem;
`;

const StyledDescription = styled.aside`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
`;

const StyledBackLink = styled(Link)`
  border: 1px solid black;
  padding: 1rem;
  margin: 0.5rem;
  border-radius: 50%;
  background: grey;
  text-decoration: none;
  color: white;
`;

export default function DetailsPage({
  currentTasks,
  handleConfirm,
  handleEditTask,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const router = useRouter();
  const dynamicId = router.query.id;
  const currentTask = currentTasks?.find((task) => task.id === dynamicId);

  if (!currentTask) {
    return <p>Task not found</p>;
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleToggleEdit() {
    setEditMode(!editMode);
  }

  function handleCancel() {
    setEditMode(false);
  }

  function onEditTask(taskData) {
    handleEditTask(taskData, dynamicId);
  }

  const today = new Date();
  const dueDate = new Date(currentTask?.dueDate);
  const pastDueDate = today >= dueDate;

  return (
    <>
      <Header />
      <StyledDetailsPage>
        <StyledTaskFlexWrapper>
          <StyledPriority $priority={currentTask.priority} />
          <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
            {currentTask.dueDate}
          </StyledDate>
        </StyledTaskFlexWrapper>
        <h3>{currentTask.title}</h3>
        <StyledDescription>
          <p>{currentTask.description}</p>
          <button type="button" onClick={() => setIsOpen(true)}>
            Delete
          </button>
          {editMode ? (
            <CreateTaskForm
              onCancel={handleCancel}
              onSubmitTask={onEditTask}
              placeholderObject={currentTask}
              editMode={editMode}
              formTitle="Edit your Task"
            />
          ) : (
            <button onClick={handleToggleEdit}>Edit</button>
          )}
          {isOpen && (
            <Modal
              onClose={closeModal}
              onConfirm={(event) => handleConfirm(event, dynamicId)}
            >
              <p>Are you sure you want to delete this task?</p>
            </Modal>
          )}

          <StyledBackLink href="/">&larr;</StyledBackLink>
        </StyledDescription>
      </StyledDetailsPage>
    </>
  );
}
