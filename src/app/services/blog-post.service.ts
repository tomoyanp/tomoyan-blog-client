import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
  private url = '/api/blog-post';

  constructor(private http: HttpClient) { }

  post(data: object, files) {
    const formData = new FormData();
    files.forEach(file => { 
      console.log(file.name);
      formData.append(file.name, file, file.name);
    });
    formData.append('data', JSON.stringify(data));
    return this.http.post(
      this.url,
      formData,
    );
  }
}
