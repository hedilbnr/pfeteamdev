import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprefaceService {
  private apiUrl = 'http://localhost:8000/application?app=00000000-0000-0000-0000-000000000001'

  constructor(private http: HttpClient) { }
  // Méthode pour enregistrer un visage
  registerFace(imageData: FormData) {
    const endpoint = `${this.apiUrl}/register`; // Endpoint pour enregistrer un visage

    return this.http.post(endpoint, imageData);
  }

  // Méthode pour reconnaître un visage
  recognizeFace(imageData: FormData) {
    const endpoint = `${this.apiUrl}/recognize`; // Endpoint pour reconnaître un visage

    return this.http.post(endpoint, imageData);
  }
}
