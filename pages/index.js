import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";

export default function HomePage({ sortedDefaultTasks }) {
  return (
    <>
      <Header />
      <main>
        <TaskList sortedDefaultTasks={sortedDefaultTasks} />
      </main>
    </>
  );
}
