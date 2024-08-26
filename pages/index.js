import Header from "@/components/Header/Header";
import ToDos from "@/components/ToDos/ToDos";

export default function HomePage({ currentTasks }) {
  return (
    <>
      <Header />
      <ToDos currentTasks={currentTasks} />
    </>
  );
}
