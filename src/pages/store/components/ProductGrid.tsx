import type {Product,} from "../../../types/product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  loading?: boolean;
  error?: boolean;
};

function ProductGrid({
  products,
  loading = false,
  error = false,
}: ProductGridProps) {

  if (loading) {
    return (
      <p className="market-state">
        Məhsullar yüklənir...
      </p>
    );
  }

  if (error) {
    return (
      <p className="market-state">
        Məhsulları yükləmək mümkün olmadı.
      </p>
    );
  }

  if (!products.length) {
    return (
      <p className="market-state">
        Məhsul tapılmadı.
      </p>
    );
  }

  return (
    <div className="market-product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductGrid; 