import type { CategoryOption,} from "./category";

export type ProductImage = {
  id?: string;
  url: string;
  isMain?: boolean;
  sortOrder?: number;
  productId?: string;
  createdAt?: string;
  updatedAt?: string;
};

export type Product = {
  id: string;
  name: string;
  description: string | null;
  price: string | number;
  stock: number;
  sku: string;
  imageUrl: string | null;
  images?: ProductImage[];
  isActive: boolean;
  createdAt: string;
  category: CategoryOption;
};

export type ProductImagePayload = {
  url: string;
  sortOrder: number;
  isMain: boolean;
};

export type CreateProductPayload = {
  name: string;
  price: number;
  stock: number;
  sku: string;
  imageUrl?: string;
  images?: ProductImagePayload[];
  isActive: boolean;
  categoryId: string;
};

export type UpdateProductPayload = {
  name: string;
  price: number;
  stock: number;
  sku?: string;
  imageUrl?: string;
  isActive: boolean;
  categoryId: string;
};
