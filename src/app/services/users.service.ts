import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }
 
  logins(obj:any):Observable<any>{
  
    return this.http.post<any>("http://localhost:3000/api/logins", obj)
  }
  getLogins(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/logins`);
  }
  register(_id:any):Observable<any>{

    return this.http.post<any>("http://localhost:3000/api/users", _id)
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/users`);
  }

  getCurrentData(_id: any){
    return this.http.get('http://localhost:3000/api/users/${_id}')
  }

  updateUser(data: any, _id: string): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/api/users/${_id}`, data)
}
deleteUser(_id:string):Observable<any>{
  return this.http.delete(`http://localhost:3000/api/users/${_id}`)
}
}
