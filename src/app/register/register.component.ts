import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formRegister: FormGroup = new FormGroup({});

  constructor() {
    this.formRegister = this.createFormGroup();
  }

  createFormGroup(): FormGroup {
    return new FormGroup({
      username: new FormControl("", [ Validators.required, Validators.min(2) ]),
      password: new FormControl("", [ Validators.required, Validators.min(2) ])
    })
  }

  onSubmit(): void {
    console.log(this.formRegister.value);
  }
}
