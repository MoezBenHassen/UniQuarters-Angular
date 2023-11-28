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
  data = [
    { id: 1, name: 'Item 1', otherProperty: 'Value 1' },
    { id: 2, name: 'Item 2', otherProperty: 'Value 2' },
    { id: 3, name: 'Item 3', otherProperty: 'Value 3' },
  ];


  constructor(
    public chambreService: ChambreService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }



  ngOnInit(): void {
  }
  Add(){
    this.chambreService.AddOrEditChambreForm.reset()
     this.dialogService.open(ChambreFormComponent, {
          header:"Ajouter une nouvelle chambre"
      })
  
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
        message: 'Êtes-vous sûr de vouloir effectuer cette action ?',
        acceptLabel: 'Supprimer',
        rejectLabel: 'Annuler',
        accept: () => {
          const index = this.data.findIndex(item => item.id === data.id);
          if (index !== -1) {
            this.data.splice(index, 1);
          }

        }
    });


}
  populateForm(d: any) {
    this.chambreService.AddOrEditChambreForm.reset({
      id: d.id,
      name: d.name,
      otherProperty: d.otherProperty,

    });
  }
}


