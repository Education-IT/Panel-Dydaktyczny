import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../services/subject.service';
import { NgForm } from '@angular/forms';
import { LocalStorageService } from '../services/local-storage.service';
import { AUTH_TOKEN_KEY } from '../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-view',
  templateUrl: './teacher-view.component.html',
  styleUrls: ['./teacher-view.component.css']
})
export class TeacherViewComponent implements OnInit {

  subjetcs: Subject[] = [];
  subject: Subject = { Subject_number: 0, Subject_name: '', Subject_summary: '', Subject_homework: '' };
  error = '';
  success = '';
  numer = 4;
  ile = 0;
  codes = 0;

  UPDATE = 0;

  constructor(private router: Router, private subjectService: SubjectService, private localStorageService: LocalStorageService) {
  }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getAll().subscribe(
      (data: Subject[]) => {
        this.subjetcs = data;
        this.success = 'successful retrieval of the list';

        this.ile = data.length - 1;
        this.numer = this.ile;

      },
      (err) => {

        this.error = err;
      }
    );

  }
  resetAlerts() {
    this.error = '';
    this.success = '';
  }

  addSubject(f: NgForm) {
    this.resetAlerts();

    this.subjectService.store(this.subject).subscribe(
      (res: Subject) => {
        // Update the list of cars
        this.subjetcs.push(res)

        // Inform the user
        this.success = 'Created successfully';

        // Reset the form
        f.reset();
        alert(this.success);
      },
      (err) => {
        this.error = err.message;
        alert(this.error);
      }
    );
  }

  updateSubject(subject_number: any, subject_name: any, subject_summary: any, subject_homework: any) {
    this.resetAlerts();

    this.subjectService
      .update({ Subject_number: subject_number.value, Subject_name: subject_name.value, Subject_summary: subject_summary.value, Subject_homework: subject_homework.value })
      .subscribe(
        (res) => {
          this.success = 'Updated successfully';
          alert(this.success);
        },
        (err) => {
          this.error = err;
          alert(this.error)
        }
      );
  }

  deleteSubject(id: number) {

    if (confirm("Do you want to delete that subject?") == true) {
      this.resetAlerts();
      this.subjectService.delete(id).subscribe(
        (res) => {
          this.subjetcs = this.subjetcs.filter(function (item) {
            return item['Subject_number'] && +item['Subject_number'] !== +id;
          });

          this.success = 'Deleted successfully';
          alert(this.success);
          window.location.reload();

        },
        (err) => {
          this.error = err;
          alert(this.error);
        }
      );
    } else {
      alert("operation canceled!");
    }


  }

  code(x: number): void {

    if (x == -1) {
      this.numer = -1;
      this.codes = 0;
      this.UPDATE = 0;
    } else {
      if (x == -2) {
        this.numer = -2;
        this.codes = 0;
        this.UPDATE = 0;
      }

      else {
        this.numer = Number(x) - 1;
        this.UPDATE = 0;
      }
    }


  }

  codeF(x: number): void {
    if (x == 1) {
      this.codes = 1;
    }
    else {
      this.codes = 2;
    }

  }

  update() {
    if (this.UPDATE == 0) {
      this.UPDATE = 1;
    }
    else {
      this.UPDATE = 0;
    }
  }


  mockLogout() {
    this.localStorageService.removeItem(AUTH_TOKEN_KEY);
    this.router.navigate(['portfolio'])
  }

}
