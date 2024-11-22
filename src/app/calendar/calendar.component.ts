import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [RouterModule, NgIf, CommonModule, MatIcon, MatToolbarModule, LoginComponent, MatFormFieldModule,MatMenuModule,MatSidenavModule, MatListModule, MatButtonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {}