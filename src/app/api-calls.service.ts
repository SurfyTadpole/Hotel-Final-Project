import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DOCUMENT } from '@angular/common';
import { User } from '../assets/models/user';

@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient,
    @Inject(DOCUMENT) private document: Document
  ) { }

  // Example  
  // movieCallUrl: string = 'http://www.omdbapi.com/?t=avengers+endgame&apikey=36f49728';
  // getMovieTitle() {
  //   return this.http.get<any[]>(this.movieCallUrl);
  // }

  baseUrl: string;

  getBaseUrl() {
    var rawUrl: string = this.document.location.origin;
    this.baseUrl = this.document.location.origin + '/api';
  }

  login(username: string) {
    this.getBaseUrl();
    console.log('baseUrl: ' + this.baseUrl);
    console.log(this.baseUrl + '/admin/' + username);
    return this.http.get<User>(this.baseUrl + '/admin/' + username);
  }

  submitReservation(reservation: string) {
    this.getBaseUrl();
    var results = this.http.post(this.baseUrl + '/reservation', reservation);
    return results;
  }

}
