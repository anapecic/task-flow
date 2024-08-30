// // components/DetailsPage.js
// import { useRouter } from "next/router";
// import Header from "../Header/Header";
// import styled from "styled-components";
// import { StyledPriority } from "../StyledPriority";
// import { StyledTaskWrapper } from "../StyledTaskWrapper";
// import { StyledTaskFlexWrapper } from "../StyledTaskFlexWrapper";
// import { StyledDate } from "../StyledDate";
// import Link from "next/link";
// import { StyledMarkCompleted } from "../StyledMarkCompleted";

// const StyledDetailsPage = styled.section`
//   border: 1px solid #000000;
//   padding: 1rem;
//   margin: 0.5rem;
//   background-color: ${(props) =>
//     props.isCompleted ? "rgba(71, 70, 70, 0.267)" : "transparent"};
// `;

// const StyledDescription = styled.aside`
//   border: 1px solid black;
//   padding: 1rem;
//   margin: 0.5rem;
// `;

// const StyledBackLink = styled(Link)`
//   border: 1px solid black;
//   padding: 1rem;
//   margin: 0.5rem;
//   border-radius: 50%;
//   background: grey;
//   text-decoration: none;
//   color: white;
// `;

// export default function DetailsPage({ sortedDefaultTasks, toggleIsCompleted }) {
//   const router = useRouter();
//   const dynamicId = router.query.id;

//   const currentTask = sortedDefaultTasks.find((task) => task.id === dynamicId);

//   if (!currentTask) {
//     return <p>Task not found</p>;
//   }

//   const today = new Date();
//   const dueDate = new Date(currentTask?.dueDate);
//   const pastDueDate = today >= dueDate;

//   const isCompleted = currentTask.isCompleted;

//   const handleMarkAsCompleted = () => {
//     if (typeof toggleIsCompleted === "function") {
//       toggleIsCompleted(currentTask.id);
//     } else {
//       console.error("toggleIsCompleted не є функцією");
//     }
//   };

//   return (
//     <>
//       <Header />
//       <StyledDetailsPage isCompleted={isCompleted}>
//         <StyledTaskWrapper>
//           <StyledTaskFlexWrapper>
//             <StyledPriority $priority={currentTask.priority} />
//             <StyledDate $dateColor={pastDueDate ? "red" : "black"}>
//               {currentTask.dueDate}
//             </StyledDate>
//           </StyledTaskFlexWrapper>
//           <StyledMarkCompleted
//             checked={isCompleted}
//             onClick={handleMarkAsCompleted}
//           />
//         </StyledTaskWrapper>

//         <h3>{currentTask.title}</h3>
//         <StyledDescription>
//           <p>{currentTask.description}</p>
//           <StyledBackLink href="/">&larr;</StyledBackLink>
//         </StyledDescription>
//       </StyledDetailsPage>
//     </>
//   );
// }
