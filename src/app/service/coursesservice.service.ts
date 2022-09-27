import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Courses } from '../Model/Courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesserviceService {

  baseUrl='http://localhost:8070/api/v1.0/lms/courses'

  constructor(private http: HttpClient) { }

  getAllCourse(): Observable<Courses[]> {
    return this.http.get<Courses[]>(`${this.baseUrl}/getAll`);
  }
}
