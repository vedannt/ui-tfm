import { Injectable } from '@angular/core';
import { ILogin } from '../login/login';
import { Constants } from '../app.constants';
import * as moment from "moment";
import { ICurrentUser } from '../login/current-user';
import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs'
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) { }

  login(user: ILogin) : Observable<any>{
    return this.httpClient.post(Constants.API_URL + 'login', user);
  }

  currentUser() : Observable<ICurrentUser>{
    return this.httpClient
      .get<ICurrentUser>(Constants.API_URL + 'currentUser');

  }

  setSession(jwt : string) {
    localStorage.setItem('id_token', jwt);
  }

  removeSession(){
    localStorage.removeItem('id_token');
  }
}
