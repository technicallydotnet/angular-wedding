import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { OtherComponent } from './other.component';
import { CeremonyComponent } from './ceremony.component';
import { GuestComponent } from './guest.component';
import { ReceptionComponent } from './reception.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatExpansionModule, BrowserAnimationsModule, MatCardModule, MatCheckboxModule, MatSliderModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule,MatTabsModule],
  declarations: [ AppComponent,OtherComponent, CeremonyComponent, GuestComponent, ReceptionComponent],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
