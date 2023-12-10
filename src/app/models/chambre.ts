import { Bloc } from "./Bloc";
import { Reservation } from "./reservation";
import { TypeChambre } from "./typeChambre";


export interface Chambre {
  id: number
  chambreNumber: number
  // numero: number; // resa merge possibiliy
  capacity: number
  // capacite: number; // resa merge possibiliy
  description: string
  type: string
  bloc: Bloc;
  available:boolean
  // reservations: Reservation[];
}
