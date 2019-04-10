import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Observable } from 'rxjs';
import { Movie } from '../movie'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movieData: Movie;

  constructor(private apiService: ApiCallsService) { }

  ngOnInit() {
    // this.getMovieTitle();
  }

  // Example
  // getMovieTitle(): void {
  //   this.apiService.getMovieTitle()
  //     .subscribe(data => {
  //       console.log(data);
  //       this.movieData = new Movie(data); 
  //       console.log(this.movieData.title);      
  //     });
  // }

}
