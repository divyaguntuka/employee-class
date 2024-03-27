import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable(
    { providedIn: 'root' }
)

export class UserService {
    constructor(private http: HttpClient) { }

    private BASE_URL = 'https://jsonplaceholder.typicode.com/';

    public getAllUsers(): Observable<any> {
        return this.http.get(this.BASE_URL + 'users');
    }


    public getUser(id: number): Observable<any> {
        return this.http.get(this.BASE_URL + `users?id=${id}`);
    }

    public getAllPosts(userId?: number): Observable<any> {
        return this.http.get(this.BASE_URL + 'posts' + (userId ? `?userId=${userId}` : ''));
    }

    public getPostsComments(postId: number): Observable<any> {
        return this.http.get(this.BASE_URL + `comments?postId=${postId}`);
    }

}