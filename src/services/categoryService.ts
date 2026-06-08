import api from "./api";
import type {PaginatedData,} from "../types/api";
import type { Category, CategoryOption, CategoryPayload,} from "../types/category";

type CategoryQuery = {
  page: number;
  pageSize?: number;
  search?: string;
};

export const getCategories = async ({
  page,
  pageSize = 10,
  search = "",
}: CategoryQuery): Promise<PaginatedData<Category>> => {

  const res =
    await api.get(
      "/categories",
      {
        params: {
          page,
          pageSize,
          name: search,
        },
      }
    );

  console.log(res.data);

  return {
    data:
      res.data.data.data,

    totalCount:
      res.data.data.totalCount,
  };
};

export const getCategoryOptions =
  async (): Promise<CategoryOption[]> => {

    const categories =
      await getCategories({
        page: 1,
        pageSize: 100,
      });

    return categories.data.map(
      (category: Category) => ({
        id: category.id,
        name: category.name,
      })
    );
  };

export const getCategoryById =
  async (
    id: string
  ): Promise<Category> => {

    const res =
      await api.get(
        `/categories/${id}`
      );

    return res.data.data;
  };

export const createCategory =
  async (
    payload: CategoryPayload
  ) => {

    await api.post(
      "/categories",
      payload
    );
  };

export const updateCategory =
  async (
    id: string,
    payload: CategoryPayload
  ) => {

    await api.patch(
      `/categories/${id}`,
      payload
    );
  };

export const deleteCategory =
  async (
    id: string
  ) => {

    await api.delete(
      `/categories/${id}`
    );
  };