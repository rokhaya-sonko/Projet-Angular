import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { Town } from '../town';
import { MeteoComponent } from './meteo/meteo.component';
import { Component, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import {TownService} from './town.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    TownService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
