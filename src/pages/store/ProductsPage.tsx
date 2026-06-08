import CategoryFilters from "./components/CategoryFilters";
import ProductGrid from "./components/ProductGrid";
import SearchInput from "./components/SearchInput";
import {useCatalogControls,} from "./hooks/useCatalogControls";
import { useStoreCatalog,} from "./hooks/useStoreCatalog";

const getCatalogTitle = (
  collection: string
) => {
  if (collection === "latest") {
    return "Yeni məhsullar";
  }

  if (collection === "weekly-discounts") {
    return "Həftəlik endirimli məhsullar";
  }

  return "Bütün məhsullar";
};

function ProductsPage() {
  const {
    categories,
    error,
    loading,
    products,
  } = useStoreCatalog();

  const {
    categoryId,
    changeMaxPrice,
    changeMinPrice,
    changeSearch,
    chooseCategory,
    collection,
    hasMoreProducts,
    loadMoreProducts,
    maxPrice,
    minPrice,
    search,
    visibleProducts,
  } = useCatalogControls({
    categories,
    products,
  });

  const catalogTitle =
    getCatalogTitle(collection);

  return (
    <section className="catalog-page">
      <header className="catalog-title">
        <p className="market-kicker">Kataloq</p>
        <h1>{catalogTitle}</h1>
      </header>

      <div className="catalog-toolbar">
        <label className="catalog-field catalog-search-field">
          <span>Axtarış</span>
          <SearchInput
            value={search}
            placeholder="Məhsul axtar..."
            onChange={changeSearch}
          />
        </label>

        <CategoryFilters
          categories={categories}
          selectedCategory={categoryId}
          onSelect={chooseCategory}
        />

        <div className="catalog-price-range">
          <label className="catalog-field">
            <span>Min qiymət</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={minPrice}
              placeholder="0"
              onChange={(event) =>
                changeMinPrice(event.target.value)
              }
            />
          </label>

          <label className="catalog-field">
            <span>Max qiymət</span>
            <input
              type="number"
              min="0"
              inputMode="decimal"
              value={maxPrice}
              placeholder="999"
              onChange={(event) =>
                changeMaxPrice(event.target.value)
              }
            />
          </label>
        </div>
      </div>

      <ProductGrid
        products={visibleProducts}
        loading={loading}
        error={error}
      />

      {hasMoreProducts && !loading && !error && (
        <div className="load-more-wrap">
          <button
            className="load-more-button"
            type="button"
            onClick={loadMoreProducts}
          >
            Daha çox yüklə
          </button>
        </div>
      )}
    </section>
  );
}

export default ProductsPage;
