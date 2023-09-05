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
  planets: Planet[] | any;
  selectedPlanet: Planet[] | any;

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.getPlanet();
    this.route.params.subscribe(params => {
      this.name = params['name'];
      console.log(this.planets);
    });
  }

  getPlanet() {
    this.http.get<Planet[]>("assets/data/data.json").subscribe((planets) => {
      this.planets = planets;
      let selectedPlanet = this.planets.filter((planet: any) => planet.name === this.name);
      console.log(selectedPlanet);
    });
  }


}
