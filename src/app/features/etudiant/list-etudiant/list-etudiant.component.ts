import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription } from 'rxjs';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit{
  etudiantsList : Etudiant[] = [];

  subscription: Subscription = new Subscription;

  constructor(
    private etudiantService: EtudiantService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) { }
  ngOnInit(): void {
    this.getData();
    this.subscription = this.etudiantService.refresh$.subscribe( () => this.getData())
  }

  getData(){
    this.etudiantService.getEtudiants().subscribe( 
      response => this.etudiantsList = response.body.data.etudiants
      );
  }
  Add() { this.dialogService.open(UtilisateurFormComponent, {header:"Ajouter un administrateur"}) }
  Edit(id: number) { this.dialogService.open(UtilisateurFormComponent, {header:"Modifier les informations d'uilisateur", data: {id}}) }
  Delete(id: number) { 
    this.confirmationService.confirm({
      message:"Êtes-vous sûr de vouloir effectuer cette action ?",
      acceptLabel:'Supprimer',
      rejectLabel:'Annuler',
      accept: () => {
        this.etudiantService.deleteetudiant(id).subscribe()
      }
    })
   }

}