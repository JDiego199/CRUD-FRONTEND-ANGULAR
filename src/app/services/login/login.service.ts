import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginService {


  private url = '/api/login'
  private url2 = '/api/login/vali/'

  constructor(private http: HttpClient) { }

  
  login(user: any, pass: any): Observable<any> {
    return this.http.get(this.url2+'/'+user, pass);
  }

  /*getLogin(nombre: String, pass: String):Observable<any>
  {
    return this.http.get(this.url2);
  }*/
/*
  saveLogin(login: Login):Observable<any>
  {
    return this.http.post(this.url, login);
  }
*/

}


export interface Login{
  // id:string;
   nombre:string;
   pass:string;

 }
 


