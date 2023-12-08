import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-utilisateur-form',
  templateUrl: './utilisateur-form.component.html',
  styleUrls: ['./utilisateur-form.component.scss']
})
export class UtilisateurFormComponent implements OnInit{

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private dialogConfig: DynamicDialogConfig,
    private dialogService: DynamicDialogRef
  ) { }

  ngOnInit(): void {
    this.id = this.dialogConfig.data.id;
    this.userService.getUser(this.id).subscribe( response => {
      this.userToSubmit = response.body.data.user;
      this.oldEmail = response.body.data.user.email;
    })
  }

  userToSubmit = {} as User;
  oldEmail!: string;
  id!: number;
  mailExists = false;

  submit(f: NgForm) {
    // Add user
    if (this.id === undefined) {
      this.authService.emailExists(this.userToSubmit.email).subscribe(response => {
        if (response) {
          this.mailExists = true;
        } else {
          this.mailExists = false;
          this.userToSubmit.role = Role.Admin;
          this.userService.addUser(this.userToSubmit).subscribe();
          this.dialogService.close();
        }
      });
    }
    // Update user 
    else {
      this.authService.emailExists(this.userToSubmit.email).subscribe(response => {
        if (response && response != this.oldEmail) {
          this.mailExists = true;
        } else {
          this.mailExists = false;
          this.userService.updateUser(this.userToSubmit).subscribe();
          this.dialogService.close();
        }
      });
    }
  }
}
