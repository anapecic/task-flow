import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";
import Modal from "@/components/Modal/Modal";
import { useState } from "react";
import { StyledMarkCompleted } from "@/components/StyledMarkCompleted";
import { StyledTaskWrapperTop } from "@/components/StyledTaskWrapperTop";

const StyledDetailsPage = styled.section`
  border: 1px solid #000000;
  padding: 1rem;
  margin: 0.5rem;
  background-color: ${(props) =>
    props.isCompleted ? "rgba(71, 70, 70, 0.267)" : "transparent"};
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
  toggleIsCompleted,
  isCompletedView,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dynamicId = router.query.id;
  const currentTask = currentTasks?.find((task) => task.id === dynamicId);

  if (!currentTask) {
    return <p>Task not found</p>;
  }

  function closeModal() {
    setIsOpen(false);
  }

  const today = new Date();
  const dueDate = new Date(currentTask?.dueDate);
  const pastDueDate = today >= dueDate;

  const handleMarkAsCompleted = (event) => {
    event.preventDefault();

    if (currentTask && currentTask.id) {
      toggleIsCompleted(currentTask.id);
    } else {
    }

    router.push("/");
  };

  return (
    <>
      <Header />
      <StyledDetailsPage isCompleted={currentTask.isCompleted}>
        <StyledTaskWrapperTop>
          <StyledTaskFlexWrapper>
            <StyledPriority $priority={currentTask.priority} />
            <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
              {currentTask.dueDate}
            </StyledDate>
          </StyledTaskFlexWrapper>
          <StyledMarkCompleted
            onClick={handleMarkAsCompleted}
            isCompletedView={isCompletedView} // Передача прапорця
          />
        </StyledTaskWrapperTop>

        <h3>{currentTask.title}</h3>
        <StyledDescription>
          <p>{currentTask.description}</p>
          <button type="button" onClick={() => setIsOpen(true)}>
            Delete
          </button>
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
