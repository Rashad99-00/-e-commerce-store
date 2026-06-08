import type { ListApiResponse, PaginatedData,} from "../types/api";

export const normalizeListResponse = <
  T
>(
  response: ListApiResponse<T>
): PaginatedData<T> => {
  return {
    data: response.data,
    totalCount:
      response.totalCount,
  };
};