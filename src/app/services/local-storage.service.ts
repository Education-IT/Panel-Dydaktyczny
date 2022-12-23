import { Injectable } from '@angular/core';

export const AUTH_TOKEN_KEY = 'TOKEN';
export const AUTH_TOKEN_VALUE = 'Education-IT';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  public getItem(key: string) {
    return localStorage.getItem(key)
  }
  public removeItem(key: string) {
    localStorage.removeItem(key);
  }
  public clear() {
    localStorage.clear();
  }


}
