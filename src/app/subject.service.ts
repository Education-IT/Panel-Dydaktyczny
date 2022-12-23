import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from './subject';
// https://phpenthusiast.com/blog/develop-angular-php-app-getting-the-list-of-items
@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  baseUrl = 'https://education-it.pl/api';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(`${this.baseUrl}/list.php`).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }


  store(subjects: Subject) {
    return this.http.post(`${this.baseUrl}/store.php`, { data: subjects }).pipe(
      map((res: any) => {
        return res['data'];
      })
    );
  }

  update(subjects: Subject) {
    return this.http.put(`${this.baseUrl}/update.php`, { data: subjects });
  }

  delete(Subject_number: any) {
    const params = new HttpParams()
      .set('Subject_number', Subject_number.toString());

    return this.http.delete(`${this.baseUrl}/delete.php`, { params: params });
  }



}
