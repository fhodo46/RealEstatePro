import { Component } from '@angular/core'; import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'homecomponent',
  standalone: true,
  
  imports: [CommonModule, HeaderComponent,RouterModule, FooterComponent ],
  templateUrl: 'withoutlogin.component.html',
  styleUrl: 'withoutlogin.component.css'
})
export class WithoutLoginComponent {
   presentations=[{title: 'Buy a property', link:'buyproperty.jpg', style: 'margin-top:30px; margin-left: 68.5px; font-weight: bold; font-size: 23px;'
  
  , description: "You can search for your home through the most extensive variety of listings, augmented with a unique tour.",
   descriptionstyle:'text-align: center;'}, 
   
   
   
   {title: 'Sell a property', link:'sellproperty.jpg', style: 'margin-top:30px; margin-left: 68.5px; font-weight: bold; font-size: 23px;',
  
   description: "We can navigate you to a successful sale regardless of the route you choose to sell your house.", descriptionstyle:'text-align: center;'},
   {title: 'Promote a property', link:'promoteproperty.jpg', style: 'margin-top:30px; margin-left: 43.5px; font-weight: bold; font-size: 23px;'
   , description: "We can promote your property if you pay a certain price for it.",
    
   descriptionstyle:'text-align: center; margin-top: 23px;'} ]}