import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Property } from './property';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-property',
  standalone: true,
     imports: [RouterOutlet,  ReactiveFormsModule, DatePipe],
  
     templateUrl: './property.component.html',   styleUrl: './property.component.css' })
export class PropertyComponent {

  propertyform: FormGroup= new FormGroup({});           propertylist: Property[]=[];

    
  
   constructor(){this.produceform(); debugger; const oldData=  localStorage.getItem("PropertyData");   
   
   if(oldData != null){
    const parseData= JSON.parse(oldData); 
    this.propertylist= parseData;} }

   propertyobj: Property = new Property();
  produceform(){ this.propertyform= new FormGroup({
    id: new FormControl(this.propertyobj.id),
    category: new FormControl(this.propertyobj.category),
    location: new FormControl(this.propertyobj.location),
    price: new FormControl(this.propertyobj.price),
    surface: new FormControl(this.propertyobj.surface),
    nroffloors: new FormControl(this.propertyobj.nroffloors),
    description: new FormControl(this.propertyobj.description),
     
     
     }) }
  onSave(){  debugger; const oldData=  localStorage.getItem("PropertyData");

     if(oldData != null){

      const parseData= JSON.parse(oldData); 
      this.propertyform.controls['id'].setValue(parseData.length +1);
      this.propertylist.unshift(this.propertyform.value);
    } 
    
    
    else{ this.propertylist.unshift(this.propertyform.value);} localStorage.setItem("PropertyData", JSON.stringify(this.propertylist)); }
  
  
  
  
  
  
  
  
  
  
    
    onEdit(item: Property){
      this.propertyobj= item;
      this.produceform()
    }
    onUpdate(){
      const record= this.propertylist.find(p => p.id == this.propertyform.controls['id'].value);
      if(record !=undefined){
        record.category= this.propertyform.controls['category'].value;

        record.location= this.propertyform.controls['location'].value;
        record.price= this.propertyform.controls['price'].value;

        record.surface= this.propertyform.controls['surface'].value;
        record.nroffloors= this.propertyform.controls['nroffloors'].value;
        record.description= this.propertyform.controls['description'].value;
      }
      localStorage.setItem("PropertyData", JSON.stringify(this.propertylist));
      this.propertyobj= new Property(); this.produceform()
    }





    onDelete(id: number){
      const isDelete= confirm("Are you sure you want to delete the property?");
      if(isDelete){ const index= this.propertylist.findIndex(p=> p.id==id);
      
      this.propertylist.splice(index, 1); }}  
     resetdetails() {this.propertyobj= new Property(); this.produceform()

          }
    
     
     
          newdate: Date= new Date();   }