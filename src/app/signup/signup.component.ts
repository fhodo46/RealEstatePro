import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';      
import { AuthenticationService } from '../authentication.service';
import { HotToastService } from '@ngneat/hot-toast';
import { switchMap } from 'rxjs';
import { HeaderComponent } from '../header/header.component';



export function passwordsMatchValidator(): ValidatorFn{    
  return (control: AbstractControl): ValidationErrors | null => {
    const password= control.get('password')?.value;
    const confirmPassword= control.get('confirmPassword')?.value;
     if(password && confirmPassword && password !== confirmPassword){

               return{ passwordsDontMatch: true,}
          }
        return null;
      }; 
}
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, NgIf, MatButtonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule,RouterLinkActive, RouterLink, HeaderComponent],
  
  templateUrl: './signup.component.html',
  
  
  styleUrl: './signup.component.css'})

  
export class SignupComponent {
signupform= new FormGroup({

    name: new FormControl('', Validators.required), 
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)},  {validators: passwordsMatchValidator()} )
    constructor(private authService: AuthenticationService, private toast: HotToastService, private router: Router){}  
    ngOnInit(): void{}

    
    get name(){ return this.signupform.get('name');}
    get email(){ return this.signupform.get('email');}
    get password(){ return this.signupform.get('password');}
    
    
    
    
    
    
    get confirmPassword(){ return this.signupform.get('confirmPassword');}
  
  
    submit() {
      if(!this.signupform.valid) return;
      const {name, email, password} = this.signupform.value;
        this.authService.signUp(name, email, password).pipe(
          this.toast.observe({
             success: 'Congrats! You are signed up',
             loading: 'Going to the login page', error: ({message}) => `${message}`
          })
        ).subscribe(()=>{

          this.router.navigate(['']);
        })
    }}