import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiCallsService {

  constructor(
    private http: HttpClient
  ) { }

  movieCallUrl: string = 'http://www.omdbapi.com/?i=tt3896198&apikey=36f49728';

  getMovieTitle() {
    return this.http.get<any[]>(this.movieCallUrl);
  }

}
