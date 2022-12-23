import { Component, OnInit } from '@angular/core';
import { NasaService } from '../services/nasa.service';
import { AUTH_TOKEN_KEY, AUTH_TOKEN_VALUE, LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public dataNASA: any;
  public url: any;
  xlogin = "";
  xpassword = "";
  login = "mentor@skyblue.education";
  password = "Skyrocket15!";

  constructor(private nasaService: NasaService, private localStorageService: LocalStorageService, private router: Router) { }

  ngOnInit() {
    this.getPicture();
  }

  getPicture(): void {

    this.nasaService.getPictureOfTheDayNASA().subscribe((data: any) => {
      this.dataNASA = data;
      console.log(this.dataNASA);
      this.url = this.dataNASA.url;
    });
  }


  mockLogin(login: any, password: any) {
    if (this.login === login && this.password === password) {
      console.log("Login Poprawny");
      this.localStorageService.setItem(AUTH_TOKEN_KEY, AUTH_TOKEN_VALUE);
      this.router.navigate(['teacher-view']);
    }
    else {
      console.log("Błędne login lub hasło");
    }
  }









}

