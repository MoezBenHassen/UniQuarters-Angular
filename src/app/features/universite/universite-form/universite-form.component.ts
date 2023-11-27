import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-form',
  templateUrl: './universite-form.component.html',
  styleUrls: ['./universite-form.component.scss']
})
export class UniversiteFormComponent implements OnInit {
  id:number=0;
  constructor(private uniService:UniversiteService,private router:Router, private ac:ActivatedRoute,private readonly dialogService: DynamicDialogRef, private config: DynamicDialogConfig,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,){}
  ngOnInit(): void {
    this.id = this.config.data?.id; 
    console.log(this.id);
        if(this.id!=undefined){
      this.uniService.fetchUserById(this.id).subscribe({
        next: (data:any) => {this.uni = data.data.university;}
        ,
      });
    }

  }

  uni: Universite = new Universite();
  add(f: NgForm) {
    if (this.id!==undefined){
      this.uniService.updateUniversity(this.id,this.uni).subscribe({
        next: () =>  this.dialogService.close()
      });
      

    } else {
    
      this.uniService.addUniversity(this.uni).subscribe({
       
      });
      this.messageService.add({
        severity: 'success',
        summary: 'Yessss',
        detail: 'Successfully Updated ',
        life: 5000,
      });
      this.dialogService.close();
      f.reset();
     
     
    }
   
   
  }

}
