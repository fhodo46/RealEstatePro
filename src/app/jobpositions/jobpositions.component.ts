import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-jobpositions',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './jobpositions.component.html',  
  
  styleUrl: './jobpositions.component.css'})

export class JobPositionsComponent {}