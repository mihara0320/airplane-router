export interface IGenericRepository<T> {
  getAll(): T[];
  get(iata: string): T;
}
