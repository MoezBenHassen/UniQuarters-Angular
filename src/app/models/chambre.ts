enum ChambreType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  TRIPLE = 'TRIPLE',
}
export interface Chambre {
  id: number;
  numero: number;
  capacite: number;
  type: String;
  bloc: any;
}
