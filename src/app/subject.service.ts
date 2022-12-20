import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Subject } from './subject';

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

update(subjects: Subject){
  return this.http.put(`${this.baseUrl}/update.php`, { data: subjects });
}





}
