import { useRouter } from "next/router";
import Header from "@/components/Header/Header";
import prioColor from "@/utils/prioColor";
import Link from "next/link";
import BackButton from "@/components/BackButton/BackButton";

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
      <div
        style={{ border: "1px solid black", padding: "1rem", margin: "0.5rem" }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: prioColor(currentTask),
            }}
          ></div>
          <div style={{ color: pastDueDate ? "red" : "black" }}>
            {currentTask.dueDate}
          </div>
        </div>
        <h3 style={{ color: "black" }}>{currentTask.title}</h3>
        <div
          style={{
            border: "1px solid black",
            padding: "1rem",
            margin: "0.5rem",
          }}
        >
          <p>{currentTask.description}</p>
          <BackButton
            handleClick={() => router.push("/")}
            btnContent="&larr;"
          />
        </div>
      </div>
    </>
  );
}
