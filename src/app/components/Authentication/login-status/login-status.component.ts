import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login-status',
  templateUrl: './login-status.component.html',
  styleUrls: ['./login-status.component.css']
})
export class LoginStatusComponent implements OnInit {
  isAuthenticated = false;
  userFullName: string;
  DisplayBanner:true;
  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }

  ngOnInit(): void {
    this.getUser();
  }

  // tslint:disable-next-line:typedef
  getUser(){
    // get authenticated user
    this._http.get('http://127.0.0.1:8000/user', {withCredentials: true}).subscribe(
      (result: any) => {
        this.isAuthenticated = result;
        console.log(result);
        this.userFullName = result.name;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line:typedef
  logout(){
    this._http.post('http://127.0.0.1:8000/logout/', {}, {withCredentials: true}).subscribe(
      (result: any) => {
        this.isAuthenticated = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }


}
