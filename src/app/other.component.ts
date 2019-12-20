import { Component, Input, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker'; 

@Component({
  selector: 'other',
  template: `
  <mat-card >
  <mat-card-title>hen/stag party</mat-card-title>
  <strong>Stag party details</strong>
  <textarea matInput placeholder="Stag party details..." [(ngModel)]="StagPartyDetails"></textarea>
  <strong>Hen party details</strong>
  <textarea matInput placeholder="Hen party details..." [(ngModel)]="HenPartyDetails"></textarea>
  </mat-card>

    <mat-card>
  <mat-card-title>Bridal suite details</mat-card-title>
  <textarea matInput placeholder="Bridal suite notes..." [(ngModel)]="BridalSuiteDetails"></textarea>
  </mat-card>

    <mat-card>
  <mat-card-title>Transport for newly wed</mat-card-title>
  <textarea matInput placeholder="Transport arrangements notes..." [(ngModel)]="TransportWed"></textarea>
  </mat-card>

    <mat-card>
  <mat-card-title>Transport for guests</mat-card-title>
  <textarea matInput placeholder="Transport arrangements notes..." [(ngModel)]="TransportGuests"></textarea>
  </mat-card>

    <mat-card>
  <mat-card-title>Entertainment for children</mat-card-title>
  <textarea matInput placeholder="Entertainment for children notes..." [(ngModel)]="EntertainmentForChildren"></textarea>
  </mat-card>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class OtherComponent implements OnInit {
  @Input() name: string;

  StagPartyDetails:any;
  HenPartyDetails:any;
  BridalSuiteDetails:any;
  TransportWed:any;
  TransportGuests:any;
  EntertainmentForChildren:any;
  ngOnInit(){
    this.StagPartyDetails = "";
    this.HenPartyDetails = "";
    this.BridalSuiteDetails = "";
    this.TransportWed = "";
    this.TransportGuests = "";
    this.EntertainmentForChildren = "";
  }
}
