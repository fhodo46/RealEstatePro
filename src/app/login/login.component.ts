import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms'; 

import { CommonModule, NgIf } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router'; import { HotToastService } from '@ngneat/hot-toast';
import { SignupComponent } from '../signup/signup.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgIf, MatButtonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule, RouterLink,RouterLinkActive, HeaderComponent],
  
  templateUrl: './login.component.html', styleUrl: './login.component.css'})

export class LoginComponent implements OnInit 
{
  ngOnInit(): void {
    
  }
  
  
  loginform=new FormGroup({ email: new FormControl('',[Validators.required, Validators.email]), 
  
  password: new FormControl('', Validators.required),});
constructor(private authService: AuthenticationService, private router: Router, private toast: HotToastService){}

get email(){return this.loginform.get('email');}  get password(){return this.loginform.get('password');} 



submit(){    
  if(!this.loginform.valid) return;
   const {email,password}=  this.loginform.value;  



  
  
  
  
  
  
  
   this.authService.login(email, password).pipe(
    this.toast.observe({ 
     success: 'Logged in successfully',
     loading: 'Logging in...',
     error: 'There was an error'
   })).subscribe(() => this.router.navigate(['/home']));} }