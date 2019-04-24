import { Component, OnInit } from '@angular/core';
import { ApiCallsService } from '../api-calls.service';
import { User } from '../../assets/models/user';
import { ReservationModel } from 'src/assets/models/reservation-model';
import { Observable } from 'rxjs';
import { ReservationDto } from 'src/assets/models/reservation-dto';

// import { Movie } from '../movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // Example
  // movieData: Movie;

  // login variables
  loginSuccessful: boolean;
  currentUser: User;

  allReservations: Observable<any[]>;


  constructor(private apiService: ApiCallsService) { }

  ngOnInit() {
    // this.getMovieTitle();
    this.loginSuccessful = false;
  }

  // Example
  // getMovieTitle(): void {
  //   this.apiService.getMovieTitle()
  //     .subscribe(data => {
  //       console.log(data);
  //       this.movieData = new Movie(data);
  //       console.log(this.movieData.title);
  // }

  // When user clicks login, check if they are valid
  login(username: string, passwrd: string) {
    this.loginSuccessful = false;
    this.apiService.login(username)
      .subscribe(data => {
        this.currentUser = new User(data);
        if (this.currentUser.password === passwrd) {
          this.loginSuccessful = true;
          this.doSuccessfulLogin();
        } else 
        {
          this.loginSuccessful = false;          
        }
        console.log('Login successful: ' + this.loginSuccessful);
      });
  }



  // When user logs in successfully, show the data
  doSuccessfulLogin() {
    this.showAllReservations();
  }

  showAllReservations() {
    this.allReservations = this.apiService.getAllReservations();
  }

  deleteReservation(reservation: ReservationDto) {
    this.apiService.deleteReservation(reservation._id);
  }
}
