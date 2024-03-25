import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  result: any;
  token: any;


  public add(a: number, b: number) {
    this.result = a + b;
  }

  public getAllPosts(userId?: number): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts' + (userId ? `?userId=${userId}` : ''));
  }

  // post - save, put - update, get - fetch, delete - delete

}
