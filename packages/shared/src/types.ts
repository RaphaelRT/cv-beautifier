export type BrandedId<T extends string> = string & { __brand: T };

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
