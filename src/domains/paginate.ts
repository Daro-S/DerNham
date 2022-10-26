export interface IBaseParams {
  page?: number;
  limit?: number;
}

export interface IPaginate<T> {
  data: T[];
  page: number;
  nextPage: number | null;
}
