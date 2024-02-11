import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  private apiUrl = 'https://cdn.contentful.com/spaces/j1lug1a1cve1/environments/master/entries';
  private assetUrl = 'https://cdn.contentful.com/spaces/j1lug1a1cve1/environments/master/assets';
  private accessToken = '92nr7MTk0rbJyV2MxX4rFHcYZbvVrGD-qN3pIhSgXz4';

  constructor(private http: HttpClient) {}

  getBlogPosts(): Observable<any[]> {
    const url = `${this.apiUrl}?content_type=blogPosts&access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response.items),
      tap(data => console.log('Blog Posts:', data)),
      catchError(error => {
        console.error('Error fetching blog posts:', error);
        throw error;
      })
    );
  }

  getBlogPostById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}?access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response),
      catchError(error => {
        console.error(`Error fetching blog post with ID ${id}:`, error);
        throw error;
      })
    );
  }

  getAssets(): Observable<any[]> {
    const url = `${this.assetUrl}?access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response.items),
      tap(data => console.log('Assets:', data)),
      catchError(error => {
        console.error('Error fetching assets:', error);
        throw error;
      })
    );
  }

  getAssetById(assetId: string): Observable<any> {
    const url = `${this.assetUrl}/${assetId}?access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response),
      tap(data => console.log('Asset:', data)),
      catchError(error => {
        console.error('Error fetching asset:', error);
        throw error;
      })
    );
  }

  getLegalPolicies(): Observable<any[]> {
    const url = `${this.apiUrl}?content_type=legalPolicies&access_token=${this.accessToken}`;
    return this.http.get<any>(url).pipe(
      map(response => response.items),
      tap(data => console.log('Legal Policies:', data)),
      catchError(error => {
        console.error('Error fetching legal policies:', error);
        throw error;
      })
    );
  }
}
