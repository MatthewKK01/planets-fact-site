import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Planet } from 'src/models/Planets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'planets-fact-site';

  constructor(private http: HttpClient) { }
  planets: Planet[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get<Planet[]>("assets/data/data.json").subscribe((res) => {
      this.planets = res;
      console.log(this.planets);
    })
  }
}
