import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet } from 'src/models/Planets';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {
  name: string = "";

  selectedPlanet: Planet[] | undefined;
  category: string = "overview";

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.name = params['name'];
      this.getPlanet();
    });
  }

  switchCategory(e: any) {
    let value = e.target.value;
    this.category = value;
  }

  getPlanet() {
    this.http.get<Planet[]>("assets/data/data.json").subscribe((planets) => {

      this.selectedPlanet = planets.filter((planet: any) => planet.name === this.name);
      console.log(this.selectedPlanet);
    });
  }


}
