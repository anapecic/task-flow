export default function transformDateType(dateString) {
  const dateObject = new Date(dateString);
  const newDay = dateObject.toISOString().split("T")[0];
  return newDay;
}
