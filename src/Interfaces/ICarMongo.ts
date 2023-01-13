export default interface ICarMongo {
  _id?: string,
  model: string,
  year: number,
  color: string,
  status?: boolean | undefined,
  buyValue: number 
  doorsQty: number,
  seatsQty: number,
}
