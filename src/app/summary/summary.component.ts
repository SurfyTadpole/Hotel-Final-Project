import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ReservationModel } from 'src/assets/models/reservation-model';
import { ReservationDto } from "src/assets/models/reservation-dto";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})


export class SummaryComponent implements OnInit {

  reservation: ReservationDto;
  roomType: string;
  regular: boolean = false;
  suite: boolean = false;
  deluxe: boolean = false;


  constructor(private apiService: ApiCallsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      const resID = params['id'];
      this.apiService.getReservation(resID).subscribe(res => {
        this.reservation = res;
        switch (this.reservation.roomType) {
          case 'r': {
            this.regular = true;
            this.roomType = "Regular";
            break;
          }
          case 'd': {
            this.deluxe = true;
            this.roomType = "Deluxe";

            break;
          }
          case 's': {
            this.suite = true;
            this.roomType = "Suite";
            break;
          }
        }
        this.displayReservation();
      })
    });


  }


  displayReservation() {
  }

}
