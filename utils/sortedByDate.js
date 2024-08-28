export default function sortedByDate(array) {
  const newArray = array.toSorted((a, b) => {
    const dateA = new Date(a.dueDate);
    const dateB = new Date(b.dueDate);
    return dateA - dateB;
  });
  return newArray;
}
