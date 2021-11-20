import { Injectable } from '@angular/core';
import { Constants } from '../app/constants';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {


  constructor(
    private httpClient: HttpClient,

  ) { }
  save(data: any): Observable<any> {
    return this.httpClient.post(Constants.API_ENDPOINT + "save", data);
  }
  delete(data: any): Observable<any> {
    return this.httpClient.delete(Constants.API_ENDPOINT + "delete", data);
  }
}
