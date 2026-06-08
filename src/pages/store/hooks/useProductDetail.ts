import { useEffect,useState,} from "react";
import { getProductById,} from "../../../services/productService";
import type {Product,} from "../../../types/product";

export const useProductDetail = (
  id?: string
) => {
  const [product, setProduct] =
    useState<Product | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const loadProduct =
      async () => {
        if (!id) {
          setLoading(false);
          return;
        }

        try {
          const data =
            await getProductById(id);

          setProduct(data);
        } catch {
          setProduct(null);
        } finally {
          setLoading(false);
        }
      };

    void loadProduct();
  }, [id]);

  return {
    product,
    loading,
  };
};
