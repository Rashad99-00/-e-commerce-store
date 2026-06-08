import { Link,} from "react-router-dom";
import type { Product,} from "../../../types/product";
import { getImageSrc,} from "../../../utils/image";
import {formatPrice,} from "../utils/storeFormat";

type ProductCardProps = {
  product: Product;
};

function ProductCard({
  product,
}: ProductCardProps) {

  const image =
    product.imageUrl ??
    product.images?.[0]?.url;

  return (
    <article className="market-product">

      <Link
        className="market-product-media"
        to={`/products/${product.id}`}
      >
        {image ? (
          <img
            src={getImageSrc(image)}
            alt={product.name}
          />
        ) : (
          <span>
            Şəkil yoxdur
          </span>
        )}
      </Link>

      <div className="market-product-info">

        <p>
          {product.category.name}
        </p>

        <Link
          to={`/products/${product.id}`}
        >
          <h3>
            {product.name}
          </h3>
        </Link>

        <div>
          <strong>
            {formatPrice(product.price)}
          </strong>

          <Link
            className="detail-link"
            to={`/products/${product.id}`}
          >
            Bax
          </Link>
        </div>

      </div>
    </article>
  );
}

export default ProductCard;