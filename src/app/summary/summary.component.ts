import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Router } from '@angular/router';
import { ReservationModel } from 'src/assets/models/reservation-model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private apiService: ApiCallsService) { }

  ngOnInit() {
  }

}
