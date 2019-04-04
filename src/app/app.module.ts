import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AmmenitiesComponent } from './ammenities/ammenities.component';
import { ReservationComponent } from './reservation/reservation.component';
import { SummaryComponent } from './summary/summary.component';
import { ThingsToDoComponent } from './things-to-do/things-to-do.component';
import { TravelTipsComponent } from './travel-tips/travel-tips.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AmmenitiesComponent,
    ReservationComponent,
    SummaryComponent,
    ThingsToDoComponent,
    TravelTipsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
