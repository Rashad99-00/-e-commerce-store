import {useState,} from "react";
import { useSearchParams,} from "react-router-dom";
import type { Category,} from "../../../types/category";
import type { Product,} from "../../../types/product";
import {PRODUCTS_PER_PAGE,} from "../constants/store.constants";
import {getWeeklyDiscountCategories,} from "../utils/storeCollections";
import {useFilteredProducts,} from "./useFilteredProducts";

type Props = {
  categories: Category[];
  products: Product[];
};

export const useCatalogControls = ({
  categories,
  products,
}: Props) => {
  const [search, setSearch] =
    useState("");

  const [minPrice, setMinPrice] =
    useState("");

  const [maxPrice, setMaxPrice] =
    useState("");

  const [visibleCount, setVisibleCount] =
    useState(PRODUCTS_PER_PAGE);

  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams();

  const categoryId =
    searchParams.get("category") ??
    "all";

  const categoryName =
    searchParams.get("categoryName") ??
    "";

  const collection =
    searchParams.get("collection") ??
    "";

  const resetVisibleProducts = () => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  };

  const changeSearch = (
    nextSearch: string
  ) => {
    setSearch(nextSearch);
    resetVisibleProducts();
  };

  const changeMinPrice = (
    nextMinPrice: string
  ) => {
    setMinPrice(nextMinPrice);
    resetVisibleProducts();
  };

  const changeMaxPrice = (
    nextMaxPrice: string
  ) => {
    setMaxPrice(nextMaxPrice);
    resetVisibleProducts();
  };

  const chooseCategory = (
    nextCategoryId: string
  ) => {
    resetVisibleProducts();

    if (nextCategoryId === "all") {
      setSearchParams({});
      return;
    }

    setSearchParams({
      category: nextCategoryId,
    });
  };

  const filteredProducts =
    useFilteredProducts({
      products,
      search,
      categoryId,
      categoryName,
      collection,
      weeklyDiscountCategories:
        getWeeklyDiscountCategories(
          categories
        ),
      minPrice,
      maxPrice,
    });

  const visibleProducts =
    filteredProducts.slice(
      0,
      visibleCount
    );

  const hasMoreProducts =
    filteredProducts.length >
    visibleCount;

  const loadMoreProducts = () => {
    setVisibleCount(
      (currentCount) =>
        currentCount + PRODUCTS_PER_PAGE
    );
  };

  return {
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
  };
};
