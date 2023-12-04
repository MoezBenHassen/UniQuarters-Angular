import { Component } from '@angular/core';
import { AbstractControlOptions, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { passwordMatchValidator } from '../shared/validators/passwordMatch.validator';
import { Etudiant } from 'src/app/models/etudiant';
import { Role } from 'src/app/models/role';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  today: Date = new Date();

  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    confirmPassword: ['', [Validators.required]],
    nom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    prenom: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    cin: [undefined, [Validators.required, Validators.maxLength(8), Validators.minLength(8)]],
    ecole: ['', [Validators.required]],
    dateNaissance: ['', [Validators.required]]
  },
    { Validators: [passwordMatchValidator] } as AbstractControlOptions
  )

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) { }

  submit() {
    const user = { email: this.registerForm.value.email, password: this.registerForm.value.password, role:Role.Etudiant };
    const etudiant = { 
      nom: this.registerForm.value.nom, 
      prenom: this.registerForm.value.prenom, 
      cin: this.registerForm.value.cin, 
      ecole: this.registerForm.value.ecole, 
      dateNaissance: this.registerForm.value.dateNaissance,
      user: user
    };

    this.authService.register(etudiant as Etudiant).subscribe({
      next: (response) => {
        console.log(response);
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Inscription avec succées!' });
        setTimeout(()=>{ this.router.navigate(['login'])},2000);
      },
      error: (e) => {
        console.log(e);
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Une erreur est survenu' });
      }}
    );
  }

}
