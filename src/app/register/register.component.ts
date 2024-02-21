import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegister: FormGroup = new FormGroup({});

  constructor(private http: HttpClient) {
    this.formRegister = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [ Validators.required, Validators.minLength(2) ]),
      password: new FormControl("", [ Validators.required, Validators.minLength(2) ])
    })
  }

  onSubmit(): void {
    // console.log(this.formRegister.value);
    this.http.post(
      "http://localhost:3000/employees",
      this.formRegister.value
    ).subscribe({
      next: (response) => console.log(response),
      error: (response) => console.error(response),
      complete: () => console.log("Done getting data")
    });
  }
}
