import { Component } from '@angular/core';
import { BlocService } from 'src/app/services/bloc.service';
import {ActivatedRoute, Router} from "@angular/router";
import {DialogService, DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {ConfirmationService, MessageService} from "primeng/api";
import {Bloc} from "../../../models/Bloc";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-bloc-form',
  templateUrl: './bloc-form.component.html',
  styleUrls: ['./bloc-form.component.scss']
})
export class BlocFormComponent {
  id: number = 0;

  constructor(
      private blocService: BlocService,
      private router: Router,
      private activatedRoute: ActivatedRoute,
      private readonly dialogService: DynamicDialogRef,
      private config: DynamicDialogConfig,
      public messageService: MessageService,
      private confirmationService: ConfirmationService,
  ) { }

  ngOnInit(): void {
    this.id = this.config.data?.id;
    console.log("ID onInit f lvl ::: "+this.id);
    if (this.id != undefined) {
      this.blocService.fetchBlocById(this.id).subscribe({
        next: (data: any) => { this.bl = data.data.bloc; },
      });
    }
  }
  bl: Bloc = new Bloc();
  add(f: NgForm){
    console.log("form value  :::: "+f.value);
    // if the id is EXIST  then we are adding a new bloc ELSE we ADD the BLOC
    if (this.id !== undefined) {
      this.blocService.updateBloc(this.id, this.bl).subscribe((data)=>{
        this.blocService.getAllBlocs().subscribe(
            (response: any) => {
              this.blocService.data = response.data.blocs;
              console.log("UPDATE BLOC DONE " + response.data.getRawValue())
            },
            (error) => {
              console.error('Error fetching data f lvl:', error);
            }
        );
        this.dialogService.close();
        f.reset()
      });
    }else{
      //adding bloc to the database
      console.log(this.bl.nom)
      this.blocService.addBloc(this.bl).subscribe((data)=>{
        console.log("BLOC DATA TO BE ADDED form comp level " + JSON.stringify(data, null, 2));
        // message to be displayed after adding bloc
        this.messageService.add({
          severity: 'success',
          summary: 'Done',
          detail: 'Successfully Updated ',
          life: 5000,
        });
        // auto updating the bloc list
        this.blocService.getAllBlocs().subscribe(
            (response: any) => {
              this.blocService.data = response.data.blocs;
              console.log("ADD BLOC DONE f lvl:", JSON.stringify(this.blocService.data, null, 2));
            },
            (error) => {
              console.error('Error fetching data f lvl:', error);
            }
        );
      });
      this.dialogService.close();
      f.reset();
    }
  }
}
