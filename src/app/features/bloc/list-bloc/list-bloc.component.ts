import {Component, ViewChild} from '@angular/core';
import {Table} from "primeng/table";
import {BlocService} from "../../../services/bloc.service";
import {DialogService} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {BlocFormComponent} from "../bloc-form/bloc-form.component";

@Component({
  selector: 'app-list-bloc',
  templateUrl: './list-bloc.component.html',
  styleUrls: ['./list-bloc.component.scss']
})
export class ListBlocComponent {
  @ViewChild('dt') table!: Table;
  nomBloc: string = "";
  constructor(
    public blocService: BlocService,
    private readonly dialogService: DialogService,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.blocService.getAllBlocs().subscribe(
      (response: any) => {
        this.blocService.data = response.data.blocs;
        console.log("BLOCS :::: " + this.blocService.getData())
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    )
  }

  Add(){
    this.dialogService.open(BlocFormComponent, {
      header:"Ajouter un nouveau bloc"
    })
  }

  Edit(id:number) {
    this.dialogService.open(BlocFormComponent, {
      data: { id },
      header: "Modifier les informations du bloc"
    });
  }

  Delete(id:number) {
    this.confirmationService.confirm({
      message: 'Êtes-vous sûr de vouloir effectuer cette action ?',
      acceptLabel: 'Supprimer',
      rejectLabel: 'Annuler',
      accept: () => {
        this.blocService.deleteBloc(id).subscribe((data)=>{
          this.blocService.getAllBlocs().subscribe(
            (response: any) => {
              this.blocService.data = response.data.blocs;
              console.log("DELETE BLOC DONE " + response.data.getRawValue())
            },
            (error) => {
              console.error('Error fetching data:', error);
            }
          );
          this.messageService.add({
            severity: 'success',
            summary: 'Done',
            detail: 'Bloc Deleted Successfully',
            life: 5000,
          });
        });
      }
    });
  }
}
