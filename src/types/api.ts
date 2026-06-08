export type ApiDataResponse<T> = {
  data: T;
};

export type ListApiResponse<T> = {
  data: T[];
  totalCount: number;
};

export type PaginatedData<T> = {
  data: T[];
  totalCount: number;
};