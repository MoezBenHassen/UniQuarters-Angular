import { Component, ViewChild, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { ChambreService } from 'src/app/services/chambre.service';
import { ChambreFormComponent } from '../chambre-form/chambre-form.component';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-chambre',
  templateUrl: './list-chambre.component.html',
  styleUrls: ['./list-chambre.component.scss']
})
export class ListChambreComponent implements OnInit {
  @ViewChild('dt') table!: Table;

  constructor(
    public chambreService: ChambreService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.loadChambres();
  }

  loadChambres() {
    this.chambreService.retrieveChambres().subscribe(
      (response:any) => {
        console.log(response.body.data.chambres)

        this.chambreService.chambres = response.body.data.chambres;
      },
      (error) => {
        console.error('Error loading chambres:', error);
      }
    );
  }

  Add() {
    this.chambreService.AddOrEditChambreForm.reset();
    this.dialogService.open(ChambreFormComponent, {
      header: "Ajouter une nouvelle chambre"
    });
  }

  Edit(data: any) {
    this.populateForm(data);
    this.dialogService.open(ChambreFormComponent, {
      data: { data },
      header: "Modifier les informations de la chambre"
    });
  }

  Delete(data: any) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir supprimer cette chambre ?',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.chambreService.deleteChambre(data.id).subscribe(
          (response) => {
            this.loadChambres();

            this.messageService.add({ severity: 'success', summary: 'Succès', detail: 'Chambre supprimée avec succès' });
          },
          (error) => {
            console.error('Error deleting chambre:', error);
            this.messageService.add({ severity: 'error', summary: 'Erreur', detail: 'Erreur lors de la suppression de la chambre' });
          }
        );
      }
    });
  }

  populateForm(d: any) {
    this.chambreService.AddOrEditChambreForm.reset({
      id: d.id,
      numero: d.numero,
      capacity: d.capacity,
      description: d.description,
      type: d.type,
    });
  }
  
}