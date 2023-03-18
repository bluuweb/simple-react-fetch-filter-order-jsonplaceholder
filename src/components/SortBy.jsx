export default function SortBy({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
    >
      <option value="all">{value === "all" ? "Sort by" : "All"}</option>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  );
}
