import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
    private baseUrl = 'http://localhost:8080/api/conciertos'; 

    constructor(private http: HttpClient) { }

    getConciertos(): Observable<any[]> {
        return this.http.get<any[]>(this.baseUrl);
    }

    getConcierto(id: string): Observable<any> {
        return this.http.get<any>(`${this.baseUrl}/${id}`);
    }

    createConcierto(concierto: any): Observable<any> {
        return this.http.post<any>(this.baseUrl, concierto);
    }

    updateConcierto(id: string, concierto: any): Observable<any> {
        return this.http.put<any>(`${this.baseUrl}/${id}`, concierto);
    }

    deleteConcierto(id: string): Observable<any> {
        return this.http.delete<any>(`${this.baseUrl}/${id}`);
    }

    deleteAllConciertos(): Observable<any> {
        return this.http.delete<any>(this.baseUrl);
    }
}