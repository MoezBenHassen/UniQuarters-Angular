import { Bloc } from "./Bloc";
import { Reservation } from "./reservation";
import { TypeChambre } from "./typeChambre";


export interface Chambre {
  id: number
  chambreNumber: number
  capacity: number
  description: string
  type: string
  // bloc: Bloc;
  available:boolean
  // reservations: Reservation[];
}
