import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})
export class RegistrationFormComponent {

  registrationForm: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required, Validators.minLength(4)],
      email: ['', [Validators.required, Validators.email]]
    })
  }

  onSubmit(){
    if(this.registrationForm.valid) {
      console.log(`Registration form values: ${this.registrationForm.value}`)
    }
  }

}
