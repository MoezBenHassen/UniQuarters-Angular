interface Etudiant {
  id: number;
  nom: string;
  prenom: string;
  cin: number;
  ecole: string;
  dateNaissance: string;
}
export interface Reservation {
  id: string;
  anneeUniversitaire: string;
  estValide: boolean;
  etudiants: Etudiant[];
}
