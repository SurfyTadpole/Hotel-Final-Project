import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient
  ) { }

  // Example  
  // movieCallUrl: string = 'http://www.omdbapi.com/?t=avengers+endgame&apikey=36f49728';

  // getMovieTitle() {
  //   return this.http.get<any[]>(this.movieCallUrl);
  // }

}
