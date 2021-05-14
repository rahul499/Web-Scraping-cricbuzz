import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CricbuzzService {

  constructor(private http:HttpClient) { }

  getSchedule():Observable<any>{
    const url = "http://localhost:3000/api/match-schedule";
    return this.http.get<any>(url);
  }

  getNews():Observable<any>{
    const url = "http://localhost:3000/api/news-feed";
    return this.http.get<any>(url);
  }

  getLiveScore():Observable<any>{
    const url = "http://localhost:3000/api/scores-live";
    return this.http.get<any>(url);
  }

  getLiveScoreSoccer():Observable<any>{
    const url = "http://localhost:3000/api/liveScoreSoccer";
    return this.http.get<any>(url);
  }

}


