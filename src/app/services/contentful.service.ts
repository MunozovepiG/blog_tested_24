import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private apiUrl = 'https://cdn.contentful.com/spaces/j1lug1a1cve1/environments/master/entries';
  private accessToken = '92nr7MTk0rbJyV2MxX4rFHcYZbvVrGD-qN3pIhSgXz4'
  ;

  constructor(private http: HttpClient) { }

// Inside ContentfulService
getBlogPosts(): Observable<any[]> {
  const url = `${this.apiUrl}?content_type=blogPosts&access_token=${this.accessToken}`;
  return this.http.get<any>(url).pipe(
    map(response => response.items),
    tap(data => console.log('Blog Posts:', data)), // Log the data
    catchError(error => {
      console.error('Error fetching blog posts:', error);
      throw error;
    })
  );
}

  getBlogPostById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}?access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response.fields),
      catchError(error => {
        console.error(`Error fetching blog post with ID ${id}:`, error);
        throw error;
      })
    );
  }
}
