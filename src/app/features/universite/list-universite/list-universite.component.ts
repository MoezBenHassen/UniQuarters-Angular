import { Component,ViewChild,OnInit, OnChanges, SimpleChanges  } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';
import { Universite } from 'src/app/models/universite';
import { ChambreService } from 'src/app/services/chambre.service';
import { UniversiteService } from 'src/app/services/universite.service';
import { UniversiteFormComponent } from '../universite-form/universite-form.component';

@Component({
  selector: 'app-list-universite',
  templateUrl: './list-universite.component.html',
  styleUrls: ['./list-universite.component.scss']
})
export class ListUniversiteComponent   implements OnInit {
 
   

  @ViewChild('dt') table!: Table;
  


  constructor(
    public uniService: UniversiteService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  data : Universite[]=[];
  
  ngOnInit(): void {
    this.uniService.getAllUniversites().subscribe(
      (response: any) => {
        this.data = response.data.universities;
        console.log(this.data)
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
   
  }
  Add(){
    this.dialogService.open(UniversiteFormComponent, {
      header:"Ajouter une nouvelle université"
  })
  }
  Edit(id:number) {
   
    this.dialogService.open(UniversiteFormComponent, {
      data: { id },
      header: "Modifier les informations de la chambre"
    });
  }
  Delete(id:number) {
    this.confirmationService.confirm({
        message: 'Êtes-vous sûr de vouloir effectuer cette action ?',
        acceptLabel: 'Supprimer',
        rejectLabel: 'Annuler',
        accept: () => {
          this.uniService.deleteUniversity(id).subscribe(
            () => {
                
                console.log('University deleted successfully.');
               
            },
            (error) => {
                
                console.error('Error deleting university:', error);
            }
        );
        }
    });


}
  
//  verifId(id:number){
//   console.log(id);
//  }

 
}
