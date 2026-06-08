import {useEffect,useState,} from "react";
import {getCategories,} from "../../../services/categoryService";
import {getProducts,} from "../../../services/productService";
import type {Category,} from "../../../types/category";
import type {Product,} from "../../../types/product";

export const useStoreCatalog = () => {
  const [products, setProducts] =
    useState<Product[]>([]);

  const [categories, setCategories] =
    useState<Category[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState(false);

  useEffect(() => {
    const loadCatalog =
      async () => {
        try {
          const [
            productResult,
            categoryResult,
          ] = await Promise.all([
            getProducts({
              page: 1,
              pageSize: 100,
            }),

            getCategories({
              page: 1,
              pageSize: 100,
            }),
          ]);

          console.log(productResult);
          console.log(categoryResult);

          setProducts(
            productResult.data.filter(
              (product: Product) =>
                product.isActive
            )
          );

          setCategories(
            categoryResult.data.filter(
              (category: Category) =>
                category.isActive
            )
          );
        } catch (error) {
          console.log(error);

          setError(true);
        } finally {
          setLoading(false);
        }
      };

    void loadCatalog();
  }, []);

  return {
    categories,
    error,
    loading,
    products,
  };
};