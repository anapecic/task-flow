export default function Filter({ sortMode, onSetFilter }) {
  return (
    <select onChange={(event) => onSetFilter(event.target.value)}>
      <option value="date">Due Date</option>
      <option value="prioAscending">Prio ⬆️</option>
      <option value="prioDescending">Prio ⬇️</option>
    </select>
  );
}
