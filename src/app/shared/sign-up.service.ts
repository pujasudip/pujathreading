import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  SIGNUP_URL = 'http://localhost:8000/sign_up.php';

  constructor(private httpClient: HttpClient) { }

  accountCreation(controls): Observable<{}> {
    return this.httpClient.post(this.SIGNUP_URL, null, {
      params: {
        controls: controls
      }
    });



    console.log('controls:', controls);
  }
}
