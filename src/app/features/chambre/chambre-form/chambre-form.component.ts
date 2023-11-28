import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ChambreService } from 'src/app/services/chambre.service';

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
    private readonly dialogService: DynamicDialogRef,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder,

  ) { }
  ngOnInit(): void {
  }

  AddChambre() {
    this.submitted = true;
  
    if (this.chambreService.AddOrEditChambreForm.valid) {
      this.loading = true;

  
  
      this.messageService.add({
        severity: 'success',
        summary: 'Yessss',
        detail: 'Successfully Added ',
        life: 5000,
      });
      this.dialogService.close();
      this.chambreService.AddOrEditChambreForm.reset();
      this.submitted = false;
      this.loading = false;
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Form is not valid. Please fill in all required fields.',
        life: 5000,
      });
    }
  }
  
  UpdateChambre() {
    this.submitted = true;
  
    if (this.chambreService.AddOrEditChambreForm.valid) {
      this.loading = true;
      const chambre = this.chambreService.AddOrEditChambreForm.value as any as {
        id: number;
        name: string;
        otherProperty: string;
      };
  
  
      if (true) {
      
  
        this.messageService.add({
          severity: 'success',
          summary: 'Yessss',
          detail: 'Successfully Updated ',
          life: 5000,
        });
        this.dialogService.close();
        this.chambreService.AddOrEditChambreForm.reset();
        this.submitted = false;
        this.loading = false;
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Chambre not found for update.',
          life: 5000,
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Form is not valid. Please fill in all required fields.',
        life: 5000,
      });
    }
  }
  

}
