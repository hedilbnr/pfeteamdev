import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PointageService {
  baseurl=environment.baseurl

  constructor(private httpClient:HttpClient) { }
  getpointages():Observable<any>{
    return this.httpClient.get(this.baseurl+'pointage/today')
  }

}
