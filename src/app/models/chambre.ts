import { Bloc } from "./Bloc";

export interface Chambre {
  id: number
  numero: number
  capacity: number
  description: string
  type: string
  bloc: Bloc;
  available:boolean
  // reservations: Reservation[];
}

