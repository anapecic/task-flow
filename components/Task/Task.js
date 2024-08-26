import Link from "next/link";
import prioColor from "@/utils/prioColor";

export default function Task({ task }) {
  const today = new Date();
  const dueDate = new Date(task.dueDate);
  const pastDueDate = today >= dueDate;

  return (
    <Link href={`/${task.id}`} style={{ textDecoration: "none" }}>
      <div
        style={{ border: "1px solid black", padding: "1rem", margin: "0.5rem" }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              background: prioColor(task),
            }}
          ></div>
          <div style={{ color: pastDueDate ? "red" : "black" }}>
            {task.dueDate}
          </div>
        </div>
        <h3 style={{ color: "black" }}>{task.title}</h3>
      </div>
    </Link>
  );
}
