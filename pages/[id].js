import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import styled from "styled-components";
import { StyledPriority } from "@/components/StyledPriority";
import { StyledTaskFlexWrapper } from "@/components/StyledTaskFlexWrapper";
import { StyledDate } from "@/components/StyledDate";
import Link from "next/link";

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

export default function DetailsPage({ sortedDefaultTasks }) {
  const router = useRouter();
  const dynamicId = router.query.id;
  const currentTask = sortedDefaultTasks.find((task) => task.id === dynamicId);

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
          <p>{currentTask.description}</p>
          <StyledBackLink href="/">&larr;</StyledBackLink>
        </StyledDescription>
      </StyledDetailsPage>
    </>
  );
}
