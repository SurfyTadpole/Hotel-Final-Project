import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movieData: any[];
  movieTitle: string;

  constructor(private apiService: ApiCallsService) { }

  ngOnInit() {
    this.getMovieTitle();
  }

  getMovieTitle(): void {
    this.apiService.getMovieTitle()
      .subscribe((res: any[]) => {
        console.log(res);
        this.movieData = res;        
      });
  }

}
