import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  getUserDetails(name: any, password: any){
    return this.http.get('http://localhost:3000/api/logins'+name+password);
  }
}
