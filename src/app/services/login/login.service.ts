import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  private url = '/api/login'

  constructor(private http: HttpClient) { }

  getLogin():Observable<any>
  {
    return this.http.get(this.url);
  }

  saveLogin(login: Login):Observable<any>
  {
    return this.http.post(this.url, login);
  }

}

export interface Login{
  // id:string;
   usuario:string;
   pass:string;

 }
 


