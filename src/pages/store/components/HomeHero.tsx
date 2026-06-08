import {Link,} from "react-router-dom";
import type { Product,} from "../../../types/product";
import { getImageSrc,} from "../../../utils/image";
import { formatPrice,} from "../utils/storeFormat";

type HomeHeroProps = {
  product?: Product;
};

function HomeHero({
  product,
}: HomeHeroProps) {
  const image =
    product?.imageUrl ??
    product?.images?.[0]?.url;

  return (
    <section
      className="market-hero"
      style={
        image
          ? {
            backgroundImage:
              `url("${getImageSrc(image)}")`,
          }
          : undefined
      }
    >
      <div className="market-hero-inner">
        <p className="market-kicker">
          Yeni texnologiyalar
        </p>
        <h1>
          Gündəlik həyat üçün ağıllı cihazlar
        </h1>
        <p className="market-hero-copy">
          Telefon, audio, gaming və ev
          cihazlarını bir kataloqda kəşf et.
        </p>
        <div className="market-hero-actions">
          <Link
            className="primary-action"
            to="/products"
          >
            Məhsullara bax
          </Link>
          {product && (
            <Link
              className="secondary-action"
              to={`/products/${product.id}`}
            >
              {formatPrice(product.price)}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default HomeHero;
