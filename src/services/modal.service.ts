import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  remove(arg0: this) {
    throw new Error('Method not implemented.');
  }
  add(arg0: this) {
    throw new Error('Method not implemented.');
  }
  baseurl=environment.baseurl


  constructor(private httpClient:HttpClient) { }
  postusers():Observable<any>{
    return this.httpClient.get(this.baseurl+'utilisateurs')
  }

}
