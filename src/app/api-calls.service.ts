import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { User } from '../assets/models/user';
import { ReservationModel } from 'src/assets/models/reservation-model';
import { ReservationDto } from 'src/assets/models/reservation-dto';
import { UserDto } from 'src/assets/models/user-dto';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) { }

  baseUrl: string;
  id: string;
  myData: any;

  getBaseUrl() {
    var rawUrl: string = this.document.location.origin;
    this.baseUrl = this.document.location.origin + '/api';
  }

  login(username: string) {
    this.getBaseUrl();
    return this.http.get<User>(this.baseUrl + '/admin/' + username);
  }

  submitReservation(reservation: string) {
    this.getBaseUrl();
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.baseUrl + '/reservation', reservation, options);
  }

  getAllReservations() {
    this.getBaseUrl();
    return this.http.get<ReservationDto[]>(this.baseUrl + '/reservations');
  }

  deleteReservation(reservationId: string) {
    this.getBaseUrl();
    return this.http.post(this.baseUrl + '/reservation/delete/' + reservationId, '');
  }

  createNewAdmin(newUser: UserDto) {
    this.getBaseUrl();
    return this.http.post(this.baseUrl + '/admin/add/' + newUser.username + '/' + newUser.password, '');
  }
}
