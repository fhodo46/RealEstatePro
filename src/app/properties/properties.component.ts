import { Component } from '@angular/core';
import { PropertyComponent } from '../property/property.component';
import { RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoginComponent } from '../login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-properties',
  standalone: true,
  
  
  imports: [PropertyComponent, RouterModule, CommonModule, MatIcon, MatToolbarModule, MatFormFieldModule,MatMenuModule,MatSidenavModule, MatListModule, MatButtonModule],
  
  templateUrl: './properties.component.html',
  
  styleUrl: './properties.component.css'})
export class PropertiesComponent { }