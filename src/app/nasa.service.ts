import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  API_KEY = 'H0zuWjnAqlU7RTT8RcniKqyMa08kmlqvfUBP8KHy';
  Base_URL = 'https://api.nasa.gov/planetary/apod?api_key=';

  getPictureOfTheDayNASA(): any {

    return this.http.get(`${this.Base_URL}${this.API_KEY}`);

  }


}
