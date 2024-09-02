// export default function sortedByDate(array) {
//   const newArray = array.toSorted((a, b) => {
//     const dateA = new Date(a.dueDate);
//     const dateB = new Date(b.dueDate);
//     return dateA - dateB;
//   });
//   return newArray;
// }

const priorityOrder = {
  Low: 1,
  Medium: 2,
  High: 3,
};

export default function sortByFilter(sortMode, array) {
  if (sortMode === "date") {
    return array.toSorted((a, b) => {
      const dateA = new Date(a.dueDate);
      const dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
  } else if (sortMode === "prioAscending") {
    return array.toSorted((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  } else if (sortMode === "prioDescending") {
    return array.toSorted((a, b) => {
      return priorityOrder[b.priority] - priorityOrder[a.priority]; // This line was changed
    });
  }
}
