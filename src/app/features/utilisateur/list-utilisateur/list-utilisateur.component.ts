import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { UtilisateurFormComponent } from '../utilisateur-form/utilisateur-form.component';
import { Role } from 'src/app/models/role';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.scss']
})
export class ListUtilisateurComponent implements OnInit {

  usersList : User[] = [];

  subscription: Subscription = new Subscription;

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private dialogService: DialogService
  ) { }
  ngOnInit(): void {
    this.getData();
    this.subscription = this.userService.refresh$.subscribe( () => this.getData())
  }

  getData(){
    this.userService.getUsersByRole(Role.Admin).subscribe( 
      response => this.usersList = response.body.data.users
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
        this.userService.deleteUser(id).subscribe()
      }
    })
   }

}
