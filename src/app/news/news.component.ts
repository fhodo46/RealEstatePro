import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  
  templateUrl: './news.component.html', styleUrl: './news.component.css'})

export class NewsComponent {}