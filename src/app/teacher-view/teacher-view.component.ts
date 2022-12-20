import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';
import { NgForm } from '@angular/forms';

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
  next = 0;
  UPDATE = 0;

  constructor(private subjectService: SubjectService) {
  }

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects(): void {
    this.subjectService.getAll().subscribe(
      (data: Subject[]) => {
        this.subjetcs = data;
        this.success = 'successful retrieval of the list';
        console.log(data.length);
        this.ile = data.length - 1;
        this.numer = this.ile;
        this.next = this.ile + 2;
      },
      (err) => {
        console.log(err);
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

  code(x: number): void {
    console.log(x);
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

    console.log(this.numer);
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


}
