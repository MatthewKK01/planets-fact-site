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

  getPlanetClass(): string {
    switch (this.name) {
      case 'mercury':
        return 'bg-[#419EBB]';
      case 'venus':
        return 'bg-[#EDA249]';
      // Add cases for other planets as needed
      case 'earth':
        return 'bg-[#6D2ED5]';
      case 'mars':
        return 'bg-[#D14C32]';
      case 'jupiter':
        return 'bg-[#D83A34]';
      case 'saturn':
        return 'bg-[#CD5120]';
      case 'uranus':
        return 'bg-[#1EC1A2]';
      case 'neptune':
        return 'bg-[#2D68F0]';
      default:
        return 'bg-none';
    }
  }
  underLine(): string {
    switch (this.name) {
      case 'mercury':
        return ' border-b-4 border-[#419EBB]';
      case 'venus':
        return 'border-b-4 border-[#EDA249]';

      case 'earth':
        return 'border-b-4 border-[#6D2ED5]';
      case 'mars':
        return 'border-b-4 border-[#D14C32]';
      case 'jupiter':
        return 'border-b-4 border-[#D83A34]';
      case 'saturn':
        return 'border-b-4 border-[#CD5120]';
      case 'uranus':
        return 'border-b-4 border-[#1EC1A2]';
      case 'neptune':
        return 'border-b-4 border-[#2D68F0]';
      default:
        return 'bg-none';
    }
  }

  switchCategory(e: any) {
    let value = e.target.value;
    this.category = value;
  }

  getPlanet() {
    this.http.get<Planet[]>("assets/data/data.json").subscribe((planets) => {

      this.selectedPlanet = planets.filter((planet: Planet) => planet.name.toLowerCase() === this.name.toLowerCase());
      console.log(this.selectedPlanet);
    });
  }


}
