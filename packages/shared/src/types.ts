export type BrandedId<T extends string> = string & { __brand: T };

export interface PaginatedResult<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface User {
  id: BrandedId<"user">;
  name: string | null;
  email: string | null;
  emailVerified: Date | null;
  image: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: BrandedId<"task">;
  userId: BrandedId<"user">;
  title: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
