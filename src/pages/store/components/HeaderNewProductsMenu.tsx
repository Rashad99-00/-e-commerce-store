import {
  Link,
} from "react-router-dom";

import type {
  Product,
} from "../../../types/product";
import {
  formatPrice,
} from "../utils/storeFormat";

type Props = {
  isOpen: boolean;
  products: Product[];
  onClose: () => void;
  onToggle: () => void;
};

function HeaderNewProductsMenu({
  isOpen,
  products,
  onClose,
  onToggle,
}: Props) {
  return (
    <div
      className={
        isOpen
          ? "market-new-products-menu is-open"
          : "market-new-products-menu"
      }
    >
      <button
        className="market-new-products-trigger"
        type="button"
        onClick={onToggle}
      >
        Yeni məhsullar
      </button>

      <div className="market-new-products-dropdown">
        {products.length > 0
          ? products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              onClick={onClose}
            >
              <strong>{product.name}</strong>
              <span>{product.category.name}</span>
              <em>{formatPrice(product.price)}</em>
            </Link>
          ))
          : (
            <p>Yeni məhsul tapılmadı.</p>
          )}
      </div>
    </div>
  );
}

export default HeaderNewProductsMenu;
