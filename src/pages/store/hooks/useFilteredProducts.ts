import {
  useMemo,
} from "react";

import type {
  Product,
} from "../../../types/product";
import {
  LATEST_PRODUCTS_LIMIT,
} from "../constants/store.constants";
import type {
  CollectionCategory,
} from "../utils/storeCollections";

type Props = {
  products: Product[];
  search: string;
  categoryId: string;
  categoryName: string;
  collection: string;
  weeklyDiscountCategories: CollectionCategory[];
  minPrice: string;
  maxPrice: string;
};

const newestFirst = (
  firstProduct: Product,
  secondProduct: Product
) =>
  new Date(secondProduct.createdAt).getTime() -
  new Date(firstProduct.createdAt).getTime();

export const useFilteredProducts = ({
  products,
  search,
  categoryId,
  categoryName,
  collection,
  weeklyDiscountCategories,
  minPrice,
  maxPrice,
}: Props) => {
  return useMemo(() => {
    const text =
      search.trim().toLowerCase();

    const selectedCategoryName =
      categoryName.trim().toLowerCase();

    const min =
      minPrice === ""
        ? null
        : Number(minPrice);

    const max =
      maxPrice === ""
        ? null
        : Number(maxPrice);

    const filteredProducts =
      products.filter((product) => {
        const productPrice =
          Number(product.price);

        const matchesCategory =
          categoryId !== "all"
            ? product.category?.id === categoryId
            : !selectedCategoryName ||
              product.category?.name
                .toLowerCase()
                .includes(selectedCategoryName);

        return matchesCategory &&
          (!text ||
            product.name
              .toLowerCase()
              .includes(text)) &&
          (min === null || productPrice >= min) &&
          (max === null || productPrice <= max);
      });

    if (collection === "latest") {
      return [...filteredProducts]
        .sort(newestFirst)
        .slice(
          0,
          LATEST_PRODUCTS_LIMIT
        );
    }

    if (collection === "weekly-discounts") {
      const weeklyCategoryIds =
        weeklyDiscountCategories
          .map((category) => category.id)
          .filter(Boolean);

      const weeklyCategoryNames =
        weeklyDiscountCategories.map(
          (category) =>
            category.name.toLowerCase()
        );

      const weeklyProducts =
        filteredProducts.filter(
          (product) =>
            weeklyCategoryIds.includes(
              product.category?.id
            ) ||
            weeklyCategoryNames.some(
              (category) =>
                product.category?.name
                  .toLowerCase()
                  .includes(category)
            )
        );

      return weeklyProducts;
    }

    return filteredProducts;
  }, [
    categoryId,
    categoryName,
    collection,
    maxPrice,
    minPrice,
    products,
    search,
    weeklyDiscountCategories,
  ]);
};
