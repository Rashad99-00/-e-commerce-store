import { Link, useParams } from "react-router-dom";
import { getImageSrc } from "../../utils/image";
import { useProductDetail } from "./hooks/useProductDetail";
import { formatPrice } from "./utils/storeFormat";
import Loader from "../store/components/Loader";
import EmptyState from "../store/components/EmptyState";

function ProductDetail() {
  const { id } = useParams();

  const { product, loading } = useProductDetail(id);

  if (loading) {
    return <Loader />;
  }
  if (!product) {
    return <EmptyState message="Məhsul tapılmadı." />;
  }
  const image = product.imageUrl ?? product.images?.[0]?.url;

  return (
    <section className="detail-page">
      <Link className="back-link" to="/products">
        ← Məhsullara qayıt
      </Link>

      <div className="product-detail">
        <div className="detail-media">
          {image && <img src={getImageSrc(image)} alt={product.name} />}
        </div>

        <div className="detail-info">
          <p className="market-kicker">{product.category.name}</p>

          <h1>{product.name}</h1>

          <strong className="detail-price">{formatPrice(product.price)}</strong>

          <p className="detail-description">
            {product.description ?? "Bu məhsul üçün açıqlama yoxdur."}
          </p>

          <div className="stock-line">
            Stokda:
            <b>{product.stock}</b>
          </div>

          <span className="available-label">Sifariş üçün mövcuddur</span>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;
