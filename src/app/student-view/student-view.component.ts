import { Component, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';
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
  public dataGIF: any;
  public url:any;
  
  
  constructor(private subjectService: SubjectService , private giphyService: GiphyService) {
  }
  
  ngOnInit() {
    this.getSubjects();
    
  }
        
  getSubjects(): void {
    this.subjectService.getAll().subscribe(
      (data: Subject[]) => {
        this.subjetcs = data;
        this.success = 'successful retrieval of the list';
        
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
    
    if (x == -1){
        this.numer = -1;
        this.codes = 0;
    }
    else{
        this.numer = Number(x)-1;
    }
    
   
  }

  codeF(x: number) : void{
    if(x == 1){
      this.codes = 1;
    }
    else{
      this.codes = 2;
    }

  }
 
 getRandomGIF(): void
{
  this.giphyService.getGIF().subscribe((data: any) => {
    this.dataGIF = data;
    console.log(this.dataGIF);
    this.url = this.dataGIF.data.images.downsized.url;});
  
}

}

