export default function prioColor(task) {
  if (task.priority === "High") {
    return "red";
  } else if (task.priority === "Medium") {
    return "yellow";
  } else if (task.priority === "Low") {
    return "green";
  }
}
