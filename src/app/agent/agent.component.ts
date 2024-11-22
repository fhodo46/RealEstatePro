import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';


@Component({
  selector: 'agentcomponent',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  
  templateUrl: './agent.component.html',
  
  styleUrl: './agent.component.css'})

  export class AgentComponent {}