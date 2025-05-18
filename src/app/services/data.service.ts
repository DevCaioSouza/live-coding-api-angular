import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient)

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'

  getUserList(): Observable<any> {
    return this.http.get(this.apiUrl)
  } constructor() { }
}
