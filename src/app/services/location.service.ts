import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getUserLocation(): Promise<string> {
    return this.http.get('https://ipapi.co/json/')
      .pipe(
        map((response: any) => {
          return response.country_name;
        }),
        catchError((error: any) => {
          console.error('Error getting user location:', error);
          return throwError('Error getting user location');
        })
      )
      .toPromise();
  }
}
