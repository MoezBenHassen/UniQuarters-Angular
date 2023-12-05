import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/loginUser';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsgs: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.authService.logout().subscribe();
    this.loginForm = this.formBuilder.group(
      {
        email: ["", Validators.required],
        password: ["", Validators.required],
      },
      { updateOn: "submit" }
    );
  }

  login() {
    this.errorMsgs = [];
    if (this.loginForm.invalid) {
      this.showValidationMsgs();
    } else {
      let loginUser: LoginUser;
      loginUser = { ...this.loginForm.value };
      this.authService.login(loginUser).subscribe({
        next: (response) => {
          this.tokenService.setAccessToken(response.access_token);
          this.tokenService.setRefreshToken(response.refresh_token);
          // this.authService.savePermissions(response.role);
          // this.permissionsService.loadPermissions(
          //   this.authService.getPermissions()
          // );
          this.router.navigate(["/gestion/chambre"]);
        },
        error: (error) => {
          this.errorMsgs.push({
            severity: "error",
            detail: "Email ou mot de passe incorrecte",
          });
        }
      }
      );
    }
  }

  showValidationMsgs() {
    if (this.loginForm.controls['email'].hasError("required")) {
      this.errorMsgs.push({
        severity: "error",
        detail: "Veuillez saisir votre identifiant.",
      });
    }
    if (this.loginForm.controls['password'].hasError("required")) {
      this.errorMsgs.push({
        severity: "error",
        detail: "Veuillez saisir votre mot de passe.",
      });
    }
  }
}