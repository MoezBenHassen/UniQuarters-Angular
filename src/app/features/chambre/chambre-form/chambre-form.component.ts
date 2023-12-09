import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { ChambreService } from 'src/app/services/chambre.service';
import { Chambre } from 'src/app/models/chambre';

@Component({
  selector: 'app-chambre-form',
  templateUrl: './chambre-form.component.html',
  styleUrls: ['./chambre-form.component.scss']
})
export class ChambreFormComponent implements OnInit {
  loading: boolean = false;
  submitted = false;

  constructor(
    public chambreService: ChambreService,
    private readonly ref: DynamicDialogRef,
    public messageService: MessageService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
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

  AddChambre() {
    this.submitted = true;

    if (this.chambreService.AddOrEditChambreForm.valid) {
      this.loading = true;

      this.chambreService.addChambre(this.chambreService.AddOrEditChambreForm.value as Chambre).subscribe(
        (response) => {
          this.loadChambres();

          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Chambre ajoutée avec succès',
            life: 5000,
          });
          this.ref.close();
          this.chambreService.AddOrEditChambreForm.reset();
          this.submitted = false;
          this.loading = false;
        },
        (error) => {
          console.error('Error adding chambre:', error);
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Erreur lors de l\'ajout de la chambre',
            life: 5000,
          });
          this.loading = false;
        }
      );
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Le formulaire n\'est pas valide. Veuillez remplir tous les champs requis.',
        life: 5000,
      });
    }
  }

  UpdateChambre() {
    this.submitted = true;

    if (this.chambreService.AddOrEditChambreForm.valid ) {
      this.loading = true;

      const updatedChambre = this.chambreService.AddOrEditChambreForm.value;
      if (updatedChambre.id !== undefined && updatedChambre.id !== null) {
        this.chambreService.updateChambre(updatedChambre.id, updatedChambre as Chambre).subscribe(
          (response) => {
            this.loadChambres();

            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'Chambre mise à jour avec succès',
              life: 5000,
            });
            this.ref.close();
            this.chambreService.AddOrEditChambreForm.reset();
            this.submitted = false;
            this.loading = false;
          },
          (error) => {
            console.error('Error updating chambre:', error);
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'Erreur lors de la mise à jour de la chambre',
              life: 5000,
            });
            this.loading = false;
          }
        );
      }

    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Le formulaire n\'est pas valide. Veuillez remplir tous les champs requis.',
        life: 5000,
      });
    }
  }

  populateForm(d: any) {
    this.chambreService.AddOrEditChambreForm.reset({
      id: d.id,
      chambreNumber: d.chambreNumber,
      capacity: d.capacity,
      description: d.description,
      type: d.type,
    });
  }
}
