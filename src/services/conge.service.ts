import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  getConge(id: number) {
    throw new Error('Method not implemented.');
  }

  baseurl=environment.baseurl
  constructor(private httpClient:HttpClient) { }
  getnbPresent():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/nbPresent')
  }
  getnbConge():Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/countConge')
  }
  getTypeConge(): Observable<any>{
    return this.httpClient.get(this.baseurl+'demandeconges/type')
  }
  // addConge(conge: any): Observable<any> {
  //   return this.httpClient.post(this.baseurl + 'demandeconges/', conge);
  // }
  // addConge(conge: any, id: number): Observable<any> {
  //   const url = `${this.baseurl}demandeconges/${id}`;
  //   return this.httpClient.post(url, conge);
  // }
  addConge(conge: any, employeeId: number): Observable<any> {
    return this.httpClient.post(this.baseurl + 'demandeconges/' + employeeId, conge);
  }
  


}
