import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';
import { map,catchError } from 'rxjs/operators';
import { Foods } from '../foods';
import { environment } from 'src/environments/environment';

const apiUrl = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  
constructor(private http:HttpClient){

}
getFoods():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/api/foods");
}
getFoodCategorys():Observable<any[]>{
  return this.http.get<any[]>("http://localhost:3000/api/foodcategorys");
}

getFoodCategory(_id: string): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/api/foodcategorys/${_id}`);
}

createFood(_id:any):Observable<any>{
  return this.http.post<any>("http://localhost:3000/api/foods", _id)
}

register(_id:any):Observable<any>{

  return this.http.post<any>("http://localhost:3000/api/users", _id)
}
logins(login:any):Observable<any>{

  return this.http.post<any>("http://localhost:3000/api/logins", login)
}
 
getUser(_id: string): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/api/users/${_id}`);
}


updateUser(_id: string, food:Foods ): Observable<string> {
  return this.http.put(`http://localhost:3000/api/users/${_id}`, food, { responseType: 'text' });
}

deleteUser(_id: string): Observable<string> {
  return this.http.delete(`http://localhost:3000/api/users/${_id}`, { responseType: 'text' });
}
}
