import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  router = inject(Router);

  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required],
    }),
    pws: new FormControl('',{
      validators: [Validators.required],
    })
  });
  
  onSubmit(){
    this.router.navigate(['hello'])
  }
}
