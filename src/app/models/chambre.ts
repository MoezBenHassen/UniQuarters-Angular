enum ChambreType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  TRIPLE = 'TRIPLE',
}
export interface Chambre {
  id: number;
  numero: string;
  capacite: number;
  type: ChambreType;
}
