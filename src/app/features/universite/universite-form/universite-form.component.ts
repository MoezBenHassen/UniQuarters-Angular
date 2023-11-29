
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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

  id: number = 0;
  fbUni: FormGroup = new FormGroup({});
  gouvernorats: string[] = this.uniService.getGouvernorats();
  constructor(private uniService: UniversiteService,
    private fb: FormBuilder,
    private readonly dialogService: DynamicDialogRef,
    private config: DynamicDialogConfig,
    public messageService: MessageService,) { }



  ngOnInit(): void {
    this.id = this.config.data?.id;
    console.log(this.id);
    if (this.id != undefined) {
      this.uniService.fetchUniById(this.id).subscribe({

        next: (data: any) => this.onUniExist(data.data.university)

      });

    }
    this.fbUni = this.fb.group({
      nom: ['', [Validators.required,Validators.minLength(3)]],
      adresse: ['', [Validators.required]],
      foyer: this.fb.group({
        nom: ['',[Validators.required,Validators.minLength(3)]],
        capacite: ['',[Validators.required]],
      }),
    })
  }


  uni: Universite = new Universite();

  add() {

    if (this.id !== undefined) {
      this.uniService.updateUniversity(this.id, this.fbUni.getRawValue()).subscribe((data) => {
        this.uniService.getAllUniversites().subscribe(
          (response: any) => {
            this.uniService.data = response.data.universities;
          },
          (error) => {
            console.error('Error fetching data:', error);
          }


        );
        this.messageService.add({
          severity: 'success',
          summary: 'Yessss',
          detail: 'Successfully Updated ',
          life: 5000,
        });
        this.dialogService.close();
        this.fbUni.reset();
      });


    }
    else {
      this.uniService.addUniversity(this.fbUni.getRawValue()).subscribe((data) => {
        console.log(this.fbUni.getRawValue())
        this.messageService.add({
          severity: 'success',
          summary: 'Yessss',
          detail: 'Successfully Added ',
          life: 5000,
        });

        this.uniService.getAllUniversites().subscribe(
          (response: any) => {
            this.uniService.data = response.data.universities;
            console.log(this.uniService.data)
          },
          (error) => {
            console.error('Error fetching data:', error);
          }
        );

      });
      this.dialogService.close();
      this.fbUni.reset();
    }

  }
  onUniExist(uni: Universite) {
    this.fbUni.patchValue({
      nom: uni.nom,
      adresse: uni.adresse,


    });
    this.fbUni.get('foyer')?.patchValue({
      nom: uni.foyer.nom,
      capacite: uni.foyer.capacite
    })
  }
  get foyerNom() {
    return this.fbUni.get('foyer.nom')!.value
  }
  get capacite() {
    return this.fbUni.get('foyer.capacite')!.value
  }
  get foyerCapacite() {
    return this.fbUni.get('foyer.capacite')!.value
  }
  get nom() {
    return this.fbUni.get('nom');
  }
  get adresse() {
    return this.fbUni.get('adresse');
  }
 


}
