import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FootballService {

  jsonUrl: string = "https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.clubs.json";

  constructor(private http: HttpClient) { 
    this.http.get(this.jsonUrl).subscribe(
      list => console.log("footballList", list),
      error => console.error(error),
      () => console.log("complete")
    );

  }
}
