import {Link,} from "react-router-dom";
import CategoryTiles from "./components/CategoryTiles";
import HomeSlider from "./components/HomeSlider";
import ProductGrid from "./components/ProductGrid";
import { useStoreCatalog,} from "./hooks/useStoreCatalog";
import MarketBenefits from "./components/MarketBenefits";
import {FEATURED_PRODUCTS_LIMIT,} from "./constants/store.constants";

function Home() {
  const {
    categories,
    error,
    loading,
    products,
  } = useStoreCatalog();

  const featuredProducts =
    products.slice(
      0,
      FEATURED_PRODUCTS_LIMIT
    );

  console.log(products);
  console.log(featuredProducts);

  return (
    <>
      <HomeSlider />

      <MarketBenefits />

      <CategoryTiles
        categories={categories}
      />

      <section className="market-section">
        <div className="market-heading">
          <div>
            <p className="market-kicker">
              Seçilmiş məhsullar
            </p>

            <h2>
              Populyar seçimlər
            </h2>
          </div>

          <Link to="/products">
            Bütün məhsullar
          </Link>
        </div>

        <ProductGrid
          products={featuredProducts}
          loading={loading}
          error={error}
        />
      </section>
    </>
  );
}

export default Home;
