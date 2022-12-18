import { Component, OnInit } from '@angular/core';
import { Subject } from '../subject';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.css']
})
export class StudentViewComponent implements OnInit{

  subjetcs: Subject[] = [];
  error = '';
  success = '';
        
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
        console.log(data);//usuń mnie lub zmień
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
    
  }

}