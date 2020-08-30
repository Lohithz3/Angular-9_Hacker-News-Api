import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Articles } from './articles';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrlStory = 'https://hacker-news.firebaseio.com/v0/showstories.json?print=pretty';
const apiUrl = 'https://hacker-news.firebaseio.com/v0/item/8863.json?print=pretty';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getstroy(){
    return this.http.get(apiUrlStory);
  }

  public sendGetRequest(number){
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + number + '.json?print=pretty');
  }
  public sendGetRequestcomments(diff){
    return this.http.get('https://hacker-news.firebaseio.com/v0/item/' + diff + '.json?print=pretty');
  }
}
