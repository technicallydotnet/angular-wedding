import { Component, Input, OnInit } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatDatepickerModule } from "@angular/material/datepicker";

@Component({
  selector: "ceremony",
  template: `
    <ol>
      <li><mat-checkbox [(ngModel)]="showvenue">Book venue</mat-checkbox></li>
      <li><mat-checkbox [(ngModel)]="showweddingparty">Appoint wedding party</mat-checkbox>
      </li>
      <li><mat-checkbox [(ngModel)]="showtheme">Choose theme</mat-checkbox></li>
      <li><mat-checkbox [(ngModel)]="showphotographer">Choose photographer</mat-checkbox>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="showflorist">Choose florist</mat-checkbox>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="showweddingdress">Wedding dress</mat-checkbox>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="showceremonydetails">Decide ceremony details</mat-checkbox>
      </li>
      <li>
        <mat-checkbox [(ngModel)]="showweddingring">Wedding ring</mat-checkbox>
      </li>
    </ol>

    <mat-card>
      <mat-card-title>book venue</mat-card-title>
        <input type="text" matInput placeholder="Address line 1" [(ngModel)]="VenueAddress1"/>
        <input type="text" matInput placeholder="Address line 2" [(ngModel)]="VenueAddress2"/>
        <input type="text" matInput placeholder="City/Town" [(ngModel)]="VenueCity"/>
        <input type="text" matInput placeholder="Postcode" [(ngModel)]="VenuePostcode"/>
        <input type="text" matInput placeholder="Country" [(ngModel)]="VenueCountry"/>
        <input type="tel" matInput placeholder="venue phone number" [(ngModel)]="VenuePhone"/>
        <input type="url" matInput placeholder="venue website" [(ngModel)]="VenueWebsite"/>
    </mat-card>

    <mat-card>
      <mat-card-title>appoint wedding party</mat-card-title>
      <div>
      <div *ngIf="bestManSaved">
      <p>Best man: {{BestManName}}</p>
      <button mat-button (click)="bestManSaved=false">edit</button>
      </div>
      <div *ngIf="!bestManSaved">
        <input type="text" matInput placeholder="best man name" [(ngModel)]="BestManName" *ngIf="!bestManSaved"/>
       <button mat-button (click)="bestManSaved=true">save</button>
      </div>
      </div>
      <div>
      <div *ngIf="bridesmaidSaved">
      <p>Best man: {{BridesmaidName}}</p>
      <button mat-button (click)="bridesmaidSaved=false">edit</button>
      </div>
      <div *ngIf="!bridesmaidSaved">
        <input type="text" matInput placeholder="bridesmaid name" [(ngModel)]="BridesmaidName" *ngIf="!bridesmaidSaved"/>
       <button mat-button (click)="bridesmaidSaved=true">save</button>
      </div>
      </div>
      <div>
      <div *ngIf="ringBearerSaved">
      <p>Best man: {{RingBearerName}}</p>
      <button mat-button (click)="ringBearerSaved=false">edit</button>
      </div>
      <div *ngIf="!ringBearerSaved">
        <input type="text" matInput placeholder="Ring Bearer name" [(ngModel)]="RingBearerName" *ngIf="!ringbearerSaved"/>
       <button mat-button (click)="ringBearerSaved=true">save</button>
      </div>
      </div>
      <div>
      <div *ngIf="flowerGirlSaved">
      <p>Best man: {{FlowerGirlName}}</p>
      <button mat-button (click)="flowerGirlSaved=false">edit</button>
      </div>
      <div *ngIf="!flowerGirlSaved">
        <input type="text" matInput placeholder="Flower girl name" [(ngModel)]="FlowerGirlName" *ngIf="!flowerGirlSaved"/>
       <button mat-button (click)="flowerGirlSaved=true">save</button>
      </div>
      </div>
      <div>
      <div *ngIf="officiantSaved">
      <p>Best man: {{OfficiantName}}</p>
      <button mat-button (click)="officiantSaved=false">edit</button>
      </div>
      <div *ngIf="!officiantSaved">
        <input type="text" matInput placeholder="officiant name" [(ngModel)]="OfficiantName" *ngIf="!officiantSaved"/>
       <button mat-button (click)="officiantSaved=true">save</button>
      </div>
      </div>
      
    </mat-card>

    <mat-card>
      <mat-card-title>choose theme</mat-card-title>
      
    </mat-card>

    <mat-card>
      <mat-card-title>choose photographer</mat-card-title>
      <input type="text" matInput placeholder="Photographer name" [(ngModel)]="PhotograherName"/>
      <input type="tel" matInput placeholder="Phone number" [(ngModel)]="PhotographerPhone"/>
      <input type="textarea" matInput placeholder="Notes for photographer" [(ngModel)]="PhotographerNotes"/>
    </mat-card>

    <mat-card>
      <mat-card-title>choose florist</mat-card-title>
      <input type="text" matInput placeholder="Florist name" [(ngModel)]="FloristName"/>
      <input type="tel" matInput placeholder="Phone number" [(ngModel)]="FloristPhone"/>
      <input type="textarea" matInput placeholder="Notes for florist" [(ngModel)]="FloristNotes"/>
    </mat-card>

    <mat-card>
      <mat-card-title>wedding dress</mat-card-title>
      <input matInput placeholder="Name" />
      <strong>wedding dress shop address</strong>
      <input type="text" matInput placeholder="Address line 1" [(ngModel)]="DressAddress1"/>
      <input type="text" matInput placeholder="Address line 2" [(ngModel)]="DressAddress2"/>
      <input type="text" matInput placeholder="City/Town" [(ngModel)]="DressCity"/>
      <input type="text" matInput placeholder="Postcode" [(ngModel)]="DressPostcode"/>
      <input type="text" matInput placeholder="Country" [(ngModel)]="DressCountry"/>
      <input type="tel" matInput placeholder="shop phone number" [(ngModel)]="DressPhone"/>
      <input type="url" matInput placeholder="shop website" [(ngModel)]="DressWebsite"/>
    </mat-card>

    <mat-card>
      <mat-card-title>decide ceremony details</mat-card-title>
      <textarea placeholder="details - order of service, who is ushering, start and end times..." [(ngModel)]="CeremonyDetails"></textarea>
    </mat-card>

    <mat-card>
      <mat-card-title>Wedding ring</mat-card-title>
      <strong>wedding ring shop address</strong>
      <input type="text" matInput placeholder="Address line 1" [(ngModel)]="RingAddress1"/>
      <input type="text" matInput placeholder="Address line 2" [(ngModel)]="RingAddress2"/>
      <input type="text" matInput placeholder="City/Town" [(ngModel)]="RingCity"/>
      <input type="text" matInput placeholder="Postcode" [(ngModel)]="RingPostcode"/>
      <input type="text" matInput placeholder="Country" [(ngModel)]="RingCountry"/>
      <input type="tel" matInput placeholder="wedding ring shop phone number" [(ngModel)]="RingPhone"/>
      <input type="url" matInput placeholder="wedding ring shop website" [(ngModel)]="RingWebsite"/>
    </mat-card>
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class CeremonyComponent implements OnInit {
  @Input() name: string;

  VenueAddress1:any;
  VenueAddress2:any;
  VenueCounty:any;
  VenueCity:any;
  VenueCountry:any;
  VenuePostcode:any;
  VenuePhone:any;
  VenueWebsite:any;
  BestManName:any;
  BridesmaidName:any;
  RingBearerName:any;
  FlowerGirlName:any;
  OfficiantName:any;
  PhotograherName:any;
  PhotographerPhone:any;
  PhotographerNotes:any;
  FloristName:any;
  FloristPhone:any;
  FloristNotes:any;
  DressAddress1:any;
  DressAddress2:any;
  DressCity:any;
  DressPostcode:any;
  DressCountry:any;
  DressPhone:any;
  DressWebsite:any;
  RingAddress1:any;
  RingAddress2:any;
  RingCity:any;
  RingPostcode:any;
  RingCountry:any;
  RingPhone:any;
  RingWebsite:any;

  ngOnInit() {
    this.VenueAddress1 = "";
  this.VenueAddress2 = "";
  this.VenueCounty = "";
  this.VenueCity = "";
  this.VenueCountry = "";
  this.VenuePostcode = "";
  this.VenuePhone = "";
  this.VenueWebsite = "";
  this.BestManName = "";
  this.BridesmaidName = "";
  this.RingBearerName = "";
  this.FlowerGirlName = "";
  this.OfficiantName = "";
  this.PhotograherName = "";
  this.PhotographerPhone = "";
  this.PhotographerNotes = "";
  this.FloristName = "";
  this.FloristPhone = "";
  this.FloristNotes = "";
  this.DressAddress1 = "";
  this.DressAddress2 = "";
  this.DressCity = "";
  this.DressPostcode = "";
  this.DressCountry = "";
  this.DressPhone = "";
  this.DressWebsite = "";
  this.RingAddress1 = "";
  this.RingAddress2 = "";
  this.RingCity = "";
  this.RingPostcode = "";
  this.RingCountry = "";
  this.RingPhone = "";
  this.RingWebsite = "";
  }
}
