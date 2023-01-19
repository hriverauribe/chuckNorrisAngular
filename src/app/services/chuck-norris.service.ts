import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private API_SERVER = "https://api.chucknorris.io/jokes/random";

  constructor( private httpClient: HttpClient) { }

  public getPhrase(): Observable<any>{
    return this.httpClient.get(this.API_SERVER);
  }

}
