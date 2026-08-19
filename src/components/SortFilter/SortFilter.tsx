import type { SortOrder } from "../../types/task";

interface SortFilterProps {
  sortValue: SortOrder;
  onSort: (sortOrder: SortOrder) => void;
}

export default function SortFilter({ sortValue, onSort }: SortFilterProps) {
  const handleChange = (
    e: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>,
  ) => {
    onSort(e.target.value as SortOrder);
  };

  return (
    <select onChange={handleChange} value={sortValue}>
      <option value="desc">Completed first</option>
      <option value="asc">Completed last</option>
    </select>
  );
}
