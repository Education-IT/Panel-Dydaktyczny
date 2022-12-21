import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  
  public dataNASA:any;
  public url:any;

  constructor(private nasaService: NasaService){}
  
  ngOnInit() {
    
    this.getPicture();
  }

  getPicture(): void{

    this.nasaService.getPictureOfTheDayNASA().subscribe((data: any) => {
      this.dataNASA = data;
      console.log(this.dataNASA);
      this.url = this.dataNASA.url;
      console.log(this.url);
    });
  }












}

