export interface IAuto {
  id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean | undefined,
  buyValue: number 
}

export interface ISpecific {
  doorsQty: number,
  seatsQty: number,
}