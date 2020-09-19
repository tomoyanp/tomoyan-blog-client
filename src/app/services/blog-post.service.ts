import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private url = '/api/blog-post';

  constructor(private http: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  post(data: object) {
    console.log('call post request');
    return this.http.post(
      this.url,
      data,
      this.httpOptions
    );
  }
}
