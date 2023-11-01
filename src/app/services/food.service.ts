import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import {  Observable, throwError } from 'rxjs';


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
getFood(_id: any):Observable<any>{
  return this.http.get<any>(`http://localhost:3000/api/foods/${_id}`)
}

updateFood(data:any, _id: any): Observable<any> {
  return this.http.put<any>(`http://localhost:3000/api/foods/${_id}`,data)
}
deleteFood(_id:string):Observable<any>{
return this.http.delete(`http://localhost:3000/api/foods/${_id}`)
}

searchFood(title: any): Observable<any> {
  return this.http.get<any>(`http://localhost:3000/api/foods/?title=${title}`);
}

}