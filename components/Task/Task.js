export default function Task({ task }) {
  function prioColor() {
    if (task.priority === "High") {
      return "red";
    } else if (task.priority === "Medium") {
      return "yellow";
    } else if (task.priority === "Low") {
      return "green";
    }
  }

  const today = new Date();
  const dueDate = new Date(task.dueDate);
  const pastDueDate = today >= dueDate;

  return (
    <div
      style={{ border: "1px solid black", padding: "1rem", margin: "0.5rem" }}
    >
      <div style={{ display: "flex", gap: "0.5rem" }}>
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: prioColor(),
          }}
        ></div>
        <div style={{ color: pastDueDate ? "red" : "black" }}>
          {task.dueDate}
        </div>
      </div>
      <h3>{task.title}</h3>
    </div>
  );
}
