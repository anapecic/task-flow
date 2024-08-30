// pages/[id].js
import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskWrapper } from "@/components/StyledTaskWrapper";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";
import { StyledMarkCompleted } from "@/components/StyledMarkCompleted";
import { initialTasks } from "@/lib/data";
import { useState } from "react";

// Стили
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

// Компонент деталізації завдання
export default function TaskDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  // Ініціалізація задач з `initialTasks`
  const [tasks, setTasks] = useState(initialTasks);

  // Функція для перемикання статусу виконання
  const handleToggleIsCompleted = (taskId) => {
    console.log(`Toggle completed status for task with ID: ${taskId}`);
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Перевірка, чи `id` визначено перед рендерингом
  if (!id) {
    return <p>Loading...</p>;
  }

  const currentTask = tasks.find((task) => task.id === id);

  if (!currentTask) {
    return <p>Task not found</p>;
  }

  const today = new Date();
  const dueDate = new Date(currentTask.dueDate);
  const pastDueDate = today >= dueDate;

  const isCompleted = currentTask.isCompleted;

  const handleMarkAsCompleted = () => {
    if (typeof handleToggleIsCompleted === "function") {
      handleToggleIsCompleted(currentTask.id);
    } else {
      console.error("handleToggleIsCompleted не є функцією");
    }
  };

  return (
    <>
      <Header />
      <StyledDetailsPage isCompleted={isCompleted}>
        <StyledTaskWrapper>
          <StyledTaskFlexWrapper>
            <StyledPriority $priority={currentTask.priority} />
            <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
              {currentTask.dueDate}
            </StyledDate>
          </StyledTaskFlexWrapper>
          <StyledMarkCompleted
            checked={isCompleted}
            onClick={handleMarkAsCompleted}
          />
        </StyledTaskWrapper>

        <h3>{currentTask.title}</h3>
        <StyledDescription>
          <p>{currentTask.description}</p>
          <StyledBackLink href="/">&larr;</StyledBackLink>
        </StyledDescription>
      </StyledDetailsPage>
    </>
  );
}
