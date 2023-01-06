import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})

export class LoginService {


  private url = '/api/login'
  private url2 = '/api/login/vali'

  constructor(private http: HttpClient, private cookies: CookieService) { }

  
  login(user: any, password: any): Observable<any> {
    return this.http.get(this.url2+'/'+user+'+'+ password);
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
/*
setToken(token: String) {
  this.cookies.set("token", token);
}
getToken() {
  return this.cookies.get("token");
}*/

}


export interface Login{
  // id:string;
   nombre:string;
   pass:string;

 }
 


