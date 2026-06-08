import api from "./api";
import type { ApiDataResponse, ListApiResponse, PaginatedData,} from "../types/api";
import type {CreateProductPayload, Product, UpdateProductPayload,} from "../types/product";
import { normalizeListResponse,} from "../utils/response";

type ProductQuery = {
  page: number;
  pageSize?: number;
  search?: string;
};

type UploadProductImageResponse = {
  urls?: string[];
  data?: {
    urls?: string[];
  };
};

export const getProducts = async ({
  page,
  pageSize = 10,
  search = "",
}: ProductQuery): Promise<PaginatedData<Product>> => {
  const res =
    await api.get<ListApiResponse<Product>>(
      "/products",
      {
        params: {
          page,
          pageSize,
          name: search,
        },
      }
    );
console.log(res.data);
  return normalizeListResponse(
    res.data
  );
};

export const getProductById =
  async (
    id: string
  ): Promise<Product> => {
    const res =
      await api.get<ApiDataResponse<Product>>(
        `/products/${id}`
      );

    return res.data.data;
  };

export const createProduct =
  async (
    payload: CreateProductPayload
  ) => {
    await api.post(
      "/products",
      payload
    );
  };

export const updateProduct =
  async (
    id: string,
    payload: UpdateProductPayload
  ) => {
    await api.patch(
      `/products/${id}`,
      payload
    );
  };

export const deleteProduct =
  async (
    id: string
  ) => {
    await api.delete(
      `/products/${id}`
    );
  };

export const uploadProductImage =
  async (
    file: Blob | string
  ): Promise<string> => {
    const formData =
      new FormData();

    formData.append(
      "images",
      file
    );

    const res =
      await api.post<UploadProductImageResponse>(
        "/uploads/product-images",
        formData
      );

    const uploadedUrl =
      res.data.urls?.[0] ??
      res.data.data?.urls?.[0];

    if (!uploadedUrl) {
      throw new Error(
        "Upload response missing url"
      );
    }

    return uploadedUrl;
  };
