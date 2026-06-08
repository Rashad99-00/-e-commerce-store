import {useEffect, useState,} from "react";
import {getCategories,} from "../../../services/categoryService";
import { getProducts,} from "../../../services/productService";
import type {  Category,} from "../../../types/category";
import type { Product,} from "../../../types/product";
import { HEADER_DATA_PAGE_SIZE, LATEST_PRODUCTS_LIMIT,} from "../constants/store.constants";
import {getWeeklyDiscountCategories,} from "../utils/storeCollections";

const newestFirst = (
  firstProduct: Product,
  secondProduct: Product
) =>
  new Date(secondProduct.createdAt).getTime() -
  new Date(firstProduct.createdAt).getTime();

export const useStoreHeaderData = () => {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const [latestProducts, setLatestProducts] =
    useState<Product[]>([]);

  useEffect(() => {
    const loadHeaderData =
      async () => {
        try {
          const [
            categoryResult,
            productResult,
          ] = await Promise.all([
            getCategories({
              page: 1,
              pageSize: HEADER_DATA_PAGE_SIZE,
            }),
            getProducts({
              page: 1,
              pageSize: HEADER_DATA_PAGE_SIZE,
            }),
          ]);

          setCategories(
            categoryResult.data.filter(
              (category) =>
                category.isActive
            )
          );

          setLatestProducts(
            productResult.data
              .filter(
                (product) =>
                  product.isActive
              )
              .sort(newestFirst)
              .slice(
                0,
                LATEST_PRODUCTS_LIMIT
              )
          );
        } catch (error) {
          console.log(error);
        }
      };

    void loadHeaderData();
  }, []);

  const discountCategories =
    getWeeklyDiscountCategories(
      categories
    );

  return {
    categories,
    discountCategories,
    latestProducts,
  };
};
