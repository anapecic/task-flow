import { useState } from "react";
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";
import UpdateTaskForm from "@/components/UpdateTaskForm/UpdateTaskForm";

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

const Button = styled.button`
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: grey;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default function DetailsPage({ sortedDefaultTasks }) {
  const router = useRouter();
  const [tasks, setTasks] = useState(sortedDefaultTasks); // Initialize tasks state
  const [isOpen, setIsOpen] = useState(false);
  const dynamicId = router.query.id;

  // Find the current task in the tasks state
  const currentTask = tasks.find((task) => task.id === dynamicId);

  if (!currentTask) {
    return <p>Task not found</p>;
  }

  function handleUpdateTask(updatedTaskData) {
    console.log("Updated Task:", updatedTaskData);

    // Update the tasks state immutably
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTaskData.id ? updatedTaskData : task
      )
    );

    setIsOpen(false); // Close the update form after saving
  }

  function closeUpdateTaskForm() {
    setIsOpen(false);
  }

  const today = new Date();
  const dueDate = new Date(currentTask.dueDate);
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
          <Button onClick={() => setIsOpen(true)}>Update Task</Button>
          {isOpen && (
            <UpdateTaskForm
              task={currentTask}
              onUpdateTask={handleUpdateTask} // Pass the updated task data to handleUpdateTask
              onCancel={closeUpdateTaskForm}
            />
          )}
          <StyledBackLink href="/">&larr;</StyledBackLink>
        </StyledDescription>
      </StyledDetailsPage>
    </>
  );
}
