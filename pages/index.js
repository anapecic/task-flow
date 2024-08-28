import Header from "@/components/Header/Header";
import TaskList from "@/components/TaskList/TaskList";
import CreateTaskForm from "@/components/CreateTaskForm/CreateTaskForm";

export default function HomePage({ currentTasks, onCreateTask }) {
  return (
    <>
      <Header />
      <main>
        <TaskList currentTasks={currentTasks} />
        <CreateTaskForm onCreateTask={onCreateTask} />
      </main>
    </>
  );
}
