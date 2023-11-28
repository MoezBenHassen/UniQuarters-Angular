import { User } from "./user";

export class Etudiant {
    id!:number;
    nom!:string;
    prenom!:string;
    cin!:number;
    ecole!:string;
    dateNaissance!:Date;
    user!:User
}
