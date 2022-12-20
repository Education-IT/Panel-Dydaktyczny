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
  numer = 4;
  ile = 0;
  codes = 0;
  
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
        console.log(data.length);//usuń mnie lub zmień
        this.ile = data.length -1;
        this.numer = this.ile;
      },
      (err) => {
        console.log(err);
        this.error = err;
      }
    );
      
  }

  code(x:number) : void{
    console.log(x);
    if (x == -1){
        this.numer = -1;
        this.codes = 0;
    }
    else{
        this.numer = Number(x)-1;
    }
    
    console.log(this.numer);
  }

  codeF(x: number) : void{
    if(x == 1){
      this.codes = 1;
    }
    else{
      this.codes = 2;
    }

  }
 

}

