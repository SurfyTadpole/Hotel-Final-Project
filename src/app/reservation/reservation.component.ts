import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { ReservationModel } from 'src/assets/models/reservation-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor(
    private apiService: ApiCallsService,
    private router: Router
  ) { }

  // value from room type radio buttons
  roomType: string;
  id: string;
  ngOnInit() {
  }

  submitReservation(arrivalDate: Date, departureDate: Date, numGuests: number, requests: string,
                    firstName: string, lastName: string, phone: string, email: string) {
      var newReservation: ReservationModel = new ReservationModel(arrivalDate, departureDate, numGuests,
        requests, firstName, lastName, phone, email, this.roomType);

      var reservationJSON = JSON.stringify(newReservation);
      this.apiService.submitReservation(reservationJSON).subscribe(res =>{
        this.id = res['_id'];
        this.router.navigate(['/summary'], {queryParams: {id: this.id}});

      });
  }

  setValue(type: string) {
    this.roomType = type;
  }

}
