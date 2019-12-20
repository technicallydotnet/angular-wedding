import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';

import { Observable, of } from 'rxjs';

@Component({
  selector: 'guest',
  template: `
  <mat-card>
  <mat-card-title>Write guest list</mat-card-title>
  <form>
  <mat-form-field>
  <input matInput type="text" [(ngModel)]="newguest" placeholder="new guest" name="newguest"/>
  <button type="submit" (click)="addguest(newguest)" mat-button>add guest</button>
  </mat-form-field>
  <ul>
  <li *ngFor="let g of guestList" >{{g}}<button mat-button (click)="removeguest(g)">Remove</button></li>
  </ul>
  </form>
  </mat-card>

  <mat-card >
  <mat-card-title>send out invites</mat-card-title>
  <input type="date" [(ngModel)]="invitesDate"/>
  <mat-checkbox [(ngModel)]="invitesSent">Invitations sent</mat-checkbox>
  </mat-card>

  <mat-card >
  <mat-card-title>curate hotel list for guests</mat-card-title>

    <input type="text" matInput placeholder="Address line 1" [(ngModel)]="hotelAddress1"/>
    {{hotelAddress1}}
    <input type="text" matInput placeholder="Address line 2" [(ngModel)]="hotelAddress2"/>
    <input type="text" matInput placeholder="City/Town" [(ngModel)]="hotelCity"/>
    <input type="text" matInput placeholder="Postcode" [(ngModel)]="hotelPostcode"/>
    <input type="text" matInput placeholder="Country" [(ngModel)]="hotelCountry"/>
    <input type="tel" matInput placeholder="hotel telephone" [(ngModel)]="hotelTelephone"/>
    <input type="url" matInput placeholder="hotel website" [(ngModel)]="hotelUrl"/>
  </mat-card>

  <mat-card>
  <mat-card-title>contact unresponsive guests</mat-card-title>
  <table>
  <thead>
  <tr><th>name</th><th>responded</th></tr>
  </thead>
  <tbody>
  <tr *ngFor="let g of guestList">
  <td>{{g}}</td>
  <td><mat-checkbox>attending?</mat-checkbox></td>
  </tr>
  </tbody>
  </table>
  </mat-card>

  <mat-card>
  <mat-card-title>buy gifts for best man/bridesmaid</mat-card-title>
  <mat-checkbox [(ngModel)]="bmg">Best man gift?</mat-checkbox>
  <input type="text" matInput placeholder="gift name" *ngIf="bmg" [(ngModel)]="bestManGift"/>
  <mat-checkbox [(ngModel)]="bg">bridesmaid gift?</mat-checkbox>
  <input type="text" matInput placeholder="gift name" *ngIf="bg" [(ngModel)]="bridesmaidGift"/>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class GuestComponent implements OnInit{

  @Input() name: string;

  guestList: string[];
  invitesDate:Date;
  invitesSent:boolean;
  hotelAddress1:any;
  hotelAddress2:any;
  hotelCity:any;
  hotelPostcode:any;
  hotelCountry:any;
  hotelTelephone:any;
  hotelUrl:any;
  bestManGift:string;
  bridesmaidGift:string;

  newguest = "";

  addguest(n){
    this.guestList.push(n);
    console.log(this.invitesDate);
  }
  removeguest(g){
    this.guestList.splice(g,1);
  }
  printall(){
    console.log(this.hotelAddress1);
  }

  ngOnInit(){
    this.guestList = [];
    this.invitesDate = new Date();
    this.invitesSent = false;
    this.hotelAddress1 = "";
    this.hotelAddress2 = "";
    this.hotelCity = "";
    this.hotelPostcode = "";
    this.hotelCountry = "";
    this.hotelTelephone = "";
    this.hotelUrl = "";
    this.bestManGift = "";
    this.bridesmaidGift = "";
  }

  constructor(){
  }
}
