import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";

export default function HomePage({ currentTasks }) {
  return (
    <>
      <Header />
      <main>
        <TaskList currentTasks={currentTasks} />
      </main>
    </>
  );
}
