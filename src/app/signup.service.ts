import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
  private apiUrl = 'http://localhost:3000/role';

  constructor(private http: HttpClient) { }

  register(data:any): Observable<any>{
   return this.http.post<any>(`$ {this.apiUrl}/register`, data); 
  }
}
