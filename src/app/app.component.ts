import { Component, ViewChild,AfterViewInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { OtherComponent } from './other.component';
import { CeremonyComponent } from './ceremony.component';
import { GuestComponent } from './guest.component';
import { ReceptionComponent } from './reception.component';

import jsPDF from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular wedding app';
  budget: string[] = ["500 or less","1000","1500","2000","2500","3000","4000","5000","6000","7500","8000","9000","10000","15000","20000","25000"];

  guestList:string[];
  invitesDate:Date;
  invitesSent:boolean;
  hotelAddress1:any;
  hotelAddress2:string;
  hotelCity:string;
  hotelPostcode:string;
  hotelCountry:string;
  hotelTelephone:string;
  hotelUrl:string;
  bestManGift:string;
  bridesmaidGift:string;

  @ViewChild(CeremonyComponent,{static:false}) ceremonychild;
  @ViewChild(GuestComponent,{static:false}) guestchild;
  @ViewChild(OtherComponent,{static:false}) otherchild;
  @ViewChild(ReceptionComponent,{static:false}) receptionchild;

  saveAsPDF(){
    this.guestList = this.guestchild.guestList;
    //this.invitesDate = this.guestchild.invitesDate;
    let d = this.guestchild.invitesDate;
    this.invitesSent = this.guestchild.invitesSent;
    this.hotelAddress1 = this.guestchild.hotelAddress1;
    this.hotelAddress2 = this.guestchild.hotelAddress2;
    this.hotelCity = this.guestchild.hotelCity;
    this.hotelPostcode = this.guestchild.hotelPostcode;
    this.hotelCountry = this.guestchild.hotelCountry;
    this.hotelTelephone = this.guestchild.hotelTelephone;
    this.hotelUrl = this.guestchild.hotelUrl;
    this.bestManGift = this.guestchild.bestManGift;
    this.bridesmaidGift = this.guestchild.bridesmaidGift;

    let page1:string = "";
    let page2:string = "";
    let page3:string = "";
    let page4:string = "";
    var doc = new jsPDF();
    doc.setFontSize(11);

    for(let i =0;i<this.guestList.length;i++){
      page1 += i+". " + this.guestList[i] +"\n";
    }
    page1 += "Date to send out invitations: "+ d +"\n";
    //page1 += "Invitations sent?  "+this.invitesSent +"\n";
    page1 += "Hotel Address\n"+this.hotelAddress1 +"\n";
    page1 += this.hotelAddress2 +"\n";
    page1 += this.hotelCity +"\n";
    page1 += this.hotelPostcode +"\n";
    page1 += this.hotelCountry +"\n";
    page1 += this.hotelTelephone +"\n";
    page1 += this.hotelUrl +"\n";
    page1 += "Best man gift"+this.bestManGift +"\n";
    page1 += "Bridesmaid gift"+this.bridesmaidGift+"\n";

    doc.setFontSize(12);
    page2 += "Ceremony Address\n";
    doc.setFontSize(11);
    page2 += this.ceremonychild.VenueAddress1+"\n";
    page2 += this.ceremonychild.VenueAddress2+"\n";
    page2 += this.ceremonychild.VenueCounty+"\n";
    page2 += this.ceremonychild.VenueCity+"\n";
    page2 += this.ceremonychild.VenueCountry+"\n";
    page2 += this.ceremonychild.VenuePostcode+"\n";
    page2 += this.ceremonychild.VenuePhone+"\n";
    page2 += this.ceremonychild.VenueWebsite+"\n";
    page2 += "Best man: "+this.ceremonychild.BestManName+"\n";
    page2 += "Bridesmaid: "+this.ceremonychild.BridesmaidName+"\n";
    page2 += "RingBearer: "+this.ceremonychild.RingBearerName+"\n";
    page2 += "Flower girl name: "+this.ceremonychild.FlowerGirlName+"\n";
    doc.setFontSize(14);
    page2 += "Photographer\n";
    doc.setFontSize(11);
    page2 += this.ceremonychild.PhotographerName+"\n";
    page2 += this.ceremonychild.PhotographerPhone+"\n";
    page2 += this.ceremonychild.PhotographerNotes+"\n";
    doc.setFontSize(14);
    page2 += "Florist\n";
    doc.setFontSize(11);
    page2 += this.ceremonychild.FloristName+"\n";
    page2 += this.ceremonychild.FloristPhone+"\n";
    page2 += this.ceremonychild.FloristNotes+"\n";
    doc.setFontSize(14);
    page2 += "Wedding dress shop\n";
    doc.setFontSize(11);
    page2 += this.ceremonychild.DressAddress1+"\n";
    page2 += this.ceremonychild.DressAddress2+"\n";
    page2 += this.ceremonychild.DressCity+"\n";
    page2 += this.ceremonychild.DressPostcode+"\n";
    page2 += this.ceremonychild.DressCountry+"\n";
    page2 += this.ceremonychild.DressPhone+"\n";
    page2 += this.ceremonychild.DressWebsite+"\n";
    doc.setFontSize(14);
    page2 += "Wedding ring shop\n";
    doc.setFontSize(11);
    page2 += this.ceremonychild.RingAddress1+"\n";
    page2 += this.ceremonychild.RingAddress2+"\n";
    page2 += this.ceremonychild.RingCity+"\n";
    page2 += this.ceremonychild.RingPostcode+"\n";
    page2 += this.ceremonychild.RingCountry+"\n";
    page2 += this.ceremonychild.RingPhone+"\n";
    page2 += this.ceremonychild.RingWebsite+"\n";
    doc.setFontSize(14);
    page3 += "Catering\n";
    doc.setFontSize(11);
    page3 += this.ceremonychild.CaterAddress1+"\n";
    page3 += this.ceremonychild.CaterAddress2+"\n";
    page3 += this.ceremonychild.CaterCity+"\n";
    page3 += this.ceremonychild.CaterPostcode+"\n";
    page3 += this.ceremonychild.CaterPhone+"\n";
    page3 += this.ceremonychild.CaterWebsite+"\n";
    doc.setFontSize(14);
    page3 += "Cake\n";
    doc.setFontSize(11);
    page3 += this.ceremonychild.CakeDetails+"\n";
    page3 += this.ceremonychild.CakeMakerName+"\n";
    page3 += this.ceremonychild.CakeAddress1+"\n";
    page3 += this.ceremonychild.CakeAddress2+"\n";
    page3 += this.ceremonychild.CakeCity+"\n";
    page3 += this.ceremonychild.CakeCountry+"\n";
    page3 += this.ceremonychild.CakePhone+"\n";
    page3 += this.ceremonychild.CakeWebsite+"\n";
    doc.setFontSize(14);
    page3 += "Reception Venue\n";
    doc.setFontSize(11);
    page3 += this.ceremonychild.VenueName+"\n";
    page3 += this.ceremonychild.VenueAddress1+"\n";
    page3 += this.ceremonychild.VenueAddress2+"\n";
    page3 += this.ceremonychild.VenueCity+"\n";
    page3 += this.ceremonychild.VenuePostcode+"\n";
    page3 += this.ceremonychild.VenueCountry+"\n";
    page3 += this.ceremonychild.VenuePhone+"\n";
    page3 += this.ceremonychild.VenueWebsite+"\n";
    doc.setFontSize(14);
    page3 += "Wedding Accessories\n";
    doc.setFontSize(11);
    page3 += this.ceremonychild.AccessoryDetails+"\n";
    doc.setFontSize(12);
    page3 += "Seating plan details\n";
    doc.setFontSize(12);
    page3 += this.ceremonychild.SeatingPlanDetails+"\n";
    doc.setFontSize(12);
    
    page4 += this.ceremonychild.StagPartyDetails+"\n";
    page4 += this.ceremonychild.HenPartyDetails+"\n";
    page4 += this.ceremonychild.BridalSuiteDetails+"\n";
    page4 += this.ceremonychild.TransportWed+"\n";
    page4 += this.ceremonychild.TransportGuests+"\n";
    page4 += this.ceremonychild.EntertainmentForChildren+"\n";
    
    doc.text(page1, 10, 10);
    doc.addPage();
    doc.text(page2,10,10);
    doc.addPage();
    doc.text(page3,10,10);
    doc.addPage();
    doc.text(page4,10,10);
    doc.save('All wedding plans.pdf');
  }
  constructor(){
    this.guestList = [];
    this.invitesDate = new Date();
    this.invitesSent = false;
    this.hotelAddress1 = null;
    this.hotelAddress2 = "";
    this.hotelCity = "";
    this.hotelPostcode = "";
    this.hotelCountry = "";
    this.hotelTelephone = "";
    this.hotelUrl = "";
    this.bestManGift = "";
    this.bridesmaidGift = "";
  }
}
