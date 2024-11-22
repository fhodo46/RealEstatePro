import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { CommonModule, NgIf } from '@angular/common';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router'; import { MatIcon } from '@angular/material/icon';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { CalendarComponent } from '../calendar/calendar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  
  
  imports: [RouterModule, NgIf, CommonModule, MatIcon, MatToolbarModule, LoginComponent, MatFormFieldModule,MatMenuModule,MatSidenavModule, MatListModule, MatButtonModule, CalendarComponent],
  
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  user$: Observable<any>
  
  constructor(private authService: AuthenticationService, private router: Router){}  

ngOnInit(): void{
  this.user$= this.authService.getauthstate().pipe(tap());
} 


logout(){
  this.authService.logout().subscribe(()=>{

    this.router.navigate(['']);
  });

}

}