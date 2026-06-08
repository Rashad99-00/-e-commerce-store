import {
  Link,
} from "react-router-dom";

import {
  WEEKLY_DISCOUNTS,
} from "../constants/store.constants";

type DiscountCategory = {
  id: string;
  name: string;
};

type Props = {
  categories: DiscountCategory[];
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
};

const getCategoryLink = (
  category: DiscountCategory
) =>
  category.id
    ? `/products?category=${category.id}`
    : `/products?categoryName=${encodeURIComponent(category.name)}`;

function HeaderDiscountMenu({
  categories,
  isOpen,
  onClose,
  onToggle,
}: Props) {
  return (
    <div
      className={
        isOpen
          ? "market-discount-menu is-open"
          : "market-discount-menu"
      }
    >
      <button
        className="market-discount-trigger"
        type="button"
        onClick={onToggle}
      >
        Həftəlik endirimlər
      </button>

      <div className="market-discount-dropdown">
        {WEEKLY_DISCOUNTS.map((item, index) => {
          const category =
            categories[
              index %
              categories.length
            ];

          return (
            <Link
              key={item.day}
              to={getCategoryLink(category)}
              onClick={onClose}
            >
              <span>{item.day}</span>
              <strong>{category.name}</strong>
              <em>-{item.discount}</em>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default HeaderDiscountMenu;
