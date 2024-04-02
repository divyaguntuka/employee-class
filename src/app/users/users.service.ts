import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts } from 'src/assets/classes/posts';
import { User } from 'src/assets/classes/User';

@Injectable(
    { providedIn: 'root' }
)

export class UserService {
    deleteUser(id: number) {
      throw new Error('Method not implemented.');
    }
    // saveUser(user: User) {
    //   throw new Error('Method not implemented.');
    // }
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

    public savePost(post: Posts): Observable<any> {
        return this.http.post(this.BASE_URL + 'posts', post);
    }

    public updatePost(postId: number, post: Posts): Observable<any> {
        return this.http.put(this.BASE_URL + `posts/${postId}`, post);
    }

    public deletePost(postId: number): Observable<any> {
        return this.http.delete(this.BASE_URL + `posts/${postId}`);
    }


    //user

    public saveUser(user: User): Observable<any> {
        return this.http.post(this.BASE_URL + 'user', user);
    }
    public updateUser(userId: number, user: User): Observable<any> {
        return this.http.put(this.BASE_URL + `user/${userId}`, user);
    }



}