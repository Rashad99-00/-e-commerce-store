import type { Category } from "../../../types/category";

type Props = {
  categories: Category[];
  selectedCategory: string;
  onSelect: (id: string) => void;
};

function CategoryFilters({
  categories,
  selectedCategory,
  onSelect,
}: Props) {
  return (
    <label className="catalog-field category-select">
      <span>Kateqoriya</span>

      <select
        value={selectedCategory}
        onChange={(event) =>
          onSelect(event.target.value)
        }
      >
        <option value="all">
          Hamısı
        </option>

        {categories.map((category) => (
          <option
            key={category.id}
            value={category.id}
          >
            {category.name}
          </option>
        ))}
      </select>
    </label>
  );
}

export default CategoryFilters;
