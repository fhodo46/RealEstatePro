import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { CommonModule, NgIf } from '@angular/common';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HomeComponent } from './home/home.component'; import { MatMenuModule } from '@angular/material/menu';
import { AuthenticationService } from './authentication.service';
import { Observable, tap } from 'rxjs';
import { SignupComponent } from './signup/signup.component';

@Component({
  
  selector: 'app-root',
  standalone: true,
  
  imports: [CommonModule, RouterOutlet, LoginComponent, HomeComponent, RouterLink,NgIf, MatButtonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterModule, MatMenuModule, SignupComponent],
  
  
  templateUrl: './app.component.html', styleUrl: './app.component.css'})

export class AppComponent
{


  constructor(public authService: AuthenticationService, private router: Router){}

  logout(){
          this.authService.logout().subscribe(()=>{

            this.router.navigate(['']);
          });
  
        }
}