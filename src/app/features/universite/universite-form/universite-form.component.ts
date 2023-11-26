import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { Universite } from 'src/app/models/universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-form',
  templateUrl: './universite-form.component.html',
  styleUrls: ['./universite-form.component.scss']
})
export class UniversiteFormComponent {
  id:number=0;
  constructor(private uniService:UniversiteService,private router:Router, private ac:ActivatedRoute,private readonly dialogService: DynamicDialogRef,
    public messageService: MessageService,
    private confirmationService: ConfirmationService,){}
  ngOnInit(): void {
  this.id=this.ac.snapshot.params['id'];

  this.uniService.fetchUserById(this.id).subscribe({
    next: (data:any) => (this.uni = data.university),
  });
  }

  uni: Universite = new Universite();
  add(f: NgForm) {
    if (this.id!==undefined){
      this.uniService.updateUniversity(this.uni).subscribe({
        next: () => this.router.navigate(['universite']),
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
