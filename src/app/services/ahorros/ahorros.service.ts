import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AhorrosService {

  private url = "/api/ahorros";
  

  constructor(private http: HttpClient) { }

  getAhorros():Observable<any>
  {
    return this.http.get(this.url);
  }

  getUnaAhorros(id: string):Observable<any>
  {
    return this.http.get(this.url+'/'+id);
  }

  saveAhorros(ahorros: Ahorros):Observable<any>
  {
    return this.http.post(this.url, ahorros);
  }

  editAhorros(id:string, ahorros: Ahorros):Observable<any>
  {
    return this.http.put(this.url+'/'+id, ahorros);
  }

  deleteAhorros(id:string):Observable<any>
  {
    return this.http.delete(this.url+'/'+id);
  }
}


export interface Ahorros{
 // id:string;
  numCuenta:string;
  saldoInicial:string;
  cedula:string;
  nombre:string;
  interes:string;
}

/* constructor( private httpClient: HttpClient) { }

  public getAllAhorros(): Observable<any>{
    return this.httpClient.get(this.API_server);
  }

 // public saveAhorros(ahorros:any)
*/

