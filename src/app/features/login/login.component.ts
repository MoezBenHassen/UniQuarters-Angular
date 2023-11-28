import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsgs = [];

  constructor(
    private formBuilder: FormBuilder,
  ) {

  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", Validators.required],
        password: ["", Validators.required],
      },
      { updateOn: "submit" }
    );
  }

  login(){
    
  }

}
