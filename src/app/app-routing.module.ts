import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component'
import { AmmenitiesComponent } from './ammenities/ammenities.component'
import { ThingsToDoComponent } from './things-to-do/things-to-do.component'
import { TravelTipsComponent } from './travel-tips/travel-tips.component'
import { ReservationComponent } from './reservation/reservation.component'
import { HomeComponent } from './home/home.component';
import { SummaryComponent } from './summary/summary.component'

const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'amenities', component: AmmenitiesComponent},
  {path: 'things-to-do', component: ThingsToDoComponent},
  {path: 'travel-tips', component: TravelTipsComponent},
  {path:  'reservation', component: ReservationComponent},
  {path: 'home', component: HomeComponent},
  {path: 'summary', component: SummaryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}  
]

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})

export class AppRoutingModule { }
