import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from "./../auth.service";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ AuthService ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  formLogin : FormGroup = new FormGroup({});
  user$!: Observable<any>;
  loginStatus$!:Observable<boolean>;

  constructor(private router: Router, private auth: AuthService, private http: HttpClient) { 
    this.formLogin = this.createFormGroup();
  };

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [ Validators.required, Validators.minLength(2) ]),
      password: new FormControl("", [ Validators.required, Validators.minLength(2) ])
    })
  }

  onSubmit(): void {
    let currentUser = this.formLogin.value.username;
    let currentPassword = this.formLogin.value.password;
    this.user$ = this.http.get(
      "http://localhost:3000/employees",
      {
        params: { /*TODO*/ }
      }
    );

    this.loginStatus$ = this.auth.login(this.formLogin.value);
    this.loginStatus$.subscribe(
      status => {
        if(!status){
          this.router.navigateByUrl('/login');
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    );
  }
};
