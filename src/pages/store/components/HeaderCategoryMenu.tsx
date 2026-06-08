import {
  Link,
} from "react-router-dom";

import type {
  Category,
} from "../../../types/category";
import {
  FALLBACK_CATEGORIES,
} from "../constants/store.constants";

type Props = {
  categories: Category[];
  dismissed: boolean;
  onClose: () => void;
  onReset: () => void;
};

function HeaderCategoryMenu({
  categories,
  dismissed,
  onClose,
  onReset,
}: Props) {
  const className =
    dismissed
      ? "market-category-menu is-dismissed"
      : "market-category-menu";

  return (
    <div
      className={className}
      onMouseEnter={onReset}
      onMouseLeave={onReset}
    >
      <Link
        className="market-category-trigger"
        to="/products"
      >
        <span aria-hidden="true">☰</span>
        Kateqoriyalar
      </Link>

      <div className="market-category-dropdown">
        <div className="market-category-list">
          {categories.length > 0
            ? categories.map((category) => (
              <Link
                key={category.id}
                to={`/products?category=${category.id}`}
                onClick={onClose}
              >
                <strong>{category.name}</strong>
                <span>{category.productsCount} məhsul</span>
              </Link>
            ))
            : FALLBACK_CATEGORIES.map((category) => (
              <Link
                key={category}
                to="/products"
                onClick={onClose}
              >
                <strong>{category}</strong>
                <span>Məhsullara bax</span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HeaderCategoryMenu;
