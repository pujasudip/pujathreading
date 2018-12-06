import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  LOGIN_URL = 'http://localhost:8000/userAccounts.php';

  constructor(private httpClient: HttpClient) { }

  userLogin(username: string, password: string) {
    const params = new HttpParams();
    params.append('username', username);
    params.append('password', password);
    this.httpClient.post(this.LOGIN_URL, params).subscribe(
      ( response ) => {
        console.log('resp:', response);
      }
    );
  }
}
