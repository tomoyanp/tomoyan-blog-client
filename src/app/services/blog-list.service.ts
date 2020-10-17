import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogListService {
  private url = '/api/blog-list';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
}
