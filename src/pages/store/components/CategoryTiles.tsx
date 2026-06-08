import { Link,} from "react-router-dom";
import type { Category,} from "../../../types/category";

type CategoryTilesProps = {
  categories: Category[];
};

function CategoryTiles({
  categories,
}: CategoryTilesProps) {
  return (
    <section className="market-section">
      <div className="market-heading">
        <h2>Kateqoriyalar</h2>
        <Link to="/products">
          Hamısına bax
        </Link>
      </div>

      <div className="market-categories">
        {categories.slice(0, 4).map(
          (category) => (
            <Link
              key={category.id}
              to={
                `/products?category=${category.id}`
              }
            >
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <span>
                {category.productsCount} məhsul
              </span>
            </Link>
          )
        )}
      </div>
    </section>
  );
}

export default CategoryTiles;
