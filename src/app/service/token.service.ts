import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  url='http://challenge-react.alkemy.org';
  constructor(private http:HttpClient) { }

  login(url:string,user:object){
    return this.http.post(url,user);
  }
}