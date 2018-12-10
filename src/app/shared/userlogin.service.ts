import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserInfo} from './userModel';

@Injectable({
  providedIn: 'root'
})

export class UserloginService {

  LOGIN_URL = 'http://localhost:8000/userAccounts.php';

  constructor(private httpClient: HttpClient) { }

  userLogin(username: string, password: string): Observable<UserInfo> {
    return this.httpClient.post<UserInfo>(this.LOGIN_URL, null, {
      params: {
        username: username,
        password: password
      }
    }).pipe(catchError(this.handleError));
  }

  handleError (error: HttpErrorResponse) {
    if (error instanceof ErrorEvent) {
      console.error('An error occured:', error.message);
    } else {
      console.error(`Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }

    return throwError(
      'Something bad happened: please try again later.'
    );
  }
}
