import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private http: HttpClient) { }

tags = ['kittens' , 'puppies' , 'funny+cat' , 'funny+dog', 'coding'];
API_KEY ='EWGZQnPkD4jicgLIXe61hXfiluLkRK7d';
base_URL = 'https://api.giphy.com/v1/gifs/random?api_key=';

getGIF(): any {
  let randomItem = this.tags[Math.floor(Math.random()*this.tags.length)];
return this.http.get(`${this.base_URL}${this.API_KEY}&tag=${randomItem}&rating=g`);


}

}
