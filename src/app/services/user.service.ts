import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// I cretaed user service in order to fetch the date from external api
//  by using get method for all isers and one user by id
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=1&per_page=12');
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get(`https://reqres.in/api/users/${userId}`);
  }
}
