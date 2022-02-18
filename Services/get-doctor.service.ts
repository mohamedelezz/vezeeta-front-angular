import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDoctorService {
  baseURL: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  gitInfo(): Observable<any> {
    return this.http.get(`${this.baseURL}/doctor`)
  }
 
}
