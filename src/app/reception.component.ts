import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@Component({
  selector: 'reception',
  template: `  
  <mat-card>
  <mat-card-title>Choose caters</mat-card-title>
        <input type="text" matInput placeholder="Address line 1" [(ngModel)]="CaterAddress1"/>
        <input type="text" matInput placeholder="Address line 2"[(ngModel)]="CaterAddress2"/>
        <input type="text" matInput placeholder="City/Town" [(ngModel)]="CaterCity"/>
        <input type="text" matInput placeholder="Postcode" [(ngModel)]="CaterPostcode"/>
        <input type="text" matInput placeholder="Country" [(ngModel)]="CaterCountry"/>
        <input type="tel" matInput placeholder="Caterer phone number" [(ngModel)]="CaterPhone"/>
        <input type="url" matInput placeholder="Caterer website" [(ngModel)]="CaterWebsite"/>
  </mat-card>

  <mat-card>
  <mat-card-title>Wedding cake</mat-card-title>
        <textarea matInput placeholder="Notes about cake..." [(ngModel)]="CakeDetails"></textarea>
        <input type="text" matInput placeholder="Cake maker name" [(ngModel)]="CakeMakerName"/>
        <input type="text" matInput placeholder="Address line 1" [(ngModel)]="CakeAddress1"/>
        <input type="text" matInput placeholder="Address line 2" [(ngModel)]="CakeAddress2"/>
        <input type="text" matInput placeholder="City/Town" [(ngModel)]="CakeCity"/>
        <input type="text" matInput placeholder="Postcode" [(ngModel)]="CakePostcode"/>
        <input type="text" matInput placeholder="Country" [(ngModel)]="CakeCountry"/>
        <input type="tel" matInput placeholder="Cake shop phone number" [(ngModel)]="CakePhone"/>
        <input type="url" matInput placeholder="Cake shop website" [(ngModel)]="CakeWebsite" />

  </mat-card>

  <mat-card>
  <mat-card-title>Choose venue</mat-card-title>
        <input type="text" matInput placeholder="Venue name" [(ngModel)]="VenueName"/>
        <input type="text" matInput placeholder="Address line 1" [(ngModel)]="VenueAddress1"/>
        <input type="text" matInput placeholder="Address line 2" [(ngModel)]="VenueAddress2"/>
        <input type="text" matInput placeholder="City/Town" [(ngModel)]="VenueCity"/>
        <input type="text" matInput placeholder="Postcode" [(ngModel)]="VenuePostcode"/>
        <input type="text" matInput placeholder="Country" [(ngModel)]="VenueCountry"/>
        <input type="tel" matInput placeholder="Venue phone number" [(ngModel)]="VenuePhone"/>
        <input type="url" matInput placeholder="Venue website" [(ngModel)]="VenueWebsite"/>
  </mat-card>

  <mat-card>
      <mat-card-title>Choose Accessories</mat-card-title>
      <textarea matInput placeholder="Accessories notes..." [(ngModel)]="AccessoryDetails"></textarea>
  </mat-card>

  <mat-card>
  <mat-card-title>Choose seating plan</mat-card-title>
  <textarea matInput placeholder="Seating plan arrangements..." [(ngModel)]="SeatingPlanDetails"></textarea>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ReceptionComponent implements OnInit {
  @Input() name: string;

  CaterAddress1:any;
  CaterAddress2:any;
  CaterCity:any;
  CaterPostcode:any;
  CaterCountry:any;
  CaterPhone:any;
  CaterWebsite:any;

  CakeDetails:any;
  CakeMakerName:any;
  CakeAddress1:any;
  CakeAddress2:any;
  CakeCity:any;
  CakePostcode:any;
  CakeCountry:any;
  CakePhone:any;
  CakeWebsite:any;

  VenueName:any;
  VenueAddress1:any;
  VenueAddress2:any;
  VenueCity:any;
  VenuePostcode:any;
  VenueCountry:any;
  VenuePhone:any;
  VenueWebsite:any;

  AccessoryDetails:any;
  SeatingPlanDetails:any;

  ngOnInit(){

  }
}
