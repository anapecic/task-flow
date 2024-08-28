import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";
import TaskDeleted from "@/components/TaskDelete/TaskDelete";
import { useState, useEffect } from "react";

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

export default function DetailsPage({ currentTasks }) {
  const [tasks, setTasks] = useState(currentTasks);
  const [deleted, setDeleted] = useState(false);
  const router = useRouter();
  const dynamicId = router.query.id;

  const handleDeleteTask = (taskId) => {
    console.log("Attempting to delete task with id:", taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    console.log("Updated tasks:", updatedTasks);
    setTasks(updatedTasks);
    setDeleted(true);
  };

  useEffect(() => {
    if (deleted) {
      router.push("/");
    }
  }, [deleted, router]);

  const currentTask = tasks.find((task) => task.id === dynamicId);

  if (!currentTask) {
    return <p>Task not found</p>;
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
          <StyledDate $dateColor={pastDueDate ? "red" : "black"} />
        </StyledTaskFlexWrapper>
        <h3>{currentTask.title}</h3>
        <StyledDescription>
          <TaskDeleted task={currentTask} onDeleteList={handleDeleteTask} />
          <p>{currentTask.description}</p>
          <StyledBackLink href="/">&larr;</StyledBackLink>
        </StyledDescription>
      </StyledDetailsPage>
    </>
  );
}
