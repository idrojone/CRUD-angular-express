import { Injectable, inject } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    http = inject(HttpClient);

    private formatErrors(error: any) {
        return throwError(error.error);
    }

    get(path: string, options: { params?: HttpParams; headers?: HttpHeaders; } = {}): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, options).pipe(catchError(this.formatErrors));
    }

    delete(path: string, slug: string, options: { params?: HttpParams; headers?: HttpHeaders; } = {}): Observable<any> {
        return this.http.delete(`${environment.api_url}${path}/${slug}`, options).pipe(catchError(this.formatErrors));
    }

    post(path: string, body: Object = {}, options: { params?: HttpParams; headers?: HttpHeaders; } = {}): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, body, options).pipe(catchError(this.formatErrors));
    }

    put(path: string, body: Object = {}, options: { params?: HttpParams; headers?: HttpHeaders; } = {}): Observable<any> {
        return this.http.put(`${environment.api_url}${path}`, body, options).pipe(catchError(this.formatErrors));
    }
}